Rails.application.routes.draw do
  get 'welcome/index'
  get 'resume', to: 'welcome#resume'
  get 'links', to: 'welcome#links'

  root 'welcome#index'
  match "*path", to: redirect('/'), via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
