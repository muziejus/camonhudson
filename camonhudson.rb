require 'date'
require 'yaml'
require 'sun_times'

class CamOnHudson

  @@latitude = 40.818017
  @@longitude = -73.960409
  @@configs_file = "configs.yml"

  def initialize
    @configs = configs
  end

  private


  def configs
    if File.exists? @@configs_file
      YAML::load_file @@configs_file
    else
      create_configs_file
    end
  end

  def create_configs_file
    today = Date.today
    configs_object = {
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
