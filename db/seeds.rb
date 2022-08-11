puts "🌱 Seeding spices..."

10.times do(
    Resident.create(
        name: Faker::Name.name,
        date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 70),
        phone: Faker::PhoneNumber.cell_phone,
        email: Faker::Internet.safe_email,
        counselor_id: Faker::Number.within(range: 1..5),
        dorm_id: Faker::Number.within(range: 1..5)
    )
)
end

Activity.create(name: "Gardening", day_of_week: "M, W", time_of_day: "14:00", teacher_id: Faker::Number.within(range: 1..5), resident_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Yoga", day_of_week: "M, W", time_of_day: "11:00", teacher_id: Faker::Number.within(range: 1..5), resident_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Cooking", day_of_week: "T, R", time_of_day: "10:00", teacher_id: Faker::Number.within(range: 1..5), resident_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Construction", day_of_week: "W, F", time_of_day: "10:00", teacher_id: Faker::Number.within(range: 1..5), resident_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Study Hall", day_of_week: "All", time_of_day: "15:00", teacher_id: Faker::Number.within(range: 1..5), resident_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Cleaning", day_of_week: "M, W, F", time_of_day: "17:00", teacher_id: Faker::Number.within(range: 1..5), resident_id: Faker::Number.within(range: 1..10))
Activity.create(name: "Classes", day_of_week: "All", time_of_day: "9:00", teacher_id: Faker::Number.within(range: 1..5), resident_id: Faker::Number.within(range: 1..10))

7.times do(
    Teacher.create(
        name: Faker::Name.name,
        date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 70),
        phone: Faker::PhoneNumber.cell_phone,
        email: Faker::Internet.safe_email,
        address: Faker::Address.full_address,
        emer_name: Faker::Name.name,
        emer_phone: Faker::PhoneNumber.cell_phone
    )
)
end

4.times do(
    Counselor.create(
        title: "Dr",
        name: Faker::Name.name,
        date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 70),
        phone: Faker::PhoneNumber.cell_phone,
        email: Faker::Internet.safe_email,
        address: Faker::Address.full_address,
        emer_name: Faker::Name.name,
        emer_phone: Faker::PhoneNumber.cell_phone
    )
)
end

Dorm.create(name: "Grandmaster Flash", floor: 2, number_of_beds: 15)
Dorm.create(name: "Kool Herc", floor: 2, number_of_beds: 20)
Dorm.create(name: "Furious Five", floor: 3, number_of_beds: 20)
Dorm.create(name: "Afrika Bambaataa", floor: 3, number_of_beds: 15)


    


puts "✅ Done seeding!"
