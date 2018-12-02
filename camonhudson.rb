require 'date'
require 'yaml'
require 'sun_times'

class CamOnHudson

  @@latitude = 40.818017
  @@longitude = -73.960409

  def initialize
    @today = Date.today
    @today_string = @today.strftime "%Y-%m-%d"
    @schedule = schedule
  end

  private


  def schedule
    schedule_file = "#{@today_string}-schedule.yml"
    if File.exists? schedule_file
      YAML::load_file schedule_file
    else
      create_schedule
    end
  end

  def create_schedule
    calculator = SunTimes.new
    schedule = { 
      sunrise: calculator.rise(@today, @@latitude, @@longitude),
      sunset: calculator.set(@today, @@latitude, @@longitude)
    }
    File.open("#{@today}-schedule.yml", "w") do |file|
      file.puts YAML::dump(schedule)
    end
    schedule
  end

end
