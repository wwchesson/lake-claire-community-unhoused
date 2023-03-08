class ChangeCounselorTableName < ActiveRecord::Migration[6.1]
  def change
    rename_table :counselors, :employees
  end
end
