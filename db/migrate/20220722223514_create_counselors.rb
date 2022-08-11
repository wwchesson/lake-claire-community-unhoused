class CreateCounselors < ActiveRecord::Migration[6.1]
  def change
    create_table :counselors do |t|
      t.string :title
      t.string :name
      t.string :date_of_birth
      t.string :phone
      t.string :email
      t.string :address
      t.string :emer_name
      t.string :emer_phone

      t.timestamps
    end
  end
end
