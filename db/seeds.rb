puts "🌱 Seeding spices..."
Dorm.create(name: "Grandmaster Flash", floor: 2, number_of_beds: 10)

Administrator.create(name: "Julia Cameron", username: "jcameron1234", password: "jcameron1234", email: "jcameron@example.com", type: "Administrator", title: "Dr.", date_of_birth: "09-09-1987", phone: "555-666-7777")
Administrator.create(name: "Gary Snyder", username: "gsynder1234", password: "gsynder1234", email: "gsynder@example.com", type: "Administrator", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777")
Teacher.create(name: "Dainin Katagiri", username: "dkatagiri1234", password: "dkatagiri1234", email: "dkatagiri@example.com", type: "Teacher", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777")
Teacher.create(name: "Tommy Orange", username: "torange1234", password: "torange1234", email: "torange@example.com", type: "Teacher", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777")
Teacher.create(name: "Barbara Kingsolver", username: "bkingsolver1234", password: "bkingsolver1234", email: "bkingsolver@example.com", type: "Teacher", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777")
Therapist.create(name: "Joanne Rowling", username: "jrowling1234", password: "jrowling1234", email: "jrowling@example.com", type: "Therapist", title: "Dr.", date_of_birth: "09-09-1987", phone: "555-666-7777")
Therapist.create(name: "Marcus Aurelius", username: "maurelius1234", password: "maurelius1234", email: "maurelius@example.com", type: "Therapist", title: "Dr.", date_of_birth: "09-09-1987", phone: "555-666-7777")


Resident.create!(name: "Ursula LeGuin", username: "uleguin1234", password: "uleguin1234", email: "uleguin@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 6, dorm_id: 1, image: "https://www.pbs.org/wnet/americanmasters/files/2019/07/0352_BLP_UKL_Young-400x400.jpg")
Resident.create(name: "Graham Greene", username: "ggreene1234", password: "ggreene1234", email: "ggreene@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 6, dorm_id: 1, image: "https://heartheboatsing.files.wordpress.com/2015/11/graham-greene.jpg")

Resident.create(name: "Gayl Jones", username: "gjones1234", password: "gjones1234", email: "gjones@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 6, dorm_id: 1, image: "https://carnegiecenterlex.org/wp-content/uploads/2020/06/gayl-jones.jpg")
Resident.create(name: "Richard Rohr", username: "rrohr1234", password: "rrohr1234", email: "rrohr@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 6, dorm_id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/9/98/RichardRohr00208r.jpg")
Resident.create(name: "Niall Ferguson", username: "nferguson1234", password: "nferguson1234", email: "nferguson@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 6, dorm_id: 1, image: "https://highprofiles.info/wp-content/uploads/2016/04/Ferguson-main.jpg")

Resident.create(name: "Marie Arana", username: "marana1234", password: "marana1234", email: "marana1234@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 7, dorm_id: 1, image: "https://static01.nyt.com/images/2006/07/16/books/aran190.jpg?quality=75&auto=webp&disable=upscale")

Resident.create(name: "David Graeber", username: "dgraeber1234", password: "dgraeber1234", email: "dgraeber1234@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 7, dorm_id: 1, image: "https://blog.pmpress.org/wp-content/uploads/2020/09/David-Greaber-2.jpg")

Resident.create(name: "Julio Cortazar", username: "jcortazar1234", password: "jcortazar1234", email: "jcortazar1234@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 7, dorm_id: 1, image: "https://miro.medium.com/v2/resize:fit:1008/format:webp/1*_UnxdvFnz0IIWv1WFtc3TQ.jpeg")

Resident.create(name: "Jorge Borges", username: "jborges1234", password: "jborges1234", email: "jborges1234@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 7, dorm_id: 1, image: "https://articulosparapensar.files.wordpress.com/2013/08/jorge-luis-borges-e1377435347122.jpg")

Resident.create(name: "Tom Stoppard", username: "tstoppard1234", password: "tstoppard1234", email: "tstoppard1234@example.com", type: "Resident", title: "", date_of_birth: "09-09-1987", phone: "555-666-7777", therapist_id: 7, dorm_id: 1, image: "https://www.beachamjournal.com/.a/6a01053653b3c7970b0282e10d742c200b-800wi")


Activity.create(name: "Gardening", day_of_week: "M, W", time_of_day: "14:00", teacher_id: 3)
Activity.create(name: "Yoga", day_of_week: "M, W", time_of_day: "11:00", teacher_id: 3)
Activity.create(name: "Cooking", day_of_week: "T, R", time_of_day: "10:00", teacher_id: 4)
Activity.create(name: "Construction", day_of_week: "W, F", time_of_day: "10:00", teacher_id: 4)
Activity.create(name: "Study Hall", day_of_week: "All", time_of_day: "15:00", teacher_id: 5)
Activity.create(name: "Cleaning", day_of_week: "M, W, F", time_of_day: "17:00", teacher_id: 5)
Activity.create(name: "Classes", day_of_week: "All", time_of_day: "9:00", teacher_id: 5)

# ResidentActivity.create(resident_id: , activity_id: )
# ResidentActivity.create(resident_id: , activity_id: )
# ResidentActivity.create(resident_id: , activity_id: )
# ResidentActivity.create(resident_id: , activity_id: )
# ResidentActivity.create(resident_id: , activity_id: )








puts "✅ Done seeding!"
