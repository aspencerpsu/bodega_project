require 'sinatra'
configure(:development){set: database, "sqlite3:blog.sqlite3"}

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
  @@username = params[:username]
  @@text = params[:text]
  puts "Params are #{@@username}, #{@@text}"
  puts params
  erb :checkout
end
