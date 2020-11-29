Rails.application.routes.draw do
  get 'counter/index'
  get 'counter/add_one'
  get 'counter/show'

  get 'welcome/index'

  get 'qr-cross-stitch', to: redirect('/')
  get 'stitchify',       to: 'stitchify#index'

  root 'welcome#index'
  match "*path", to: redirect('/'), via: :all
end
