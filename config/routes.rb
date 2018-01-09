Rails.application.routes.draw do
  get 'welcome/index'
  get 'about', to: 'welcome#about'
  get 'contact', to: 'welcome#contact'

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
