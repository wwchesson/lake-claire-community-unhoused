class Resident < User
    has_many :resident_activities
    has_many :activities, through: :resident_activities

    belongs_to :dorm
    belongs_to :therapist

    def resident_dorm
        self.dorm.name
    end

end
