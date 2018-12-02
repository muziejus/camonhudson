# frozen_string_literal: true
require 'spec_helper'

describe CamOnHudson do

  let(:cam){ 
    file = Date.today.strftime "%Y-%m-%d-schedule.yml"
    File.delete(file) if File.exists? file
    CamOnHudson.new 
  }

  context "#initialize" do

    it "sets @today_string" do
      today = Date.today.strftime "%Y-%m-%d"
      expect(cam.instance_variable_get :@today_string ).to eq today
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

      it "has the keys :sunrise and :sunset" do
        expect(local_cam.instance_variable_get(:@schedule).keys).to contain_exactly :sunrise, :sunset
      end
    end

    context "else it creates a new schedule" do

      let(:schedule){ cam.instance_variable_get(:@schedule) }

      it "has the keys :sunrise and :sunset" do
        expect(schedule.keys).to contain_exactly :sunrise, :sunset
      end

      it "has keys that are Times" do
        types = schedule.map{ |k,v| v.class }.uniq
        expect(types[0]).to eq Time
      end

      it "has keys that are *only* Times" do
        types = schedule.map{ |k,v| v.class }.uniq
        expect(types.length).to eq 1
      end
    end


    it "loads the day's schedule, in a file "
    it "builds a schedule if none exists"
  end

end
