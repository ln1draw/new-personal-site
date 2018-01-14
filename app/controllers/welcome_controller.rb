class WelcomeController < ApplicationController
  def index
    @title = "Ellen Wondra"
  end

  def resume
    @title = "Resume | Ellen Wondra"
  end

  def contact
    @title = "Contact | Ellen Wondra"
  end
end
