require 'date'
require 'yaml'

class CamOnHudson

  def initialize
    @today = Date.today.strftime "%Y-%m-%d"
    @schedule = schedule
  end

  private

  def schedule
    schedule_file = "#{@today}-schedule.yml"
    if File.exists? schedule_file
      YAML::load_file schedule_file
    # else
    #   create_schedule
    end
    
  end

end
