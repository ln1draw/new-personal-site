Rails.application.routes.draw do
  get 'welcome/index'
  get 'resume', to: 'welcome#resume'
  get 'links', to: 'welcome#links'

  get 'blog', to: 'blog#index'
  get 'blog/:id', to: 'blog#show'

  root 'welcome#index'
  match "*path", to: redirect('/'), via: :all
end
