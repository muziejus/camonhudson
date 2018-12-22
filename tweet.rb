require 'twitter'

class Tweet

  attr_accessor :text

  def initialize
    @text = ""
    @client = start_client
  end

  def post
    @client.update_with_media @text, File.new(File.join Dir.getwd, "image-cropped.jpg")
  end

  private

  def configs
    config_file = File.join Dir.getwd, "twitter.yml"
    if File.exists? config_file
      YAML::load_file config_file
    else
      raise "No Twitter configs file"
    end
  end

  def start_client
    @configs = configs
    @client ||= Twitter::REST::Client.new do |config|
      config.consumer_key = @configs[:consumer_key]
      config.consumer_secret = @configs[:consumer_secret]
      config.access_token = @configs[:access_token]
      config.access_token_secret = @configs[:access_token_secret]
    end
  end

end
