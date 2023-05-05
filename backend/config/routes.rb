Rails.application.routes.draw do
  default_url_options :host => "http://localhost:3000"
  devise_for :users, controllers: {
    
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
  resources :listings do 
    collection do
        get 'search'
    end
  end
  
  resources :favorites, only: [:index, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*path', to: "static_pages#frontend_index"
end
