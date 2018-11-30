require 'date'
require 'yaml'

class CamOnHudson

  def initialize
    @today = Date.today.strftime "%Y-%m-%d"
    @schedule = "ping" #schedule
  end


end
