Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'random_greeting', to: 'messages#random_greeting'
    end
  end
  
end
