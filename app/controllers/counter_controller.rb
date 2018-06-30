class CounterController < ApplicationController
  def index
  end

  def add_one
    @c = Counter.first_or_create
    @c.clicks = 0 if @c.clicks.nil?
    @c.clicks = @c.clicks + 1
    @c.save!
    render json: { clicks: @c.clicks }
  end

  def show
    @c = Counter.first_or_create
    render json: { clicks: @c.clicks }
  end
end
