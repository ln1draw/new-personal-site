class StitchifyController < ApplicationController
  require 'RMagick'
  def index
    
  end

  def svg
    url = params[:url]
    width = params[:width].to_i
    colors = params[:num_of_colors].to_i
    custom = params[:custom_colors]
    color_arr = []
    color_arr = custom.split(', ') if !custom.blank?
    puts '-------about to make a stitchifier'
    puts 'url is ' + url
    s = Stitchifier.new(url, width, 10, colors)
    puts '-------stitchifier exists'
    s.build_color_set(color_arr) if color_arr.length > 0
    puts '-------about to drawrasem'
    d = Stitchifier::DrawRasem.new(s.stitch_map, s.width, s.px, s.color_set)
    svg = d.build_rasem_data.to_s
    puts '-------about to render'
    render json: {svg: svg}
  end
end