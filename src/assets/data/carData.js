// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 2999,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " A Tesla is an electric vehicle that runs on batteries and an electric motor instead of an internal combustion engine. This means that Tesla vehicles rely on renewable energy sources and produce zero emissions, making them a cleaner, more sustainable option for transportation.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 3090,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Overview. With a raucous 769-hp V-12 engine and an exotic exterior, the 2022 Lamborghini Aventador is the definition of a hyper car. While competitors such as the Ferrari SF90 embrace an electrified future, the Lambo's 12-cylinder mill swills fuel like a frat bro chugs a beer.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 6000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Diesel engine is 1995 cc while the Petrol engine is 2998 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the X3 has a mileage of 16.35 to 16.55 kmpl . The X3 is a 5 seater.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 1500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Murciélago is an all-wheel drive, mid-engine sports car. With an angular design and a low slung body, the highest point of the roof is just under 4 feet (1.2 m) above the ground..",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 4500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
       
     " For car owners, it's the little things that matter as much as the performance, economy and looks, so high-tech infotainment centres, practical storage, and plenty of leg-room make the Camry a winner.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 5500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Powertrain Options: One of the greatest things about the 2023 Volvo XC90 is the powertrain options. It comes with a B5 mild-hybrid 4-cylinder engine that packs 295 horsepower and 310 lb-ft torque, providing you with both power and fuel efficiency.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 1900,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The subcompact Fiesta, offered in sedan and four-door hatchback bodies, drives nicely, with agile handling and a supple, controlled ride. Wind, road, and engine noise are well suppressed.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 1890,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " A Rolls-Royce is more than a motor car. It is a work of art, hand-made to order exclusively for you, by our team of highly skilled craftspeople and designers. Whatever you imagine your ideal motor car to be, bring your unique vision to life with Rolls-Royce Bespoke.",
  },
];

export default carData;
