class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_of_birth, :phone, :email, :address, :emer_name, :emer_phone


end
