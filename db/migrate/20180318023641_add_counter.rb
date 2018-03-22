class AddCounter < ActiveRecord::Migration[5.0]
  def change

    create_table :counters do |t|
      t.integer :clicks

      t.timestamps
    end

  end
end




