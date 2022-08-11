class CounselorSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :date_of_birth, :phone, :email, :address, :emer_name, :emer_phone
end
