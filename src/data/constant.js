import {
  add,
  arrowbottom,
  arrowwhite,
  acura,
  arrow,
  arrowleft,
  audi,
  automatic,
  automatic100,
  bars,
  bmw,
  box,
  person100,
  calculator,
  check,
  circledi,
  close,
  close100,
  email,
  emailgray,
  messenger,
  fb,
  fbBlue,
  globe,
  honda,
  hyundai,
  location,
  mazda,
  menu,
  mercedes,
  mitsubishi,
  nissan,
  paper,
  paperplane,
  person,
  petrol,
  phone,
  search,
  search100,
  sort,
  speedometer,
  suv,
  suzuki,
  toyota,
  twitter,
  volkswagen,
} from "../assets/icons";
import {
  car1,
  car2,
  car3,
  car5,
  car6,
  car7,
  carIcon,
  hero,
  logo,
  seat1,
  seat2,
  steeringwheel,
  tire,
} from "../assets/img";
export const navLinks = [
  {
    id: 1,
    title: "Catalog",
    links: [
      {
        id: 1,
        title: "List View",
        link: "/ListView",
      },
      {
        id: 2,
        title: "Grid View",
        link: "/GridView",
      },
      {
        id: 3,
        title: "Car Single Page",
        link: "/CarSinglePage",
      },
    ],
  },
  {
    id: 2,
    title: "Vendor",
    links: [
      {
        id: 1,
        title: "Sell Car",
        link: "/SellCar",
      },
      {
        id: 2,
        title: "Add Promotion Page",
        link: "/PromotionPage",
      },
      {
        id: 3,
        title: "Vendor Page",
        link: "/VendorPage",
      },
    ],
  },
  {
    id: 3,
    title: "Account",
    links: [
      {
        id: 1,
        title: "Personal Info",
        link: "/Profile/PersonalInfo",
      },
      {
        id: 2,
        title: "Password & Security",
        link: "/Profile/Security",
      },
      {
        id: 3,
        title: "My Cars",
        link: "/Profile/MyCars",
      },
      {
        id: 4,
        title: "WishList",
        link: "/Profile/WishList",
      },
      {
        id: 5,
        title: "Reviews",
        link: "/Profile/Reviews",
      },
      {
        id: 6,
        title: "Sign In",
        link: "/SignIn",
      },
      {
        id: 7,
        title: "Sign Up",
        link: "/SignUp",
      },
    ],
  },
];

export const TopOffersData = [
  {
    id: 1,
    image: car1,
    year: "2015",
    car: "Mercedes Benz Convertible Coupe",
    price: 25800,
    location: "New York",
    RD: "7K mi",
    engine: "Automatic",
    fuel: "Gasolin",
  },
  {
    id: 2,
    image: car2,
    year: "2011",
    car: "White Marcedes-Benz",
    price: 20000,
    location: "Norway",
    RD: "10K mi",
    engine: "Manual",
    fuel: "Gasolin",
  },
  {
    id: 3,
    image: car3,
    year: "2017",
    car: "Lamborghini",
    price: 500000,
    location: "England",
    RD: "5K mi",
    engine: "Automatic",
    fuel: "Gasolin",
  },
];

export const LatestCarData = [
  {
    id: 1,
    image: car5,
    year: "2014",
    car: "Silver BMW E92",
    price: 40570,
    location: "China",
    RD: "11K mi",
    engine: "Automatic",
    fuel: "Gasolin",
  },
  {
    id: 2,
    image: car6,
    year: "2011",
    car: "Black Lexus GS 300 Sedan",
    price: 23000,
    location: "Taiwan",
    RD: "15K mi",
    engine: "Manual",
    fuel: "Gasolin",
  },
  {
    id: 3,
    image: car7,
    year: "2019",
    car: "Red Acura NXS",
    price: 500000,
    location: "India",
    RD: "7K mi",
    engine: "Automatic",
    fuel: "Gasolin",
  },
];

export const FilterLinks = [
  {
    id: 1,
    title: "Make",
    links: [
      {
        id: 1,
        title: "Acura",
      },
      {
        id: 2,
        title: "BMW",
      },
      {
        id: 3,
        title: "Nissan",
      },
      {
        id: 4,
        title: "Toyota",
      },
      {
        id: 5,
        title: "Mercedes-Benz",
      },
    ],
  },
  {
    id: 2,
    title: "Model",
    links: [
      {
        id: 1,
        title: "Altima",
      },
      {
        id: 2,
        title: "Juke",
      },
      {
        id: 3,
        title: "Maxima",
      },
      {
        id: 4,
        title: "Micra",
      },
      {
        id: 5,
        title: "Murano",
      },
    ],
  },
  {
    id: 3,
    title: "Body Type",
    links: [
      {
        id: 1,
        title: "Compact",
      },
      {
        id: 2,
        title: "Crossover",
      },
      {
        id: 3,
        title: "Coupe",
      },
      {
        id: 4,
        title: "Pickup",
      },
      {
        id: 5,
        title: "SUV",
      },
    ],
  },
  {
    id: 4,
    title: "Location",
    links: [
      {
        id: 1,
        title: "Dallas",
      },
      {
        id: 2,
        title: "Las Vegas",
      },
      {
        id: 3,
        title: "Los Angeles",
      },
      {
        id: 4,
        title: "New York",
      },
      {
        id: 5,
        title: "Houston",
      },
    ],
  },
];

export const BrandsLogo = [
  {
    id: 1,
    logo: suzuki,
  },
  {
    id: 2,
    logo: toyota,
  },
  {
    id: 3,
    logo: volkswagen,
  },
  {
    id: 4,
    logo: mercedes,
  },
  {
    id: 5,
    logo: mitsubishi,
  },
  {
    id: 6,
    logo: nissan,
  },
  {
    id: 7,
    logo: mazda,
  },
  {
    id: 8,
    logo: hyundai,
  },
  {
    id: 9,
    logo: honda,
  },
  {
    id: 10,
    logo: bmw,
  },
  {
    id: 11,
    logo: audi,
  },
  {
    id: 12,
    logo: acura,
  },
];

export const FindPart1 = [
  {
    id: 1,
    Image: paper,
    title: "Over 1 Million Listings",
    text: "That’s more than you’ll find on any other major online automotive marketplace in the USA.",
  },
  {
    id: 2,
    Image: search100,
    title: "Personalized Search",
    text: "Our powerful search makes it easy to personalize your results so you only see the cars and features you care about.",
  },
  {
    id: 3,
    Image: automatic100,
    title: "Non-Stop Innovation",
    text: "Our team is constantly developing new features that make the process of buying and selling a car simpler.",
  },
];

export const FindPart2 = [
  {
    id: 1,
    Image: circledi,
    title: "Valuable Insights",
    text: "We provide free access to key info like dealer reviews, market value, price drops.",
  },
  {
    id: 2,
    Image: person100,
    title: "Consumer-First Mentality",
    text: "We focus on building the most transparent, trustworthy experience for our users, and we’ve proven that works for dealers, too.",
  },
  {
    id: 3,
    Image: calculator,
    title: "Online Car Appraisal",
    text: "Specify the parameters of your car to form its market value on the basis of similar cars on Finder.",
  },
];

export const AutoMarketItem = [
  {
    id: 1,
    image: seat2,
    title: "Seat Covers",
  },
  {
    id: 2,
    image: seat1,
    title: "Child Seat",
  },
  {
    id: 3,
    image: tire,
    title: "Tire",
  },
  {
    id: 4,
    image: steeringwheel,
    title: "Steering Wheel",
  },
];

export const FooterHeading = [
  {
    id: 1,
    img: globe,
    title: "Eng",
    links: [
      {
        id: 1,
        title: "Duestsch",
      },
      {
        id: 2,
        title: "Francais",
      },
      {
        id: 3,
        title: "Expanol",
      },
    ],
  },
  {
    id: 2,
    img: location,
    title: "New York",
    links: [
      {
        id: 1,
        title: "Chicago",
      },
      {
        id: 2,
        title: "Dallas",
      },
      {
        id: 3,
        title: "Los Angeles",
      },
      {
        id: 4,
        title: "San Diego",
      },
    ],
  },
];

export const FooterLinks = [
  {
    id: 1,
    title: "Buying & Selling",
    Links: [
      {
        id: 1,
        title: "Find a car",
      },
      {
        id: 2,
        title: "Sell your car",
      },
      {
        id: 3,
        title: "Car dealers",
      },
      {
        id: 4,
        title: "Compare cars",
      },
      {
        id: 5,
        title: "Online car appraisal",
      },
    ],
  },
  {
    id: 2,
    title: "Profile",
    Links: [
      {
        id: 1,
        title: "My account",
      },
      {
        id: 2,
        title: "Wishlist",
      },
      {
        id: 3,
        title: "My Listings",
      },
      {
        id: 4,
        title: "Add listing",
      },
    ],
  },
  {
    id: 3,
    title: "About",
    Links: [
      {
        id: 1,
        title: "About Find-it",
      },
      {
        id: 2,
        title: "Contact us",
      },
      {
        id: 3,
        title: "FAQ & Support",
      },
      {
        id: 4,
        title: "Mobile app",
      },
    ],
  },
];

export const SocialIcons = [
  {
    id: 1,
    img: messenger,
    link: "#",
  },
  {
    id: 2,
    img: fb,
    link: "#",
  },
  {
    id: 3,
    img: twitter,
    link: "#",
  },
  {
    id: 4,
    img: paperplane,
    link: "#",
  },
];

export const DropdownLinks = [
  {
    id: 1,
    title: "Newest",
  },
  {
    id: 2,
    title: "Populay",
  },
  {
    id: 3,
    title: "Price: Low-High",
  },
  {
    id: 4,
    title: "Price: High-Low",
  },
];

export const SearchHistory = [
  {
    id: 1,
    title: "Under 2019",
  },
  {
    id: 2,
    title: "Crossover",
  },
  {
    id: 3,
    title: "Sedan",
  },
  {
    id: 4,
    title: "SUV",
  },
  {
    id: 5,
    title: "Diesel",
  },
  {
    id: 6,
    title: "Gasoline",
  },
  {
    id: 7,
    title: "Hybrid ",
  },
];
export const LocationFilter = [
  {
    id: 1,
    title: "Chicago",
  },
  {
    id: 2,
    title: "Los Angeles",
  },
  {
    id: 3,
    title: "Dallas",
  },
  {
    id: 4,
    title: "New York",
  },
  {
    id: 5,
    title: "San Diego",
  },
];
export const BodyTypes = [
  {
    id: 1,
    title: "Sedan",
  },
  {
    id: 2,
    title: "SUV",
  },
  {
    id: 3,
    title: "Wagon",
  },
  {
    id: 4,
    title: "Crossover",
  },
  {
    id: 5,
    title: "Coupe",
  },
  {
    id: 6,
    title: "Pickup",
  },
  {
    id: 7,
    title: "Sport Coupe",
  },
  {
    id: 8,
    title: "Compact",
  },
  {
    id: 9,
    title: "Convertible",
  },
  {
    id: 10,
    title: "Family MPV",
  },
];
export const Years = [
  {
    id: 1,
    title: "2013",
  },
  {
    id: 2,
    title: "2014",
  },
  {
    id: 3,
    title: "2015",
  },
  {
    id: 4,
    title: "2016",
  },
  {
    id: 5,
    title: "2017",
  },
  {
    id: 6,
    title: "2018",
  },
  {
    id: 7,
    title: "2019",
  },
  {
    id: 8,
    title: "2020",
  },
  {
    id: 9,
    title: "2021",
  },
  {
    id: 10,
    title: "2022",
  },
  {
    id: 11,
    title: "2023",
  },
];
export const CarModelData = [
  {
    id: 1,
    title: "Audi",
  },
  {
    id: 2,
    title: "infiniti",
  },
  {
    id: 3,
    title: "Honda",
  },
  {
    id: 4,
    title: "Hyudai",
  },
  {
    id: 5,
    title: "Lexus",
  },
  {
    id: 6,
    title: "Mazda",
  },
  {
    id: 7,
    title: "Mitsubishi",
  },
  {
    id: 8,
    title: "Mercedes-Benz",
  },
  {
    id: 9,
    title: "Nissan",
  },
  {
    id: 10,
    title: "Toyota",
  },
];
export const FuelType = [
  {
    id: 1,
    title: "Diesel",
  },
  {
    id: 2,
    title: "Electric",
  },
  {
    id: 3,
    title: "Gasoline",
  },
  {
    id: 4,
    title: "Hybrid",
  },
  {
    id: 5,
    title: "Hydrogen",
  },
  {
    id: 6,
    title: "Plug-in Hybrid",
  },
];
export const TransmissionData = [
  {
    id: 1,
    title: "Automatic",
  },
  {
    id: 2,
    title: "Manual",
  },
];
export const ColorData = [
  {
    id: 1,
    title: "Amber",
  },
  {
    id: 2,
    title: "Azure",
  },
  {
    id: 3,
    title: "Beige",
  },
  {
    id: 4,
    title: "Black",
  },
  {
    id: 5,
    title: "Blue",
  },
  {
    id: 6,
    title: "Brown",
  },
  {
    id: 7,
    title: "Charcoal",
  },
  {
    id: 8,
    title: "Gray",
  },
  {
    id: 9,
    title: "Green",
  },
  {
    id: 10,
    title: "Gold",
  },
];
export const SellersDat = [
  {
    id: 1,
    title: "Dealers Only",
  },
  {
    id: 2,
    title: "Private Sellers Only",
  },
];
export const SpecificationData = [
  {
    id: 1,
    title: "Manufacturing Year",
    content: "2018",
  },
  {
    id: 2,
    title: "Mileage",
    content: "25K miles",
  },
  {
    id: 3,
    title: "Body Type",
    content: "Convertible",
  },
  {
    id: 4,
    title: "Drivetrain",
    content: "Front Wheel Drive",
  },
  {
    id: 5,
    title: "Engine",
    content: "2.5L Turbo 6 Cylinder",
  },
  {
    id: 6,
    title: "Transmission",
    content: "7-Speed Shiftable Automati",
  },
  {
    id: 7,
    title: "Fuel Type",
    content: "Gasoline",
  },
  {
    id: 8,
    title: "City MPG",
    content: "20",
  },
  {
    id: 9,
    title: "Highway MPG",
    content: "29",
  },
  {
    id: 10,
    title: "Exterior Color",
    content: "Aspen White",
  },
  {
    id: 11,
    title: "Interior Color",
    content: "Charcoal",
  },
  {
    id: 12,
    title: "VIN",
    content: "2VW821AU9JM754284",
  },
];
export const FeaturesData = [
  {
    id: 1,
    itemId: "item1",
    title: "Exterior",
    list: [
      {
        id: 1,
        title: "Alloy Wheels",
      },
      {
        id: 2,
        title: "Alloy Wheels",
      },
      {
        id: 3,
        title: "Tinged glass",
      },
      {
        id: 4,
        title: "LED Headlights",
      },
      {
        id: 5,
        title: "Foldable Roof",
      },
      {
        id: 6,
        title: "Tow Hitch",
      },
    ],
  },
  {
    id: 2,
    itemId: "item2",
    title: "Interior",
    list: [
      {
        id: 1,
        title: "Adjustable Steering Wheel",
      },
      {
        id: 2,
        title: "Auto-Dimming Rearview Mirror",
      },
      {
        id: 3,
        title: "Driver Adjustable Lumbar",
      },
      {
        id: 4,
        title: "Driver Illuminated Vanity Mirror",
      },
      {
        id: 5,
        title: "Universal Garage Door Opener",
      },
      {
        id: 6,
        title: "Steering Wheel Audio Controls",
      },
      {
        id: 7,
        title: "Heated Front Seats",
      },
      {
        id: 8,
        title: "Leather Seats",
      },
      {
        id: 9,
        title: "Leather Steering Wheel",
      },
      {
        id: 10,
        title: "Pass-Through Rear Seat",
      },
      {
        id: 11,
        title: "Passenger Adjustable Lumbar",
      },
      {
        id: 12,
        title: "Passenger Illuminated Visor Mirror",
      },
    ],
  },
  {
    id: 3,
    itemId: "item3",
    title: "Safety",
    list: [
      {
        id: 1,
        title: "Airbag: Driver",
      },
      {
        id: 2,
        title: "Airbag: Passenger",
      },
      {
        id: 3,
        title: "Adaptive Cruise Control",
      },
      {
        id: 4,
        title: "Blind Spot Monitor",
      },
      {
        id: 5,
        title: "Alarm",
      },
      {
        id: 6,
        title: "Antilock Brakes",
      },
      {
        id: 7,
        title: "Brake Assist",
      },
      {
        id: 8,
        title: "Lane Departure Warning",
      },
      {
        id: 9,
        title: "Stability Control",
      },
      {
        id: 10,
        title: "Fog Lights",
      },
      {
        id: 11,
        title: "Power Door Locks",
      },
    ],
  },
  {
    id: 4,
    itemId: "item4",
    title: "Technology",
    list: [
      {
        id: 1,
        title: "Multi-Zone A/C",
      },
      {
        id: 2,
        title: "Climate Control",
      },
      {
        id: 3,
        title: "Navigation System",
      },
      {
        id: 4,
        title: "Remote Start",
      },
      {
        id: 5,
        title: "Bluetooth",
      },
      {
        id: 6,
        title: "Remote Start",
      },
      {
        id: 7,
        title: "Apple CarPlay",
      },
      {
        id: 8,
        title: "Android Auto",
      },
      {
        id: 9,
        title: "Backup Camera",
      },
      {
        id: 10,
        title: "HomeLink",
      },
      {
        id: 11,
        title: "Keyless Start",
      },
      {
        id: 12,
        title: "Premium Sound System",
      },
    ],
  },
];
export const ContactInfoData = [
  {
    id: 1,
    title: "Published",
    value: "May 8, 2022",
  },
  {
    id: 2,
    title: "Ad Number",
    value: "09246578345",
  },
  {
    id: 3,
    title: "Views",
    value: "68",
  },
];
export const ProfileLinks = [
  {
    id: 1,
    icons: "fa-solid fa-user",
    title: "Personal Info",
    link: "/Profile/PersonalInfo",
  },
  {
    id: 2,
    icons: "fa-solid fa-lock",
    title: "Password & Security",
    link: "/Profile/Security",
  },
  {
    id: 3,
    icons: "fa-solid fa-car",
    title: "My Cars",
    link: "/Profile/MyCars",
  },
  {
    id: 4,
    icons: "fa-solid fa-heart",
    title: "Wish List",
    link: "/Profile/WishList",
  },
  {
    id: 5,
    icons: "fa-solid fa-star",
    title: "Reviews",
    link: "/Profile/Reviews",
  },
  {
    id: 6,
    icons: "fa-solid fa-right-from-bracket",
    title: "Sign Out",
    link: "/Profile/Signin",
  },
];
export const PersonalInfoData = [
  {
    id: 1,
    title: "Full Name",
    content: "Robert Fox",
    collapseId: "fullname",
  },
  {
    id: 2,
    title: "Gender",
    content: "Not Specified",
    collapseId: "gender",
  },
  {
    id: 3,
    title: "Email",
    content: "Robert@email.con",
    collapseId: "email",
  },
  {
    id: 4,
    title: "Phone Number",
    content: "09756423487",
    collapseId: "phonenumber",
  },
  {
    id: 5,
    title: "Address",
    content: "Not Specified",
    collapseId: "address",
  },
];
export const ReviewSort = [
  {
    id: 1,
    title: "Newest",
  },

  {
    id: 2,
    title: "Oldest",
  },
  {
    id: 3,
    title: "Popular",
  },
  {
    id: 4,
    title: "High rating",
  },
  {
    id: 5,
    title: "Low rating",
  },
];

export const ReviewsData = [
  {
    id: 1,
    name: "Kathryn Murphy",
    date: "Jan 17, 2021",
    stars: 5,
    review:
      "Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.",
    up: 3,
    down: 0,
  },
  {
    id: 2,
    name: "Darrell Steward",
    date: "Dec 1, 2020",
    stars: 4,
    review:
      "Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim tellus sodales.",
    up: 0,
    down: 1,
  },
  {
    id: 3,
    name: "Floyd Miles",
    date: "Oct 28, 2020",
    stars: 4,
    review:
      "Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.",
    up: 2,
    down: 1,
  },
  {
    id: 4,
    name: "Ralph Edwards",
    date: "Sep 14, 2020",
    stars: 5,
    review:
      "Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est. Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus velit. Tempor lectus dignissim at auctor integer neque quam amet.",
    up: 0,
    down: 0,
  },
];
export const ContentProgress = [
  {
    id: 1,
    title: "Basic info",
    color: "#fd5631",
  },

  {
    id: 2,
    title: "Price",
    color: "#fd5631",
  },
  {
    id: 3,
    title: "Vechile Information",
    color: "#fd5631",
  },
  {
    id: 4,
    title: "Features",
    color: "#b1afb6",
  },
  {
    id: 5,
    title: "Photos / Video",
    color: "#b1afb6",
  },
  {
    id: 6,
    title: "Location",
    color: "#fd5631",
  },
  {
    id: 7,
    title: "Contacts",
    color: "#fd5631",
  },
];
export const SellCarData = {
  condition: [
    {
      id: 1,
      title: "Used",
    },
    {
      id: 2,
      title: "New",
    },
  ],
  currency: [
    {
      id: 1,
      title: "USD",
    },
    {
      id: 2,
      title: "EUR",
    },
    {
      id: 3,
      title: "CHF",
    },
    {
      id: 4,
      title: "KYD",
    },
    {
      id: 5,
      title: "GIP",
    },
  ],
  makedata: [
    {
      id: 1,
      title: "Acura",
    },
    {
      id: 2,
      title: "BMW",
    },
    {
      id: 3,
      title: "Critroen",
    },
    {
      id: 4,
      title: "Lexus",
    },
    {
      id: 5,
      title: "Mercedes-benz",
    },
    {
      id: 6,
      title: "Nissan",
    },
    {
      id: 7,
      title: "Toyota",
    },
  ],
  modeldata: [
    {
      id: 1,
      title: "A-Class",
    },
    {
      id: 2,
      title: "B-Class",
    },
    {
      id: 3,
      title: "C-Class",
    },
    {
      id: 4,
      title: "E-220",
    },
    {
      id: 5,
      title: "E-400",
    },
  ],
  yearsdata: [
    {
      id: 1,
      title: "2018",
    },
    {
      id: 2,
      title: "2017",
    },
    {
      id: 3,
      title: "2016",
    },
    {
      id: 4,
      title: "2015",
    },
    {
      id: 5,
      title: "2014",
    },
    {
      id: 6,
      title: "2013",
    },
    {
      id: 7,
      title: "2012",
    },
    {
      id: 8,
      title: "2011",
    },
  ],
  bodytype: [
    {
      id: 1,
      title: "Compact",
    },
    {
      id: 2,
      title: "Convertable",
    },
    {
      id: 3,
      title: "Crossover",
    },
    {
      id: 4,
      title: "Coup",
    },
    {
      id: 5,
      title: "SUV",
    },
    {
      id: 6,
      title: "Wagon",
    },
    {
      id: 7,
      title: "Sedan",
    },
    {
      id: 8,
      title: "Pickup",
    },
  ],
  fueltype: [
    {
      id: 1,
      title: "Gasoline",
    },
    {
      id: 2,
      title: "Diesel",
    },
    {
      id: 3,
      title: "Hybrid",
    },
    {
      id: 4,
      title: "Electric",
    },
  ],
  Engine: [
    {
      id: 1,
      title: "1.5 Turbo Cylinder Engine",
    },
    {
      id: 2,
      title: "2.4L 4 Cylinder Engine",
    },
    {
      id: 3,
      title: "3.5L 4 Cylinder Engine",
    },
    {
      id: 4,
      title: "2.5 L Turbo 6 Cylinder ",
    },
  ],
  transmission: [
    {
      id: 1,
      title: "Automatic",
    },
    {
      id: 2,
      title: "Manual",
    },
  ],
  drivetrain: [
    {
      id: 1,
      title: "Front Wheel Drive",
    },
    {
      id: 2,
      title: "Rear Wheel Drine",
    },
    {
      id: 3,
      title: "All Wheel Drine",
    },
  ],
  features: {
    exterior: [
      {
        id: 1,
        title: "Alloy Wheels",
      },
      {
        id: 2,
        title: "Sunroof / Moon roof",
      },
      {
        id: 3,
        title: "Panoramic roof",
      },
      {
        id: 4,
        title: "Tinted glass",
      },
    ],
    interior: [
      {
        id: 1,
        title: "Multi-zone A/C",
      },
      {
        id: 2,
        title: "Heated front seats",
      },
      {
        id: 3,
        title: "Premium sound",
      },
      {
        id: 4,
        title: "Bluetooth",
      },
      {
        id: 5,
        title: "Navigation system",
      },
      {
        id: 6,
        title: "Leather Seats",
      },
      {
        id: 7,
        title: "USB port",
      },
      {
        id: 8,
        title: "Leather steering wheel",
      },
      {
        id: 9,
        title: "Intermittent wipers",
      },
      {
        id: 10,
        title: "Memory seat",
      },
      {
        id: 11,
        title: "Apple CarPlay",
      },
      {
        id: 12,
        title: "Andriod Auto",
      },
    ],
    Safety: [
      {
        id: 1,
        title: "Airbag: driver",
      },
      {
        id: 2,
        title: "Airbag: passenger",
      },
      {
        id: 3,
        title: "Adaptive cruise control",
      },
      {
        id: 4,
        title: "Blind spot monitor",
      },
      {
        id: 6,
        title: "Alarm",
      },
      {
        id: 7,
        title: "Antilock brakes",
      },
      {
        id: 8,
        title: "Brake assist",
      },
      {
        id: 9,
        title: "Lane departure warning",
      },
      {
        id: 10,
        title: "Stability control",
      },
      {
        id: 11,
        title: "Fog lights",
      },
    ],
  },
};
