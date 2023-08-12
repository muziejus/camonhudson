require 'twitter'
require 'oauth'
require 'yaml'

if File.exists? 'twitter.yml'
  puts "Found configs"
  configs = YAML::load_file 'twitter.yml'
  consumer = OAuth::Consumer.new(configs[:consumer_key], configs[:consumer_secret], site: "https://api.twitter.com")
  request_token = consumer.get_request_token
  request = consumer.create_signed_request(:get, consumer.authorize_path, request_token, {:oauth_callback => 'oob'})
  params = request['Authorization'].sub(/^OAuth\s+/, '').split(/,\s+/).map do |param|
    key, value = param.split('=')
    value =~ /"(.*?)"/
    "#{key}=#{CGI::escape($1)}"
    end.join('&')
  puts "Paste the url below into your browser while logged in to the bot."
  puts "https://api.twitter.com#{request.path}?#{params}"
  puts "Now type in the provided pin code:"
  pin_code = gets.chomp
  puts "Using #{pin_code}."
  access_token = request_token.get_access_token(oauth_verifier: pin_code)
  configs[:access_token] = access_token.token
  configs[:access_token_secret] = access_token.secret
  File.open('twitter.yml', 'w') do |file|
    file.puts YAML::dump(configs)
  end
else
  raise "No configs file"
end
