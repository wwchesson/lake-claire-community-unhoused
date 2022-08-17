class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :day_of_week, :time_of_day, :teacher_id, :resident_id
  belongs_to :teacher
end
