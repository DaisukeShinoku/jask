Rails.application.routes.draw do
  resources :test, only: %i[index]

  post '/signup', to: 'registrations#signup'
end
