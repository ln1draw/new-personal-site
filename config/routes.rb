Rails.application.routes.draw do
  get 'counter/index'

  get 'counter/add_one'

  get 'counter/show'

  get 'welcome/index'
  get 'resume', to: 'welcome#resume'
  get 'links', to: 'welcome#links'

  get 'stitchify', to: 'stitchify#index'
  get 'stitchify/svg', to: 'stitchify#svg'

  mount Monologue::Engine, at: '/blog'

  root 'welcome#index'
  match "*path", to: redirect('/'), via: :all
end
