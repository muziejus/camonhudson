# frozen_string_literal: true
require 'spec_helper'

describe CamOnHudson do

  let(:cam){ 
    CamOnHudson.new 
  }

  context "#initialize" do

    context "loads the configs" do

      it "as @configs" do
        expect(cam.instance_variable_get :@configs ).not_to be_nil
      end

      it "which is a Hash" do
        expect(cam.instance_variable_get :@configs ).to be_a Hash
      end

    end

  end

      # it "as @schedule" do
      #   expect(local_cam.instance_variable_get :@schedule ).not_to be_nil
      # end

      # it "from a yaml file called yyyy-mm-dd-schedule.yml" do
      #   expect(local_cam.instance_variable_get :@schedule ).to be_a Hash
      # end

      # it "has the keys :sunrise and :sunset" do
      #   expect(local_cam.instance_variable_get(:@schedule).keys).to contain_exactly :sunrise, :sunset
      # end
    # end

    # context "else it creates a new schedule" do

      # let(:schedule){ cam.instance_variable_get(:@schedule) }

      # it "has the keys :sunrise and :sunset" do
      #   expect(schedule.keys).to contain_exactly :sunrise, :sunset
      # end

      # it "has keys that are Times" do
      #   types = schedule.map{ |k,v| v.class }.uniq
      #   expect(types[0]).to eq Time
      # end

      # it "has keys that are *only* Times" do
      #   types = schedule.map{ |k,v| v.class }.uniq
      #   expect(types.length).to eq 1
      # end
    # end
  # end

end
