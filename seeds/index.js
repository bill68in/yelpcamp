const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20 + 10);
        const camp = new Campground({
            author: '60a48a8fac11f223aca4ac6f',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt ullam repellat provident doloremque. Expedita eum magnam quo molestias, consectetur at. Nulla, dolorum placeat. Perferendis voluptatibus repudiandae fugiat praesentium explicabo.",
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dtidehyxo/image/upload/v1619060749/YelpCamp/ps8vmbijw9gdc5cej7jf.jpg',
                    filename: 'YelpCamp/ps8vmbijw9gdc5cej7jf'
                },
                {
                    url: 'https://res.cloudinary.com/dtidehyxo/image/upload/v1619060763/YelpCamp/vlchgjunsupickjcxiad.jpg',
                    filename: 'YelpCamp/vlchgjunsupickjcxiad'
                }
            ],
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})