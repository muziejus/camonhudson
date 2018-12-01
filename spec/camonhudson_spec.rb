# frozen_string_literal: true
require 'spec_helper'

describe CamOnHudson do

  let(:cam){ CamOnHudson.new }

  context "#initialize" do
    it "sets @today" do
      today = Date.today.strftime "%Y-%m-%d"
      expect(cam.instance_variable_get :@today ).to eq today
    end
    context "loads the day's schedule" do

      let(:local_cam){
        today = Date.today.strftime "%Y-%m-%d"
        File.open("#{today}-schedule.yml", "w") do |file|
          file.puts YAML::dump({ sunrise: "foo", sunset: "bar" })
        end
        local_cam = CamOnHudson.new
        File.delete("#{today}-schedule.yml")
        local_cam
      }
      
      it "as @schedule" do
        expect(local_cam.instance_variable_get :@schedule ).not_to be_nil
      end

      it "from a yaml file called yyyy-mm-dd-schedule.yml" do
        expect(local_cam.instance_variable_get :@schedule ).to be_a Hash
      end
    end

    context "else it creates a new schedule"

    it "loads the day's schedule, in a file "
    it "builds a schedule if none exists"
  end

end
