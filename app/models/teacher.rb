class Teacher < ApplicationRecord
    has_many :activities
    has_many :residents, through: :activities
end
