class AddAttributesToUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :lastname
    rename_column :users, :firstname, :name
    add_column :users, :title, :string
    add_column :users, :date_of_birth, :string
    add_column :users, :phone, :string
    add_column :users, :address, :string
    add_column :users, :emer_name, :string
    add_column :users, :emer_phone, :string
    add_column :users, :employee_id, :integer
    add_column :users, :dorm_id, :integer
  end
end
