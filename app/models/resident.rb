class Resident < User
    has_many :activities
    has_many :teachers, through: :activities
    belongs_to :dorm
    belongs_to :therapist



end
