class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :day_of_week, :time_of_day, :teacher_id
  belongs_to :teacher
end
