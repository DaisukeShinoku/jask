Rails.application.routes.draw do
  resources :test, only: %i[index]

  post '/signup', to: 'registrations#signup'

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/logged_in', to: 'sessions#logged_in?'
end
