class ResidentWithActivitiesSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_of_birth, :phone, :email, :counselor_id, :dorm_id
  has_many :activities
  belongs_to :dorm
  belongs_to :counselor
end
