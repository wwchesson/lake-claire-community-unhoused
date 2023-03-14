class Teacher < User
    has_many :activities
    # has_many :residents, through: :activities

    def students
        self.residents.map{|resident| resident.name}
    end
end
