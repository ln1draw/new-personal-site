class Stitchpic < ActiveRecord::Migration[5.0]
  def change
    create_table :stitchdata do |t|
      t.string :picture
      t.integer :ascii_width

      t.timestamps
    end
  end
end
