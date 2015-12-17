require 'sinatra'


get '/'  do 
  @title = "Home"
  erb :index
end

get '/index'  do 
  @title = "Home"
  erb :index
end

get '/about' do 
  @title = "About"
  erb :about
end

get '/store' do 
  @title = "Store"
  erb :store
end

get '/contact' do
  @title = "Contact"
  erb :contact
end

post '/contact' do
  @username = username
  @text = text
  erb :contact
end
