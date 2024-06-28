
# Shopping Site

### link of hosted site : https://shopsite-akshay.netlify.app/

![Screenshot (761)](https://github.com/akshayveera/ShoppingSite/assets/123762381/778e5f7f-486d-4703-a0f0-37fb53f90d5b)

![Screenshot 2024-06-28 161007](https://github.com/akshayveera/ShoppingSite/assets/123762381/c6f4e498-2889-40fa-bb3e-f7366c07bc26)

![photo-collage png](https://github.com/akshayveera/ShoppingSite/assets/123762381/8bb17495-7a49-41d3-89e9-50ebb5bffa45)

## Description

## Tech Stack

- React
- JSX
- JavaScript
- TailwindCSS
- HTML
- NPM
- Vite

### Catlog Component

It is the most powerful part of this webapp which is resposible for rendering all the categories and subcategories till any number of nested layers in responsive way. It takes two props, catList and flag.

- catList - It is the list of categories or subcategories to be rendered
- flag - It is a boolean value, it decides the position of the subcategories whether to render to its right side or to its left

Even if mutilple nested layers were added to the JSON data, the component handles it without showing error or skipping the deep layers

## JSON

This is the main JSON data of the webapp which represents the categories and nested subcategories

```
[
  {
    "title": "Mobiles",
    "img": "https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
    "subcategories": [
      {
        "title": "Smartphones",
        "subcategories": [
          {"title": "Android Phones"},
          {"title": "iPhones"},
          {"title": "5G Phones"},
          {"title": "Budget Phones"},
          {"title": "Gaming Phones"},
          {"title": "Windows Phones"}
        ]
      },
      {
        "title": "Mobile Accessories",
        "subcategories": [
          {"title": "Cases & Covers"},
          {"title": "Screen Protectors"},
          {"title": "Chargers"},
          {"title": "Power Banks"},
          {"title": "Headphones"},
          {"title": "Memory Cards"}
        ]
      },
      {
        "title": "Wearable Devices",
        "subcategories": [
          {"title": "Smartwatches"},
          {"title": "Fitness Bands"},
          {"title": "Smart Glasses"},
          {"title": "VR Headsets"},
          {"title": "Smart Rings"}
        ]
      },
      {
        "title": "Tablets",
        "subcategories": [
          {"title": "Android Tablets"},
          {"title": "iPads"},
          {"title": "Windows Tablets"}
        ]
      }
    ]
  },
  {
    "title": "Fashion",
    "img": "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
    "subcategories": [
      {
        "title": "Men",
        "subcategories": [
          {"title": "Top Wear", "subcategories": [
            {"title": "T-Shirts"},
            {"title": "Shirts"},
            {"title": "Sweatshirts"},
            {"title": "Jackets"}
          ]},
          {"title": "Bottom Wear", "subcategories": [
            {"title": "Jeans"},
            {"title": "Trousers"},
            {"title": "Shorts"},
            {"title": "Track Pants"}
          ]},          
          {"title": "Footwear", "subcategories": [
            {"title": "Casual Shoes"},
            {"title": "Sports Shoes"},
            {"title": "Formal Shoes"},
            {"title": "Sandals"}
          ]},
          {"title": "Accessories", "subcategories": [
            {"title": "Watches"},
            {"title": "Belts"},
            {"title": "Wallets"},
            {"title": "Sunglasses"},
            {"title": "Caps & Hats"}
          ]}
        ]
      },
      {
        "title": "Women",
        "subcategories": [
          {"title": "Top Wear", "subcategories": [
            {"title": "Tops"},
            {"title": "T-Shirts"},
            {"title": "Kurtas"},
            {"title": "Blouses"}
          ]},
          {"title": "Bottom Wear", "subcategories": [
            {"title": "Jeans"},
            {"title": "Skirts"},
            {"title": "Leggings"},
            {"title": "Palazzos"}
          ]},
          {"title": "Footwear", "subcategories": [
            {"title": "Heels"},
            {"title": "Flats"},
            {"title": "Sandals"},
            {"title": "Boots"}
          ]},
          {"title": "Accessories", "subcategories": [
            {"title": "Jewelry"},
            {"title": "Handbags"},
            {"title": "Watches"},
            {"title": "Scarves"},
            {"title": "Sunglasses"}
          ]}
        ]
      },
      {
        "title": "Kids",
        "subcategories": [
          {"title": "Boys' Clothing", "subcategories": [
            {"title": "T-Shirts"},
            {"title": "Shirts"},
            {"title": "Jeans"},
            {"title": "Shorts"}
          ]},
          {"title": "Girls' Clothing", "subcategories": [
            {"title": "Dresses"},
            {"title": "Tops"},
            {"title": "Skirts"},
            {"title": "Leggings"}
          ]},
          {"title": "Footwear", "subcategories": [
            {"title": "Boys' Footwear"},
            {"title": "Girls' Footwear"},
            {"title": "Sports Shoes"},
            {"title": "Casual Shoes"},
            {"title": "Formal Shoes"},
            {"title": "Boots"},
            {"title": "Sandals"},
            {"title": "Slippers"}
          ]},
          {"title": "Accessories", "subcategories": [
            {"title": "School Supplies"},
            {"title": "Bags"},
            {"title": "Toys"},
            {"title": "Watches"}
          ]}
        ]
      }
    ]
  },
  {
    "title": "Electronics",
    "img": "https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
    "subcategories": [
      {
        "title": "Computers",
        "subcategories": [
          {"title": "Laptops"},
          {"title": "Desktops"},
          {"title": "Tablets"},
          {"title": "Monitors"},
          {"title": "Printers"},
          {"title": "Computer Accessories"}
        ]
      },
      {
        "title": "Cameras",
        "subcategories": [
          {"title": "DSLRs"},
          {"title": "Point & Shoot"},
          {"title": "Mirrorless"},
          {"title": "Action Cameras"},
          {"title": "Camera Accessories"},
          {"title": "Security Cameras"}
        ]
      },
      {
        "title": "Audio",
        "subcategories": [
          {"title": "Headphones"},
          {"title": "Speakers"},
          {"title": "Home Theaters"},
          {"title": "Soundbars"},
          {"title": "Microphones"},
          {"title": "Earphones"}
        ]
      },
      {
        "title": "Gaming",
        "subcategories": [
          {"title": "Gaming Consoles"},
          {"title": "Gaming Laptops"},
          {"title": "Gaming Accessories"},
          {"title": "Gaming Monitors"},
          {"title": "Gaming Chairs"}
        ]
      }
    ]
  },
  {
    "title": "Furniture",
    "img": "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
    "subcategories": [
      {
        "title": "Living Room",
        "subcategories": [
          {"title": "Sofas"},
          {"title": "Coffee Tables"},
          {"title": "TV Units"},
          {"title": "Recliners"},
          {"title": "Sofa Beds"},
          {"title": "Bookshelves"}
        ]
      },
      {
        "title": "Bedroom",
        "subcategories": [
          {"title": "Beds"},
          {"title": "Wardrobes"},
          {"title": "Nightstands"},
          {"title": "Dressers"},
          {"title": "Mattresses"},
          {"title": "Bedside Tables"}
        ]
      },
      {
        "title": "Office Furniture",
        "subcategories": [
          {"title": "Office Chairs"},
          {"title": "Office Desks"},
          {"title": "Bookshelves"},
          {"title": "Filing Cabinets"},
          {"title": "Conference Tables"},
          {"title": "Office Sofas"}
        ]
      },
      {
        "title": "Outdoor Furniture",
        "subcategories": [
          {"title": "Patio Sets"},
          {"title": "Garden Chairs"},
          {"title": "Hammocks"},
          {"title": "Outdoor Tables"},
          {"title": "Sun Loungers"}
        ]
      }
    ]
  },
  {
    "title": "Appliances",
    "img": "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
    "subcategories": [
      {
        "title": "Kitchen Appliances",
        "subcategories": [
          {"title": "Microwaves"},
          {"title": "Refrigerators"},
          {"title": "Dishwashers"},
          {"title": "Ovens"},
          {"title": "Blenders"},
          {"title": "Coffee Makers"}
        ]
      },
      {
        "title": "Home Appliances",
        "subcategories": [
          {"title": "Washing Machines"},
          {"title": "Air Conditioners"},
          {"title": "Vacuum Cleaners"},
          {"title": "Water Purifiers"},
          {"title": "Heaters"},
          {"title": "Air Purifiers"}
        ]
      },
      {
        "title": "Personal Care Appliances",
        "subcategories": [
          {"title": "Hair Dryers"},
          {"title": "Trimmers"},
          {"title": "Electric Toothbrushes"},
          {"title": "Massagers"},
          {"title": "Hair Straighteners"},
          {"title": "Epilators"}
        ]
      }
    ]
  },
  {
    "title": "Travel",
    "img": "https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
    "subcategories": [
      {
        "title": "Flight Tickets",
        "subcategories": [
          {"title": "Domestic Flights"},
          {"title": "International Flights"},
          {"title": "Last Minute Deals"},
          {"title": "Student Discounts"},
          {"title": "Corporate Bookings"},
          {"title": "Multi-city Flights"}
        ]
      },
      {
        "title": "Hotel Bookings",
        "subcategories": [
          {"title": "Domestic Hotels"},
          {"title": "International Hotels"},
          {"title": "Luxury Hotels"},
          {"title": "Budget Hotels"},
          {"title": "Resorts"},
          {"title": "Boutique Hotels"}
        ]
      },
      {
        "title": "Holiday Packages",
        "subcategories": [
          {"title": "Adventure Tours"},
          {"title": "Beach Holidays"},
          {"title": "Family Packages"},
          {"title": "Honeymoon Packages"},
          {"title": "Pilgrimage Tours"},
          {"title": "Cruise Packages"}
        ]
      }
    ]
  },
  {
    "title": "Two Wheelers",
    "img": "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
    "subcategories": [
      {
        "title": "Motorcycles",
        "subcategories": [
          {"title": "Cruiser"},
          {"title": "Sports"},
          {"title": "Touring"},
          {"title": "Off-road"},
          {"title": "Commuter"},
          {"title": "Electric Motorcycles"}
        ]
      },
      {
        "title": "Scooters",
        "subcategories": [
          {"title": "Electric"},
          {"title": "Petrol"},
          {"title": "Hybrid"},
          {"title": "Retro"},
          {"title": "Performance"},
          {"title": "Foldable Scooters"}
        ]
      },
      {
        "title": "Accessories",
        "subcategories": [
          {"title": "Helmets"},
          {"title": "Riding Gear"},
          {"title": "Bike Covers"},
          {"title": "Tyres"},
          {"title": "Maintenance Kits"},
          {"title": "Security Systems"}
        ]
      }
    ]
  }
]
```


