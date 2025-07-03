// Centralized data file for destinations, venues, and gallery

// Single array for destinations with both summary and detailed information
export const destinations = [
  {
    id: "jimcorbett",
    name: "Jim Corbett, Uttarakhand",
    image: "/venue1.jpg",
    description: "Wilderness and riverside venues in the heart of Uttarakhand.",
  },
  {
    id: "mussoorie",
    name: "Mussoorie, Uttarakhand",
    image: "/venue2.jpg",
    description: "Scenic hill station with colonial charm and mountain views.",
  },
  {
    id: "rishikesh",
    name: "Rishikesh, Uttarakhand",
    image: "/photoshoot1.jpg",
    description: "Spiritual and riverside wedding experiences on the Ganges.",
  },
  {
    id: "jaipur",
    name: "Jaipur, Rajasthan",
    image: "/photoshoot2.jpg",
    description:
      "Palatial venues and vibrant Rajasthani culture for a grand celebration.",
  },
  {
    id: "sariska",
    name: "Sariska (Alwar), Rajasthan",
    image: "/food1.jpg",
    description: "Wildlife sanctuary and heritage venues in Alwar district.",
  },
  {
    id: "ranthambore",
    name: "Ranthambore, Rajasthan",
    image: "/food2.jpg",
    description: "Royal wedding venues near the famous tiger reserve.",
  },
  {
    id: "mathuravrindavan",
    name: "Mathura/Vrindavan, Uttar Pradesh",
    image: "/makeup1.jpg",
    description:
      "Spiritual and traditional wedding settings in the land of Krishna.",
  },
  {
    id: "others",
    name: "Others",
    image: "/photoshoot3.jpg",
    description:
      "Other beautiful destinations across India for your dream wedding.",
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
