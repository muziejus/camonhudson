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
    take_photo if camera?
  end

  def camera?
    true if `imagesnap -l` =~ /#{@configs[:camera]}/
  end

  def take_photo
    `imagesnap -d #{@configs[:camera]} -w 5 #{@raw_image}`
    image = Magick::Image.read(@raw_image).first
    cropped_image = image.crop(141, 0, 1697, 950)
    cropped_image.write(@cropped_image)
    tweet
  end

  def tweet
    if ENV['RAILS_ENV'] == 'test'
      puts "in test"
    else
      now = Time.now
      solar_times = sun_schedule Date.today
      tweet = Tweet.new
      tweet.text = ""
      if now - solar_times[:sunrise] < 120
        tweet.text = "🌅 at #{now} in New York City"
      elsif solar_times[:sunset] - now < 120
        tweet.text = "🌇 at #{now} in New York City"
      elsif rand < @configs[:rate]
        tweet.text = "Greetings from 🗽 at #{now}"
      end
      unless tweet.text == ""
        puts tweet.text
        tweet.post
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
