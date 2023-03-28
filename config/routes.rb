Rails.application.routes.draw do
  resources :resident_activities
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # get "/residents", to: "users#getresidents"

  get "/residentactivities/:id", to: "residents#show"
  resources :dorms
  resources :residents
  # resources :counselors
  resources :activities
  resources :teachers
  resources :users

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
