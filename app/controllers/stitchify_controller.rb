class StitchifyController < ApplicationController
  require 'tempfile'
  def index
    @stitchpic = Stitchdata.new
    @stitchpic.ascii_width = 50
  end

  def create
    @stitchpic = Stitchdata.new
    @stitchpic.ascii_width = stitcher_params[:ascii_width].to_i
    @stitchpic.picture = stitcher_params[:picture]
    @stitchpic.save

    s = Stitchifier.new
    s.ascii_width = @stitchpic.ascii_width
    @svg_data = s.stitch_to_output(@stitchpic.picture.current_path)

    @stitchpic.remove_picture!
    @stitchpic.save!
    FileUtils.rm_rf('public/uploads/stitchdata')

    render :show
  end

  private

  def stitcher_params
    params.require(:stitchdata).permit(:picture, :ascii_width)
  end
end



# remove upload