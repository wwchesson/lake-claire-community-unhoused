class ChangeTeacherIdName < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :teacher_id, :therapist_id
  end
end
