class CreateResidents < ActiveRecord::Migration[6.1]
  def change
    create_table :residents do |t|
      t.string :name
      t.string :date_of_birth
      t.string :phone
      t.string :email
      t.string :counselor_id
      t.string :dorm_id

      t.timestamps
    end
  end
end
