const SchemaTypes = {
  Thing: {
    Thing: "Thing",
    "Creative Work": "Creative Work",
    Event: "Event",
    Intangible: "Intangible",
    Person: "Person",
    Place: "Place",
    Product: "Product",
  },

  Article: {
    Article: "Article",
    "Advertiser Content Article": "Advertiser Content Article",
    "News Article": "News Article",
    "Report": "Report",
    "Satirical Article": "Satirical Article",
    "Scholarly Article": "Scholarly Article",
    "Social Media Posting": "Social Media Posting",
    "Tech Article": "Tech Article",
    "Blog Posting": "Blog Posting",
    "Discussion Forum Posting": "Discussion Forum Posting" // Added from T6({})
  },

  Book: {
    Book: "Book",
    Audiobook: "Audiobook",
    Course: "Course" // Added from T6({})
  },

  "FAQ Page": "FAQ Page",
  HowTo: "HowTo", // Added from T7({})
  Recipe: "Recipe", // Added from T7({})
  Movie: "Movie", // Added from T7({})
  Review: "Review", // Added from T7({})
  "Software Application": {
    "Software Application": "Software Application",
    "Mobile Application": "Mobile Application",
    "Video Game": "Video Game",
    "Web Application": "Web Application" // Added from T8({})
  },
  "Special Announcement": "Special Announcement", //Added from T8({})
  "Web Page": {
    "Web Page": "Web Page",
    "About Page": "About Page",
    "Checkout Page": "Checkout Page",
    "Medical Web Page": "Medical Web Page",
    "Profile Page": "Profile Page",
    "Q&A Page": "Q&A Page",
    "Real Estate Listing": "Real Estate Listing" //Added from T10({})
  },
  Event: { //Added from T10({}) and T13({})
    Event: "Event",
    "Business Event": "Business Event",
    "Childrens Event": "Childrens Event",
    "Comedy Event": "Comedy Event",
    "Course Instance": "Course Instance",
    "Dance Event": "Dance Event",
    "Delivery Event": "Delivery Event",
    "Education Event": "Education Event",
    "Exhibition Event": "Exhibition Event",
    "Festival": "Festival",
    "Food Event": "Food Event",
    "Hackathon": "Hackathon",
    "Literary Event": "Literary Event",
    "Music Event": "Music Event",
    "Publication Event": "Publication Event",
    "Sale Event": "Sale Event",
    "Screening Event": "Screening Event",
    "Social Event": "Social Event",
    "Sports Event": "Sports Event",
    "Theater Event": "Theater Event",
    "Visual Arts Event": "Visual Arts Event"
  },
  Intangible: { //Added from T10({}) and T13({})
    Intangible: "Intangible",
    "Floor Plan": "Floor Plan",
    "Job Posting": "Job Posting",
    Service: "Service",
    "Item List": "Item List"
  },
  Organization: { //Added from T13({})
    Organization: "Organization",
    Project: "Project",
    "Local Business": "Local Business" // Representing the numerous subtypes
  },
  Place: { //Added from T14({})
    Place: "Place",
    Accommodation: "Accommodation",
    "Administrative Area": "Administrative Area",
    "Civic Structure": "Civic Structure",
    Landform: "Landform",
    "Landmarks Or Historical Buildings": "Landmarks Or Historical Buildings",
    Residence: "Residence",
    "Tourist Attraction": "Tourist Attraction",
    "Tourist Destination": "Tourist Destination",
    Apartment: "Apartment",
    "Camping Pitch": "Camping Pitch",
    House: "House",
    Room: "Room",
    Suite: "Suite",
    City: "City",
    Country: "Country",
    "School District": "School District",
    State: "State"
  },
  Project: { //Added from T13({})
    Project: "Project",
    "Funding Agency": "Funding Agency",
    "Research Project": "Research Project"
  },
  "Local Business":{ //Added from T13({}) - contains many subtypes that were not individually added for brevity

  }
};

export { SchemaTypes };
