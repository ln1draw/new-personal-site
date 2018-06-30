class StitchifyController < ApplicationController
  require 'tempfile'
  def index
    
  end

  def svg
    url = params[:url]
    width = params[:width]
    s = Stitchifier.new(url, width.to_i)
    d = Stitchifier::DrawRasem.new(s.stitch_map, s.width, s.px, s.color_set)
    svg = d.build_rasem_data.to_s


    # s = Stitchifier.new
    # s.ascii_width = @stitchpic.ascii_width
    # @svg_data = s.stitch_to_output(@stitchpic.picture.current_path)

    render json: {svg: svg}
  end
end



# remove upload