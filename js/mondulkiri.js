import { blog_hero, JourneyTab } from "./reusable/blog_Hero.js";
document.querySelector("#blogHero").innerHTML = blog_hero({
  image: "../asset/image/mondulkiri-image/Mondulkiri_province.webp",
  image_desc: "Mondulkiri Waterfall",
  blog_head: "mondulkiri . highlands",
  blog_sub_head: "cambodia . 3 days / 2 nights",
  blog_title: "highlands where the forest still lands.",
  blog_text:
    "Rolling hills, waterfalls, and ethical elephant encounters in Cambodia's cool, quiet east — a different pace than anywhere else in the country.",
  duration: " 3 days / 2 nights",
  location: "mondulkiri, kh",
  transportation: "Private van",
  stayHotel: "eco-lodge / resort",
  bestTime: "nov - feb",
  // visit experience
  visitExper: "five ways into the highlands",
  visitDesc:
    "Cambodia's quietest province — cool air, deep forest, and wildlife encounters done the right way.",
  visitExperience: [
    {
      visit_title: "elephant experience",
      visit_description:
        "An ethical sanctuary visit — observing elephants roam, bathe, and forage on their own terms.",
    },
    {
      visit_title: "Bou Sra Waterfall",
      visit_description:
        "One of Cambodia's most striking waterfalls, framed by dense highland forest.",
    },

    {
      visit_title: "explore the forest",
      visit_description:
        "Guided walks through Mondulkiri's cool, green, and remarkably quiet woodland.",
    },
    {
      visit_title: "Sen Monorom",
      visit_description:
        "A charming hill town with panoramic views over the surrounding countryside.",
    },
    {
      visit_title: "Mountain & Sunset Views",
      visit_description:
        "Cool highland evenings and long sunsets over rolling hills.",
    },
  ],
  //Journey
  journey_title: "three days, one trail through the highlands.",
  days: [
    {
      day: 1,
      btn_title: "welcome to mondulkiri",

      day_title: "Welcome to mondulkiri",

      day_description:
        "Arrive into cooler air and get your bearings in the hill town before the wildlife day ahead.",
      stops: [
        {
          time: "on arrival",
          title: "Arrival",
          description:
            "Collected and driven up into the highlands, the air noticeably cooler as you climb.",
        },
        {
          time: "early afternoon",
          title: "Hotel Check-in",
          description: "Settle into your eco-lodge or resort before exploring.",
        },
        {
          time: "afternoon",
          title: "Sen Monorom",
          description:
            "Wander the hill town's streets and get a first look at the surrounding countryside.",
        },
        {
          time: "evening",
          title: "Sunset",
          description:
            "The highlands' first evening show, from a cool hilltop vantage point.",
        },
      ],
    },
    {
      day: 2,
      btn_title: "nature & wildlife",
      day_title: "nature & wildlife",
      day_description:
        "The heart of the trip - a full day of forest, waterfall, and ethical elephant time.",

      stops: [
        {
          time: "morning",
          title: "Elephant experience",
          description:
            "Spend the morning observing elephants roam freely at an ethical sanctuary",
        },
        {
          time: "midday",
          title: "Forest Walk",
          description: "A guided walk through quiet, dense highland forest.",
        },
        {
          time: "afternoon",
          title: "Bou Sra Waterfall",
          description:
            "One of Cambodia's most beautiful waterfalls, tucked into the jungle.",
        },
        {
          time: "evening",
          title: "Resort",
          description: "Back to the lodge to rest after a full day outdoora.",
        },
      ],
    },
    {
      day: 3,
      btn_title: "local experience",
      day_title: "local experience",
      day_description:
        "A gentler final morning with the region's indigenous communities before heading home.",

      stops: [
        {
          time: "morning",
          title: "Countryside",
          description:
            "A scenic drive through Mondulkiri's rolling farmland and red-earth roads.",
        },
        {
          time: "mid-morning",
          title: "local village",
          description:
            "Meet indigenous Bunong communities and learn about highland traditions.",
        },
        {
          time: "midday",
          title: "Lunch",
          description: "A final hignland meal before the journey back down.",
        },
        {
          time: "afternoon",
          title: "departure",
          description: "Driven back in good time for your onward jouney.",
        },
      ],
    },
  ],

  //place to visit
  placeVisitTitle: "four places that define mondulkiri",
  placeVisitCard: [
    {
      image: "../asset/image/mondulkiri-image/Elephant_Experience.webp",
      img_desc: "Elephant Experience",
      image_title: "Elephant Experience",
      image_description:
        "An ethical, observation-only visit that lets elephants be elephants.",
    },
    {
      image: "../asset/image/mondulkiri-image/Bou_Sra_Waterfall.webp",
      img_desc: "Bou Sra Waterfall",
      image_title: "Bou sra waterfall",
      image_description:
        "Tiered falls dropping through dense forest — one of the country's most photographed spots.",
    },
    {
      image: "../asset/image/mondulkiri-image/Mondulkiri_Forest.webp",
      img_desc: "Mondulkiri Forest",
      image_title: "Mondulkiri Forest",
      image_description:
        "The slow, wide river that gives the whole province its unhurried pace.",
    },
    {
      image: "../asset/image/mondulkiri-image/pou_loung_village.webp",
      img_desc: "Pou Loung Village",
      image_title: "Pou Loung Village",
      image_description:
        "Pou Loung Village is a peaceful village showcasing local culture and traditional life in Mondulkiri.",
    },
  ],

  //food
  foods_title: "food, culture & community",
  localFood: [
    {
      foodName: "highlands Cambodian Food",
      foodDesc: "local kitchen",
    },
    {
      foodName: "Bunoung Traditional",
      foodDesc: "village visit",
    },
    {
      foodName: "Forest-Grown Produce",
      foodDesc: "fresh",
    },
    {
      foodName: "local coffee",
      foodDesc: "high-land growth",
    },
  ],

  //food-image
  FoodImage: [
    {
      image: "../asset/image/mondulkiri-image/Bunong_Traditions.webp",
      food_desc: "Bunong Food",
    },
    {
      image: "../asset/image/mondulkiri-image/Forest-Grown_Produce.webp",
      food_desc: "Forest Grown",
    },
    {
      image: "../asset/image/mondulkiri-image/Highland_Cambodian_Food.webp",
      food_desc: "Highland Food",
    },
    {
      image: "../asset/image/mondulkiri-image/Local_Coffee.webp",
      food_desc: "Local Coffee",
    },
  ],
  //hotel
  hotelImage:
    "../asset/image/mondulkiri-image/Breathe_Wild_Mondulkiri_Resort.webp",
  hotelDesc: "Mondulkiri Resort",
  hotelName: "Breathe Wild Mondulkiri Resort",
  hotelDescription:
    "A relaxed stay in the cool hills, close to the forest and set up for early starts on wildlife and waterfall days.",

  //what is include
  includeList: [
    {
      list_items: "Accommodations",
    },
    {
      list_items: "Professional guide",
    },
    {
      list_items: "Transportation",
    },
    {
      list_items: "Waterfall visit",
    },
    {
      list_items: "Elephant experience",
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
    "“A PEACEFUL AND UNFORGETABLE ADVENTURE. THE WATERFALLS, FORESTS, AND ELEPHANT EXPERIENCE WERE AMAZING.”",

  // booking mondulkiri
  bookingTitle: "ready to explore mondulkiri?",
  bookingDesc:
    "Discover Cambodia's beautiful forests, waterfalls, wildlife, and peaceful highlands.",
  booking_btn: "booking mondulkiri tour",
});
JourneyTab();
