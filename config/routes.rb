# Rails.application.routes.draw do
#   get 'hello_angular/index'
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#   # Defines the root path route ("/")
#   # root "articles#index"
# end

Rails.application.routes.draw do

  root 'hello_angular#index'
  get 'hello_angular/index'

end
