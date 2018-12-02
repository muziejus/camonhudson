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
    if ENV['RAILS_ENV'] = 'test'
      true
    else
      puts "not testing"
      
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
        sunrise: calculator.rise(date, @@latitude, @@longitude).getlocal,
        sunset: calculator.set(date, @@latitude, @@longitude).getlocal
      }
  end

end
