class WelcomeController < ApplicationController
  def index
    @title = "Ellen Wondra"
  end

  def about
    @title = "About Ellen Wondra"
  end

  def contact
    @title = "Contact Ellen Wondra"
  end
end
