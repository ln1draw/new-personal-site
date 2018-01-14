Rails.application.routes.draw do
  get 'welcome/index'
  get 'resume', to: 'welcome#resume'
  get 'contact', to: 'welcome#contact'

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
