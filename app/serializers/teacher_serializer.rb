class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :title, :type, :date_of_birth, :phone, :emer_name, :emer_phone


end
