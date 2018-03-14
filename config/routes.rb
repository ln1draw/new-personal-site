Rails.application.routes.draw do
  get 'welcome/index'
  get 'resume', to: 'welcome#resume'
  get 'links', to: 'welcome#links'

  mount Monologue::Engine, at: '/blog'

  root 'welcome#index'
  match "*path", to: redirect('/'), via: :all
end
