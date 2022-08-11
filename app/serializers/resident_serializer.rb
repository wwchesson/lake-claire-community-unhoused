class ResidentSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_of_birth, :phone, :email, :counselor_id, :dorm_id
end
