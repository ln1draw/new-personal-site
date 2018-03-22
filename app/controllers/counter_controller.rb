class CounterController < ApplicationController
  def index
  end

  def add_one
    @c = Counter.first
    @c.clicks = @c.clicks + 1
    @c.save!
    render json: { clicks: @c.clicks }
  end

  def show
    @c = Counter.first
    render json: { clicks: @c.clicks }
  end
end
