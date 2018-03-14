class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_blog_var

  private

  def set_blog_var
    @blog = request.path.match('/blog').nil? ? false : true
  end
end
