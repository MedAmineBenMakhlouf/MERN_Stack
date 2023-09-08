use first_db

db.createCollection("Students")

db.Students.insert([{name:"Alex",home_state:"Barcelone",lucky_number:35,birthday:{month:10,day:02,year:1988}},
{name:"Alen",home_state:"Tunisia",lucky_number:2,birthday:{month:07,day:02,year:1988}},
{name:"John",home_state:"UK",lucky_number:15,birthday:{month:10,day:15,year:1989}},
{name:"Yassine",home_state:"USA",lucky_number:10,birthday:{month:01,day:12,year:2000}},
{name:"Luk",home_state:"India",lucky_number:14,birthday:{month:06,day:14,year:1986}}])

db.Students.find()

db.Students.find({home_state:"India"})

db.Students.find({home_state:"UK"})

db.Students.find({lucky_number:{$gt:3}})

db.Students.find({lucky_number:{$lte:10}})

db.Students.find({lucky_number:{ $in: [10,19]}})

db.Students.updateOne({ name: "Luk" }, { $set: { interests: { $each: ['travel', 'hiking', 'reading'] } } })

db.Students.updateOne({name:"Luk"},{$push:{interests:"coding"}})

db.Students.updateOne({ name: "Luk" },{$pull: {interests: "taxes"}})

db.Students.deleteMany({ home_state: "USA" })

db.Students.deleteOne({ lucky_number: { $gt: 5 } })

db.Students.updateMany({}, { $set: { number_of_belts: 0 } })

db.Students.updateMany({ state: "UK" }, { $inc: { number_of_belts: 1 } })

db.Students.updateMany({}, { $rename: { 'number_of_belts': 'belts_earned' } })

db.Students.updateMany({}, { $unset: { 'lucky_number': "" } })

db.Students.updateMany({}, { $currentDate: { 'updated_on': true } })
