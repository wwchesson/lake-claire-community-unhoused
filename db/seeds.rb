puts "🌱 Seeding spices..."

User.create(name: "Julia Cameron", username: "", password: "", type: "", title: "", date_of_birth: "", phone: "")
User.create(name: "Gary Snyder", username: "", password: "", type: "", title: "", date_of_birth: "", phone: "")
User.create(name: "Dainin Katagiri", username: "", password: "", type: "", title: "", date_of_birth: "", phone: "")
User.create(name: "Tommy Orange", username: "", password: "", type: "", title: "", date_of_birth: "", phone: "")
User.create(name: "Barbara Kingsolver", username: "", password: "", type: "", title: "", date_of_birth: "", phone: "")

User.create(name: "Ursula LeGuin", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "Graham Greene", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "Gayl Jones", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "Richard Rohr", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "Niall Ferguson", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "Marie Arana", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "David Graeber", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "Julio Cortazar", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "Jorge Borges", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")
User.create(name: "Tom Stoppard", username: "", password: "", type: "Resident", title: "", date_of_birth: "", phone: "", employee_id: "", dorm_id: "")


Activity.create(name: "Gardening", day_of_week: "M, W", time_of_day: "14:00", teacher_id: Faker::Number.within(range: 1..5), User_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Yoga", day_of_week: "M, W", time_of_day: "11:00", teacher_id: Faker::Number.within(range: 1..5), User_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Cooking", day_of_week: "T, R", time_of_day: "10:00", teacher_id: Faker::Number.within(range: 1..5), User_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Construction", day_of_week: "W, F", time_of_day: "10:00", teacher_id: Faker::Number.within(range: 1..5), User_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Study Hall", day_of_week: "All", time_of_day: "15:00", teacher_id: Faker::Number.within(range: 1..5), User_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Cleaning", day_of_week: "M, W, F", time_of_day: "17:00", teacher_id: Faker::Number.within(range: 1..5), User_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Classes", day_of_week: "All", time_of_day: "9:00", teacher_id: Faker::Number.within(range: 1..5), User_id: Faker::Number.within(range: 1..10))


Dorm.create(name: "Grandmaster Flash", floor: 2, number_of_beds: 15)
Dorm.create(name: "Kool Herc", floor: 2, number_of_beds: 20)
Dorm.create(name: "Furious Five", floor: 3, number_of_beds: 20)
Dorm.create(name: "Afrika Bambaataa", floor: 3, number_of_beds: 15)





puts "✅ Done seeding!"
