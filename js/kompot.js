import { blog_hero, JourneyTab } from "./reusable/blog_Hero.js";

document.querySelector("#blogHero").innerHTML = blog_hero({
  image: "../asset/image/kompot-image/kompotnight.webp",
  image_desc: "Kompot Night",
  blog_head: "kompot . reverside",
  blog_sub_head: "cambodia . 3 days / 2 nights",
  blog_title: "Slow down where the river meets the mountain.",
  blog_text:
    "A quieter Cambodia — misty peaks, pepper vines, limestone caves, and long golden evenings on the Kampot River.",
  duration: "3 days / 2 nights",
  location: "Kompot, Kh",
  transportation: "Private van",
  stayHotel: "3-4 star hotel",
  bestTime: "nov - apr",
  visitExper: "six ways to slow all the way down",
  visitDesc:
    "Kampot isn't a checklist town — it's mountain air, pepper vines, and a river that doesn't ask you to hurry.",
  visitExperience: [
    {
      visit_title: "Bokor Mountain",
      visit_description:
        "Cool air, colonial ruins, and sweeping views across Bokor National Park.",
    },
    {
      visit_title: "Kompot Pepper farm",
      visit_description:
        "Walk the vines that made this small province famous on menus worldwide.",
    },
    {
      visit_title: "Kompot river cruise",
      visit_description:
        "A slow boat past limestone cliffs and rice paddies at golden hour.",
    },
    {
      visit_title: "kayaking",
      visit_description:
        "Paddle quiet backwaters where the only sound is the water and the birds.",
    },
    {
      visit_title: "Phnom Chhngok Cave Temple",
      visit_description:
        "A centuries-old shrine tucked inside a limestone cave, lit by shafts of daylight.",
    },
    {
      visit_title: "Sunset by the River",
      visit_description:
        "The province's signature moment — sky and water both turning gold together.",
    },
  ],
  journey_title: "Three days, following the rever's pace",
  days: [
    {
      day: 1,
      btn_title: "discover kampot",

      day_title: "Discover Kampot",

      day_description:
        "Arrive, settle in, and get your first taste of the pepper and river life the province is built on.",

      stops: [
        {
          time: "on arrivel",
          title: "Arrival",
          description:
            "Picked up and driven straight into Kompot's slower rhythm.",
        },
        {
          time: " early Afternoon",
          title: "Hotel Check-in",
          description:
            "Settle in and unpack before the afternoon's first stop.",
        },
        {
          time: "Afternoon",
          title: "pepper farm",
          description:
            "Walk the vines and tast pepper at every stage, from green to black.",
        },
        {
          time: "late afternoon",
          title: "Kompot town",
          description:
            "Wander the French colonial shopfronts along the riverfront.",
        },
        {
          time: "Evening",
          title: "Riverside Sunset",
          description:
            "Kompot's daily show - sky, water, and the far hills all turning gold.",
        },
      ],
    },

    {
      day: 2,
      btn_title: "nature & adventure",

      day_title: "Nature & Adventure",

      day_description:
        "A full day outdoors - from mountain air to river water.",

      stops: [
        {
          time: "Morning",
          title: "Bokor National Park",
          description:
            "Wind up into the hills for cool air and views acroos the coastline.",
        },
        {
          time: "late Afternoon",
          title: "Waterfall",
          description: "A refreshing stop among the park's jungle streams.",
        },
        {
          time: "Midday",
          title: "Locak lunch",
          description:
            "A proper break before the afternoon back down at the river.",
        },
        {
          time: "Afternoon",
          title: "River cruise",
          description:
            "Drift past limestone sliffs and rice paddies at a paddle's pace.",
        },
        {
          time: "evening",
          title: "Sunset",
          description: "A second sunset, this time from the water itself.",
        },
      ],
    },

    {
      day: 3,
      btn_title: "culture & departure",

      day_title: "Culture & Departure",

      day_description:
        "One last morning of quiet discovery before heading home.",

      stops: [
        {
          time: "Morning",
          title: "Phnom Chhngok Cave",
          description:
            "Climb into a limestone cave to find a centuries-old brick temple inside.",
        },
        {
          time: "Midday",
          title: "Local food",
          description:
            "One final Kompot meal - pepper crab, if you haven't tried it yet.",
        },
        {
          time: "Early afternoon",
          title: "Kompot Market",
          description:
            "Last stop for pepper, dried fruit, and handmade souvenirs.",
        },
        {
          time: "afternoon",
          title: "departute",
          description: "Driven back in good time for your onward journey.",
        },
      ],
    },
  ],
  //Place to visit
  placeVisitTitle: "five places that define kompot",
  placeVisitCard: [
    {
      image: "../asset/image/kompot-image/Borkor.webp",
      img_desc: "BorKor Mountain",
      image_title: "Bokor Mountain",
      image_description:
        "Cool misty air, colonial ruins, and views across the entire coastline.",
    },
    {
      image: "../asset/image/kompot-image/peper_farm.webp",
      img_desc: "Pepper Farm",
      image_title: "Kompot Pepper Farm",
      image_description:
        "The vines behind Cambodia's most famous export, walked and tasted in person.",
    },
    {
      image: "../asset/image/kompot-image/kompot_river.webp",
      img_desc: "Kompot River",
      image_title: "Kompot River",
      image_description:
        "The slow, wide river that gives the whole province its unhurried pace.",
    },
    {
      image: "../asset/image/kompot-image/Phnom_Chhngok.webp",
      img_desc: "Phnom Chhngok",
      image_title: "Phnom Chhngok",
      image_description:
        "An ancient brick temple hidden inside a cave lit by shafts of daylight.",
    },
    {
      image: "../asset/image/kompot-image/riverside_sunset.webp",
      img_desc: "Riverside Sunset",
      image_title: "Sunset by the River",
      image_description:
        "Kampot's daily ritual — worth building your whole evening around.",
    },
  ],
  //food images
  foods_title: "what's worth trying here",
  localFood: [
    {
      foodName: "Kompot Pepper Crab",
      foodDesc: "signature",
    },
    {
      foodName: "Fresh Sea Food",
      foodDesc: "coastal",
    },
    {
      foodName: "Fish Amok",
      foodDesc: "classic",
    },
    {
      foodName: "Local Fruit",
      foodDesc: "Fresh daily",
    },
    {
      foodName: "Pepper Product",
      foodDesc: "to bring home",
    },
  ],
  FoodImage: [
    {
      image: "../asset/image/food/Kampot_Pepper_Crab.webp",
      food_desc: "Kompot Pepper Crab",
    },
    {
      image: "../asset/image/food/Fresh_Seafood.webp",
      food_desc: "Fresh Dea Food",
    },
    {
      image: "../asset/image/food/Pepper_Products.webp",
      food_desc: "Pepper Product",
    },
    {
      image: "../asset/image/food/Fish_Amok.webp",
      food_desc: "Fish Amok Food",
    },
    {
      image: "../asset/image/food/Local_Fruit.webp",
      food_desc: "Local Fruit",
    },
  ],
  //hotel
  hotelImage: "../asset/image/kompot-image/Amber_resort.webp",
  hotelDesc: "Amber Hotel",
  hotelName: "Amber Resort",
  hotelDescription:
    "A relaxed 3-4 star stay on or near the river, with the facilities and location to make Kampot's slow pace easy to enjoy.",

  //What's include
  includeList: [
    {
      list_items: "Hotel accommodations",
    },
    {
      list_items: "Professional guide",
    },
    {
      list_items: "Entrance fees",
    },
    {
      list_items: "River cruise",
    },
    {
      list_items: "Pepper farm visit",
    },
    {
      list_items: "Breakfast",
    },
  ],
  notInclude: [
    {
      not_include: "International flight",
    },
    {
      not_include: "Personal expenses",
    },
    {
      not_include: "Travel insurance",
    },
    {
      not_include: "Tips",
    },
  ],

  //feedback
  feedback:
    "“KOMPOT WAS PEACEFUL, BEAUTIFUL, AND FULL OF AMAZING LOCAL EXPERIENCES. THE PEPPER FARM AND RIVER SUNSET WERE MY FAVORITES.”",
  //booking
  bookingTitle: "ready to explore kompot?",
  bookingDesc:
    "Discover nature, local culture, delicious food, and unforgettable riverside experiences.",
  booking_btn: "book kompot tour",
});

JourneyTab();
