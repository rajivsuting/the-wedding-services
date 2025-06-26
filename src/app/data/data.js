// Centralized data file for destinations, venues, and gallery

// Single array for destinations with both summary and detailed information
export const destinations = [
  {
    id: "goa",
    name: "Goa Beaches",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    description:
      "Sun-kissed beaches and luxury resorts for a perfect beach wedding.",
    price: "From ₹4,50,000",
    category: "Coastal",
    longDescription:
      "Sun-kissed beaches and Portuguese heritage make Goa perfect for dreamy beach weddings.",
    mainImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
    ],
    budgetFriendly: [
      "Off-season discounts (April to September)",
      "Local vendor partnerships for better rates",
      "Flexible venue options from beach shacks to luxury resorts",
      "Affordable accommodation options for guests",
    ],
    seasonality: {
      best: "October to March",
      weather: "Pleasant weather with temperatures between 20-30°C",
      tips: [
        "Book 6-8 months in advance for peak season",
        "Consider weekday weddings for better rates",
        "Monsoon weddings (June-September) offer unique experiences at lower costs",
      ],
    },
    venues: [
      {
        name: "Luxury Beach Resort",
        type: "Resort",
        capacity: "200-300 guests",
        price: "₹8,00,000 onwards",
        image:
          "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Heritage Villa",
        type: "Villa",
        capacity: "100-150 guests",
        price: "₹5,00,000 onwards",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
      },
    ],
    packages: [
      {
        name: "Beach Bliss",
        price: "₹5,00,000",
        includes: [
          "Beach ceremony setup",
          "Basic decor",
          "Local catering",
          "Photography",
          "Accommodation for couple",
        ],
      },
      {
        name: "Luxury Coastal",
        price: "₹10,00,000",
        includes: [
          "Premium beach venue",
          "Luxury decor",
          "International catering",
          "Premium photography & videography",
          "Luxury accommodation",
          "Welcome party",
        ],
      },
    ],
    testimonials: [
      {
        name: "Priya & Rahul",
        date: "December 2023",
        rating: 5,
        comment:
          "Our beach wedding in Goa was everything we dreamed of. The team made it so special and stress-free!",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "udaipur",
    name: "Udaipur, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    description:
      "Majestic palaces and lakeside venues for a royal wedding experience.",
    price: "From ₹5,00,000",
    category: "Heritage",
    longDescription:
      "The City of Lakes offers majestic forts and palaces for a royal wedding experience.",
    mainImage:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
    ],
    budgetFriendly: [
      "Heritage venue discounts for wedding bookings",
      "Local vendor partnerships for authentic experiences",
      "Flexible venue options from forts to heritage hotels",
      "Group accommodation deals for guests",
    ],
    seasonality: {
      best: "October to March",
      weather: "Pleasant weather with temperatures between 15-30°C",
      tips: [
        "Book 8-12 months in advance for fort venues",
        "Consider winter months for best weather",
        "Weekday weddings offer better rates at premium venues",
      ],
    },
    venues: [
      {
        name: "Mehrangarh Fort",
        type: "Fort",
        capacity: "200-300 guests",
        price: "₹10,00,000 onwards",
        image:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Heritage Palace",
        type: "Palace",
        capacity: "150-200 guests",
        price: "₹7,00,000 onwards",
        image:
          "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    packages: [
      {
        name: "Royal Heritage",
        price: "₹7,00,000",
        includes: [
          "Fort venue setup",
          "Traditional decor",
          "Local catering",
          "Photography",
          "Accommodation for couple",
        ],
      },
      {
        name: "Luxury Fort",
        price: "₹14,00,000",
        includes: [
          "Premium fort venue",
          "Luxury decor",
          "International catering",
          "Premium photography & videography",
          "Luxury accommodation",
          "Cultural performances",
        ],
      },
    ],
    testimonials: [
      {
        name: "Meera & Rajat",
        date: "January 2024",
        rating: 5,
        comment:
          "Our wedding at Mehrangarh Fort was a dream come true. The team ensured everything was perfect!",
        image:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "shimla",
    name: "Shimla, Himachal",
    image: "/venue1.jpg",
    description:
      "Breathtaking mountain views and colonial architecture for a romantic celebration.",
    price: "From ₹4,00,000",
    category: "Hills",
    longDescription:
      "Shimla offers stunning mountain views and colonial architecture for a romantic wedding celebration.",
    mainImage: "/venue2.jpg",
    gallery: ["/venue1.jpg", "/venue2.jpg", "/food1.jpg"],
    budgetFriendly: [
      "Off-season discounts (April to September)",
      "Local vendor partnerships for better rates",
      "Flexible venue options from colonial buildings to luxury resorts",
      "Affordable accommodation options for guests",
    ],
    seasonality: {
      best: "March to June, September to November",
      weather: "Pleasant weather with temperatures between 10-25°C",
      tips: [
        "Book 6-8 months in advance for peak season",
        "Consider weekday weddings for better rates",
        "Winter weddings (December to February) offer unique experiences at lower costs",
      ],
    },
    venues: [
      {
        name: "Colonial Resort",
        type: "Resort",
        capacity: "150-200 guests",
        price: "₹7,00,000 onwards",
        image:
          "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Mountain Villa",
        type: "Villa",
        capacity: "100-150 guests",
        price: "₹4,00,000 onwards",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
      },
    ],
    packages: [
      {
        name: "Mountain Bliss",
        price: "₹4,00,000",
        includes: [
          "Mountain ceremony setup",
          "Basic decor",
          "Local catering",
          "Photography",
          "Accommodation for couple",
        ],
      },
      {
        name: "Luxury Mountain",
        price: "₹9,00,000",
        includes: [
          "Premium mountain venue",
          "Luxury decor",
          "International catering",
          "Premium photography & videography",
          "Luxury accommodation",
          "Welcome party",
        ],
      },
    ],
    testimonials: [
      {
        name: "Anita & Vikram",
        date: "March 2024",
        rating: 5,
        comment:
          "Our mountain wedding in Shimla was everything we dreamed of. The team made it so special and stress-free!",
        image:
          "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  // {
  //   id: "kerala",
  //   name: "Kerala Backwaters",
  //   image:
  //     "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
  //   description:
  //     "Serene backwaters and lush greenery for a unique wedding experience.",
  //   price: "From ₹4,50,000",
  //   category: "Unique",
  //   longDescription:
  //     "Kerala offers serene backwaters and lush greenery for a unique wedding experience.",
  //   mainImage:
  //     "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2074&auto=format&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2074&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
  //   ],
  //   budgetFriendly: [
  //     "Off-season discounts (April to September)",
  //     "Local vendor partnerships for better rates",
  //     "Flexible venue options from backwater resorts to luxury villas",
  //     "Affordable accommodation options for guests",
  //   ],
  //   seasonality: {
  //     best: "October to February",
  //     weather: "Pleasant weather with temperatures between 20-30°C",
  //     tips: [
  //       "Book 6-8 months in advance for peak season",
  //       "Consider weekday weddings for better rates",
  //       "Monsoon weddings (June-September) offer unique experiences at lower costs",
  //     ],
  //   },
  //   venues: [
  //     {
  //       name: "Backwater Resort",
  //       type: "Resort",
  //       capacity: "150-200 guests",
  //       price: "₹6,00,000 onwards",
  //       image:
  //         "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop",
  //     },
  //     {
  //       name: "Luxury Villa",
  //       type: "Villa",
  //       capacity: "100-150 guests",
  //       price: "₹4,00,000 onwards",
  //       image:
  //         "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
  //     },
  //   ],
  //   packages: [
  //     {
  //       name: "Backwater Bliss",
  //       price: "₹4,50,000",
  //       includes: [
  //         "Backwater ceremony setup",
  //         "Basic decor",
  //         "Local catering",
  //         "Photography",
  //         "Accommodation for couple",
  //       ],
  //     },
  //     {
  //       name: "Luxury Backwater",
  //       price: "₹9,00,000",
  //       includes: [
  //         "Premium backwater venue",
  //         "Luxury decor",
  //         "International catering",
  //         "Premium photography & videography",
  //         "Luxury accommodation",
  //         "Welcome party",
  //       ],
  //     },
  //   ],
  //   testimonials: [
  //     {
  //       name: "Sneha & Arjun",
  //       date: "February 2024",
  //       rating: 5,
  //       comment:
  //         "Our backwater wedding in Kerala was everything we dreamed of. The team made it so special and stress-free!",
  //       image:
  //         "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2074&auto=format&fit=crop",
  //     },
  //   ],
  // },
  {
    id: "agra",
    name: "Agra, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Iconic Taj Mahal and Mughal gardens for a royal wedding.",
    price: "From ₹5,00,000",
    category: "Heritage",
    longDescription:
      "Agra offers the world-famous Taj Mahal and beautiful Mughal gardens for a truly royal wedding experience.",
    mainImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    budgetFriendly: [],
    seasonality: {},
    venues: [],
    packages: [],
    testimonials: [],
  },
  {
    id: "jaipur",
    name: "Jaipur, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    description: "Palatial venues and vibrant culture for a grand celebration.",
    price: "From ₹5,50,000",
    category: "Heritage",
    longDescription:
      "Jaipur is known for its palaces, forts, and vibrant Rajasthani culture, perfect for a grand wedding.",
    mainImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    budgetFriendly: [],
    seasonality: {},
    venues: [],
    packages: [],
    testimonials: [],
  },
  {
    id: "hyderabad",
    name: "Hyderabad, Telangana",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    description: "Historic Charminar and regal venues for a unique wedding.",
    price: "From ₹4,80,000",
    category: "Heritage",
    longDescription:
      "Hyderabad offers regal venues and the historic Charminar for a unique wedding experience.",
    mainImage:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    budgetFriendly: [],
    seasonality: {},
    venues: [],
    packages: [],
    testimonials: [],
  },
  {
    id: "mumbai",
    name: "Mumbai, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    description: "Gateway of India and luxury hotels for a glamorous wedding.",
    price: "From ₹6,00,000",
    category: "City",
    longDescription:
      "Mumbai offers the iconic Gateway of India and luxury hotels for a glamorous city wedding.",
    mainImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    budgetFriendly: [],
    seasonality: {},
    venues: [],
    packages: [],
    testimonials: [],
  },
  {
    id: "delhi",
    name: "Delhi, NCR",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    description: "Lotus Temple and grand venues for a cosmopolitan wedding.",
    price: "From ₹5,20,000",
    category: "City",
    longDescription:
      "Delhi offers grand venues and the iconic Lotus Temple for a cosmopolitan wedding experience.",
    mainImage:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    budgetFriendly: [],
    seasonality: {},
    venues: [],
    packages: [],
    testimonials: [],
  },
];

// Gallery data
export const galleryData = {
  categories: [
    "All",
    "Venues",
    "Decorations",
    "Catering",
    "Photography",
    "Entertainment",
  ],
  destinations: ["All", "Udaipur", "Goa", "Shimla", "Kerala", "Jaipur"],
  budgetTiers: [
    "All",
    "Premium (15L+)",
    "Luxury (10L-15L)",
    "Standard (5L-10L)",
    "Budget (Under 5L)",
  ],
  packageTypes: [
    "All",
    "Full Wedding",
    "Venue Only",
    "Decoration",
    "Photography",
  ],
  realWeddings: [
    {
      id: 1,
      couple: "Priya & Rahul",
      location: "Udaipur",
      budget: "Premium (15L+)",
      package: "Full Wedding",
      story:
        "Our dream destination wedding at The Leela Palace was everything we imagined and more. The team made our 3-day celebration seamless and magical.",
      quote:
        "The attention to detail and personalized service made our wedding truly special. Worth every penny!",
      images: [
        {
          src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
          alt: "Priya & Rahul's Wedding Ceremony",
          category: "Venues",
          title: "The Leela Palace",
          description: "A stunning lakeside palace with panoramic views",
        },
        {
          src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
          alt: "Wedding Reception Setup",
          category: "Decorations",
          title: "Reception Setup",
          description: "Elegant reception decoration with floral arrangements",
        },
        {
          src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
          alt: "Couple's First Dance",
          category: "Entertainment",
          title: "First Dance",
          description: "Magical moments captured during the celebration",
        },
      ],
    },
    {
      id: 2,
      couple: "Ananya & Vikram",
      location: "Goa",
      budget: "Luxury (10L-15L)",
      package: "Full Wedding",
      story:
        "A beach wedding in Goa was always our dream. The sunset ceremony and beachside reception created the perfect romantic atmosphere.",
      quote:
        "The team's expertise in handling both traditional and modern elements made our wedding unique.",
      images: [
        {
          src: "/venue1.jpg",
          alt: "Beach Wedding Ceremony",
          category: "Venues",
          title: "Taj Exotica Resort",
          description: "Beachfront luxury with Portuguese architecture",
        },
        {
          src: "/venue2.jpg",
          alt: "Reception Decoration",
          category: "Decorations",
          title: "Beachside Reception",
          description: "Romantic beachside setup with elegant lighting",
        },
        {
          src: "/food1.jpg",
          alt: "Wedding Celebration",
          category: "Entertainment",
          title: "Beach Party",
          description: "Unforgettable celebration under the stars",
        },
      ],
    },
    {
      id: 3,
      couple: "Meera & Arjun",
      location: "Shimla",
      budget: "Standard (5L-10L)",
      package: "Venue Only",
      story:
        "Our mountain wedding in Shimla was intimate and beautiful. The snow-capped peaks provided a stunning backdrop for our ceremony.",
      quote:
        "The venue was perfect, and the team helped us stay within our budget while creating a magical experience.",
      images: [
        {
          src: "/photoshoot1.jpg",
          alt: "Mountain Wedding Setup",
          category: "Venues",
          title: "Mountain Resort",
          description: "Scenic mountain venue with panoramic views",
        },
        {
          src: "/photoshoot2.jpg",
          alt: "Wedding Ceremony",
          category: "Decorations",
          title: "Mountain Ceremony",
          description: "Intimate ceremony with natural beauty",
        },
        {
          src: "/photoshoot3.jpg",
          alt: "Reception Celebration",
          category: "Entertainment",
          title: "Mountain Celebration",
          description: "Cozy celebration in the mountains",
        },
      ],
    },
  ],
};

// Example: venues and more data can be added here as well
