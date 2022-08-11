class DormSerializer < ActiveModel::Serializer
  attributes :id, :name, :floor, :number_of_beds
end
