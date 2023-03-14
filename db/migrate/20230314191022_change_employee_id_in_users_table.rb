class ChangeEmployeeIdInUsersTable < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :employee_id, :teacher_id
  end
end
