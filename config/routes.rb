Rails.application.routes.draw do
  
  resources :styles, only: [:index, :show]
  resources :tattoos, only: [:show] #maybe create if we don't get away with it
  resources :users, only: [:create, :update, :destroy]
  resources :favorites
  

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  patch '/user/:id', to: "users#update"
  delete "/user/:id", to: "users#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/tattoos', to: "tattoos#index"
  get '/my-favorites', to: "favorites#user_favorites"
  delete '/my-favorites/:id', to: "favorites#destroy"



  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end