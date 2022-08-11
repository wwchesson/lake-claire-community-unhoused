class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :day_of_week
      t.string :time_of_day
      t.integer :teacher_id
      t.integer :resident_id

      t.timestamps
    end
  end
end
