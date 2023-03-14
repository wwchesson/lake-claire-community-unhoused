class Activity < ApplicationRecord
    belongs_to :teacher

    has_many :resident_activities
    has_many :residents, through: :resident_activities
end
