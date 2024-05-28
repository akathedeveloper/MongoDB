use("CrudDB")   //created a CrudDB and switches to it

db.createCollection("courses")   //new collection added named courses

db.courses.insertOne({
    name: "ReactJS",
    price: 350,
    assignments: 12,
    projects: 3
})

db.courses.insertMany([
    {
        name: "AngularJS",
        price: 450,
        assignments: 15,
        projects: 4

    },
    {
        name: "VueJS",
        price: 300,
        assignments: 10,
        projects: 2
    },
    {
        name: "NodeJS",
        price: 400,
        assignments: 12,
        projects:1

    }
])


let a=db.courses.find({price:350})
console.log(a)

let b=db.courses.findOne({price:450})
console.log(b)

//Update
db.courses.updateOne({price:450},{$set:{price:1000}})

db.courses.updateMany({price:350},{$set:{price:0}})


//Delete
db.courses.deleteOne({price:1000})
db.courses.deleteMany({price:1000})

// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://www.mongodb.com/developer/products/mongodb/cheat-sheet/