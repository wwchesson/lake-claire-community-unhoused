class RemoveColumnsFromResidents < ActiveRecord::Migration[6.1]
  def change
    remove_columns :residents, :name, :date_of_birth, :phone, :email, :counselor_id, :dorm_id
    remove_columns :employees, :title, :name, :date_of_birth, :phone, :email, :address, :emer_name, :emer_phone
  end
end
