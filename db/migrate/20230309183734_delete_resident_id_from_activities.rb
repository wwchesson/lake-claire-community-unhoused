class DeleteResidentIdFromActivities < ActiveRecord::Migration[6.1]
  def change
    remove_column :activities, :resident_id
  end
end
