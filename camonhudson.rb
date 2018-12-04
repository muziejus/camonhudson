require 'date'
require 'yaml'
require 'rmagick'
require 'sun_times'
require './tweet'

class CamOnHudson

  @@configs_file = "configs.yml"

  def initialize
    @configs = configs
    @raw_image = File.join Dir.getwd, "image-raw.png"
    @cropped_image = File.join Dir.getwd, "image-cropped.png"
    tweet
  end

  def camera?
    `/usr/local/bin/imagesnap -l` =~ /#{@configs[:camera]}/
  end

  def take_photo
    script_path = "/tmp/imagesnap.sh"
    File.open(script_path, "w") do |f|
      f.puts "#!/bin/sh"
      f.puts "/usr/local/bin/imagesnap -d #{@configs[:camera]} -w 5 #{@raw_image}"
    end
    system "chmod 755 #{script_path}"
    system "open -Fga Terminal.app /tmp/imagesnap.sh ; sleep 10 ; killall Terminal"
    sleep 20 # Wait to crop just in case.
    image = Magick::Image.read(@raw_image).first
    cropped_image = image.crop(141, 0, 1697, 950)
    cropped_image.write(@cropped_image)
    File.delete(@raw_image)
  end

  def tweet
    if ENV['RAILS_ENV'] == 'test'
      puts "in test"
    else
      coin = rand
      now = Time.now
      solar_times = sun_schedule Date.today
      tweet_post = Tweet.new
      tweet_post.text = ""
      if (now - solar_times[:sunrise]).between?(0, 120)
        tweet_post.text = "🌅 at #{now} in New York City"
      elsif (solar_times[:sunset] - now).between?(0, 120)
        tweet_post.text = "🌇 at #{now} in New York City"
      elsif coin < @configs[:rate]
        tweet_post.text = "Greetings from 🗽 at #{now}"
      end
      unless tweet_post.text == ""
        if camera?
          take_photo
          puts "#{now}: #{tweet_post.text}"
          tweet_post.post
        else
          puts "#{now} No camera."
        end
      end
    end
  end

  private

  def configs
    if File.exists? @@configs_file
      YAML::load_file(@@configs_file)
    else
      raise "No configs.yml. See configs.yml.example"
    end
  end

  def create_configs_file
    today = Date.today
    configs_object = {
      today: today,
      sun_schedule: sun_schedule(today)
    }
    File.open(@@configs_file, "w") do |file|
      file.puts YAML::dump(configs_object)
    end
    configs
  end

  def sun_schedule(date)
    calculator = SunTimes.new
      { 
        sunrise: calculator.rise(date, @configs[:latitude], @configs[:longitude]).getlocal,
        sunset: calculator.set(date, @configs[:latitude], @configs[:longitude]).getlocal
      }
  end

end
