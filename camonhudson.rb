require 'date'
require 'yaml'
require 'sun_times'

class CamOnHudson

  @@configs_file = "configs.yml"

  def initialize
    @configs = configs
    take_photo if camera?
  end

  def camera?
    true if `imagesnap -l` =~ /#{@configs[:camera]}/
  end

  def take_photo
    true
  end

  def tweet
    true
  end

  private

  def configs
    if File.exists? @@configs_file
      YAML::load_file @@configs_file
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
