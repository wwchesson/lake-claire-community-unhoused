class CreateDorms < ActiveRecord::Migration[6.1]
  def change
    create_table :dorms do |t|
      t.string :name
      t.integer :floor
      t.integer :number_of_beds

      t.timestamps
    end
  end
end
