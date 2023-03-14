class CreateResidentActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :resident_activities do |t|
      t.integer :resident_id
      t.integer :activity_id

      t.timestamps
    end
  end
end
