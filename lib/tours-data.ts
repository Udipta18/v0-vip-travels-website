export interface Tour {
    id: string
    title: string
    subtitle: string
    days: number
    dates: string[]
    image: string
    gradient: string
    description: string
    highlights: string[]
    itinerary: {
        day: number
        title: string
        description: string
        activities: string[]
    }[]
    inclusions: string[]
    exclusions: string[]
    price: {
        perPerson: number
        currency: string
    }
}

export const tours: Tour[] = [
    {
        id: "spain-portugal",
        title: "SPLENDID",
        subtitle: "SPAIN AND PORTUGAL",
        days: 14,
        dates: ["22 AUGUST 2026"],
        image: "/tour_spain_portugal.png",
        gradient: "from-cyan-400 to-blue-500",
        description:
            "Embark on an unforgettable journey through the Iberian Peninsula, exploring the rich history, stunning architecture, and vibrant culture of Spain and Portugal.",
        highlights: [
            "Visit the iconic Sagrada Familia in Barcelona",
            "Explore the historic Alhambra Palace in Granada",
            "Discover Lisbon's charming neighborhoods",
            "Experience authentic Flamenco in Seville",
            "Wine tasting in Porto's Douro Valley",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Barcelona",
                description: "Welcome to Spain! Arrive in Barcelona and transfer to your hotel.",
                activities: [
                    "Airport pickup and hotel check-in",
                    "Welcome dinner at a traditional Catalan restaurant",
                    "Evening stroll along Las Ramblas",
                ],
            },
            {
                day: 2,
                title: "Barcelona City Tour",
                description: "Explore the architectural wonders of Barcelona",
                activities: [
                    "Visit Sagrada Familia and Park Güell",
                    "Gothic Quarter walking tour",
                    "Lunch at La Boqueria Market",
                    "Evening at Barceloneta Beach",
                ],
            },
            {
                day: 3,
                title: "Barcelona to Valencia",
                description: "Journey south to the coastal city of Valencia",
                activities: [
                    "Morning departure to Valencia",
                    "City of Arts and Sciences tour",
                    "Traditional paella cooking class",
                    "Sunset at Malvarrosa Beach",
                ],
            },
            {
                day: 4,
                title: "Valencia to Granada",
                description: "Travel to the historic city of Granada",
                activities: [
                    "Scenic drive through Spanish countryside",
                    "Arrival and hotel check-in",
                    "Evening tapas tour in Albaicín",
                    "Flamenco show",
                ],
            },
            {
                day: 5,
                title: "Alhambra Palace",
                description: "Discover the magnificent Moorish palace",
                activities: [
                    "Guided tour of Alhambra and Generalife Gardens",
                    "Free afternoon for shopping",
                    "Sunset views from Mirador de San Nicolás",
                ],
            },
            {
                day: 6,
                title: "Granada to Seville",
                description: "Head to the heart of Andalusia",
                activities: [
                    "Morning departure to Seville",
                    "Seville Cathedral and Giralda Tower visit",
                    "Royal Alcázar tour",
                    "Evening river cruise on Guadalquivir",
                ],
            },
            {
                day: 7,
                title: "Seville Exploration",
                description: "Full day discovering Seville's charm",
                activities: [
                    "Plaza de España and Maria Luisa Park",
                    "Triana neighborhood and ceramic workshops",
                    "Authentic Flamenco performance",
                    "Tapas dinner in Santa Cruz",
                ],
            },
            {
                day: 8,
                title: "Seville to Lisbon",
                description: "Cross into Portugal",
                activities: [
                    "Scenic drive to Lisbon",
                    "Afternoon arrival and hotel check-in",
                    "Evening at Bairro Alto",
                    "Fado music performance",
                ],
            },
            {
                day: 9,
                title: "Lisbon City Tour",
                description: "Explore Portugal's captivating capital",
                activities: [
                    "Belém Tower and Jerónimos Monastery",
                    "Taste famous Pastéis de Belém",
                    "Alfama district walking tour",
                    "Tram 28 experience",
                ],
            },
            {
                day: 10,
                title: "Sintra Day Trip",
                description: "Visit the fairy-tale town of Sintra",
                activities: [
                    "Pena Palace tour",
                    "Quinta da Regaleira exploration",
                    "Cabo da Roca (westernmost point of Europe)",
                    "Return to Lisbon",
                ],
            },
            {
                day: 11,
                title: "Lisbon to Porto",
                description: "Journey to Portugal's second city",
                activities: [
                    "Morning departure to Porto",
                    "Stop at Coimbra University",
                    "Arrival in Porto and hotel check-in",
                    "Evening at Ribeira district",
                ],
            },
            {
                day: 12,
                title: "Porto Exploration",
                description: "Discover the charm of Porto",
                activities: [
                    "Port wine cellar tour and tasting",
                    "Livraria Lello bookstore visit",
                    "Clérigos Tower climb",
                    "Douro River cruise",
                ],
            },
            {
                day: 13,
                title: "Douro Valley",
                description: "Wine country excursion",
                activities: [
                    "Full-day Douro Valley tour",
                    "Visit two wine estates",
                    "Traditional Portuguese lunch",
                    "Scenic train ride",
                ],
            },
            {
                day: 14,
                title: "Departure",
                description: "Farewell to the Iberian Peninsula",
                activities: [
                    "Leisure morning in Porto",
                    "Last-minute shopping",
                    "Airport transfer",
                    "Departure with unforgettable memories",
                ],
            },
        ],
        inclusions: [
            "13 nights accommodation in 4-star hotels",
            "Daily breakfast and 10 dinners",
            "All transfers and transportation in AC coach",
            "Professional English-speaking guide",
            "All entrance fees to mentioned attractions",
            "Port wine tasting in Porto",
            "Flamenco show in Seville",
            "Fado performance in Lisbon",
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Lunches (except where specified)",
            "Personal expenses and tips",
            "Optional activities",
        ],
        price: {
            perPerson: 185000,
            currency: "INR",
        },
    },
    {
        id: "kenya-safari",
        title: "KENYA",
        subtitle: "SAFARI",
        days: 9,
        dates: ["17 JULY 2026", "8 AUGUST 2026", "4 SEPTEMBER 2026"],
        image: "/tour_kenya_safari.png",
        gradient: "from-purple-400 via-pink-400 to-orange-400",
        description:
            "Experience the ultimate African safari adventure in Kenya. Witness the Great Migration, spot the Big Five, and immerse yourself in the stunning landscapes of East Africa.",
        highlights: [
            "Witness the Great Wildebeest Migration",
            "Spot the Big Five in Masai Mara",
            "Visit a traditional Maasai village",
            "Sunrise hot air balloon safari",
            "Game drives in multiple national parks",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Nairobi",
                description: "Welcome to Kenya!",
                activities: [
                    "Arrive at Jomo Kenyatta International Airport",
                    "Meet and greet by our representative",
                    "Transfer to hotel in Nairobi",
                    "Welcome briefing and dinner",
                ],
            },
            {
                day: 2,
                title: "Nairobi to Amboseli",
                description: "Journey to Amboseli National Park",
                activities: [
                    "Early breakfast and departure",
                    "Scenic drive to Amboseli (4 hours)",
                    "Lunch at the lodge",
                    "Afternoon game drive with views of Mt. Kilimanjaro",
                ],
            },
            {
                day: 3,
                title: "Amboseli Full Day",
                description: "Explore Amboseli's elephant herds",
                activities: [
                    "Early morning game drive",
                    "Return to lodge for breakfast",
                    "Leisure time at the lodge",
                    "Afternoon game drive",
                    "Sundowner experience",
                ],
            },
            {
                day: 4,
                title: "Amboseli to Lake Nakuru",
                description: "Travel to the Great Rift Valley",
                activities: [
                    "Morning game drive and breakfast",
                    "Drive to Lake Nakuru (6 hours)",
                    "Lunch en route",
                    "Evening arrival and relaxation",
                ],
            },
            {
                day: 5,
                title: "Lake Nakuru to Masai Mara",
                description: "Head to the world-famous Masai Mara",
                activities: [
                    "Early morning game drive at Lake Nakuru",
                    "Spot flamingos and rhinos",
                    "Drive to Masai Mara (5 hours)",
                    "Evening game drive in Masai Mara",
                ],
            },
            {
                day: 6,
                title: "Masai Mara Full Day",
                description: "Full day safari in Masai Mara",
                activities: [
                    "Optional hot air balloon safari at sunrise",
                    "Full-day game drive with picnic lunch",
                    "Search for the Big Five",
                    "Witness the Great Migration (seasonal)",
                ],
            },
            {
                day: 7,
                title: "Masai Mara Experience",
                description: "Another day in paradise",
                activities: [
                    "Early morning game drive",
                    "Return to lodge for breakfast",
                    "Visit to Maasai village",
                    "Afternoon game drive",
                    "Bush dinner under the stars",
                ],
            },
            {
                day: 8,
                title: "Masai Mara to Nairobi",
                description: "Return to Nairobi",
                activities: [
                    "Final early morning game drive",
                    "Breakfast at the lodge",
                    "Drive back to Nairobi (5-6 hours)",
                    "Farewell dinner at Carnivore Restaurant",
                ],
            },
            {
                day: 9,
                title: "Departure",
                description: "Safari memories to last a lifetime",
                activities: [
                    "Leisure morning (day room available)",
                    "Optional Nairobi city tour",
                    "Transfer to airport",
                    "Departure",
                ],
            },
        ],
        inclusions: [
            "8 nights accommodation (mix of lodges and tented camps)",
            "All meals as per itinerary",
            "All game drives in 4x4 safari vehicles",
            "Professional safari guide",
            "Park entrance fees",
            "Maasai village visit",
            "Airport transfers",
            "Bottled water during game drives",
        ],
        exclusions: [
            "International flights",
            "Kenya visa fees",
            "Travel insurance",
            "Hot air balloon safari (optional, USD 450 per person)",
            "Tips for guides and lodge staff",
            "Personal expenses",
        ],
        price: {
            perPerson: 165000,
            currency: "INR",
        },
    },
    {
        id: "canadian-rockies",
        title: "ALASKA AND",
        subtitle: "CANADIAN ROCKIES",
        days: 17,
        dates: ["15 JUNE 2026"],
        image: "/tour_canadian_rockies.png",
        gradient: "from-teal-400 to-cyan-500",
        description:
            "Discover the breathtaking beauty of the Canadian Rockies and Alaska. From turquoise lakes to massive glaciers, this journey showcases nature at its finest.",
        highlights: [
            "Visit stunning Moraine Lake and Lake Louise",
            "Explore Banff and Jasper National Parks",
            "Glacier cruise in Alaska",
            "Wildlife spotting opportunities",
            "Scenic train journey through the Rockies",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Calgary",
                description: "Welcome to Canada!",
                activities: [
                    "Arrive at Calgary International Airport",
                    "Transfer to hotel",
                    "Orientation meeting",
                    "Welcome dinner",
                ],
            },
            {
                day: 2,
                title: "Calgary to Banff",
                description: "Journey to the heart of the Rockies",
                activities: [
                    "Scenic drive to Banff (1.5 hours)",
                    "Banff Gondola ride to Sulphur Mountain",
                    "Explore Banff town",
                    "Evening at leisure",
                ],
            },
            {
                day: 3,
                title: "Lake Louise & Moraine Lake",
                description: "Visit the most beautiful lakes in Canada",
                activities: [
                    "Early morning visit to Moraine Lake",
                    "Canoeing on Lake Louise",
                    "Fairmont Chateau Lake Louise tour",
                    "Hiking options available",
                ],
            },
            {
                day: 4,
                title: "Icefields Parkway",
                description: "One of the world's most scenic drives",
                activities: [
                    "Drive along Icefields Parkway",
                    "Columbia Icefield experience",
                    "Glacier Skywalk",
                    "Athabasca Falls",
                ],
            },
            {
                day: 5,
                title: "Jasper National Park",
                description: "Explore Jasper's wilderness",
                activities: [
                    "Maligne Lake cruise to Spirit Island",
                    "Maligne Canyon walk",
                    "Jasper town exploration",
                    "Optional wildlife tour",
                ],
            },
            {
                day: 6,
                title: "Jasper to Vancouver",
                description: "Scenic train journey",
                activities: [
                    "Board Rocky Mountaineer train",
                    "Full-day scenic rail journey",
                    "Gourmet meals on board",
                    "Arrive in Vancouver evening",
                ],
            },
            {
                day: 7,
                title: "Vancouver City Tour",
                description: "Discover beautiful Vancouver",
                activities: [
                    "Stanley Park and Seawall",
                    "Granville Island",
                    "Gastown and Chinatown",
                    "Capilano Suspension Bridge",
                ],
            },
            {
                day: 8,
                title: "Vancouver to Juneau",
                description: "Fly to Alaska's capital",
                activities: [
                    "Flight to Juneau",
                    "Mendenhall Glacier visit",
                    "Downtown Juneau exploration",
                    "Salmon bake dinner",
                ],
            },
            {
                day: 9,
                title: "Juneau Adventures",
                description: "Alaska wilderness experience",
                activities: [
                    "Whale watching tour",
                    "Glacier helicopter tour (optional)",
                    "Alaska State Museum",
                    "Free evening",
                ],
            },
            {
                day: 10,
                title: "Juneau to Skagway",
                description: "Gold Rush history",
                activities: [
                    "Ferry to Skagway",
                    "White Pass & Yukon Route Railway",
                    "Historic downtown walking tour",
                    "Gold Rush museum",
                ],
            },
            {
                day: 11,
                title: "Glacier Bay",
                description: "UNESCO World Heritage Site",
                activities: [
                    "Full-day Glacier Bay cruise",
                    "Witness calving glaciers",
                    "Wildlife spotting (whales, seals, bears)",
                    "Park ranger narration",
                ],
            },
            {
                day: 12,
                title: "Skagway to Anchorage",
                description: "Alaska's largest city",
                activities: [
                    "Flight to Anchorage",
                    "City tour",
                    "Alaska Native Heritage Center",
                    "Dinner at a local restaurant",
                ],
            },
            {
                day: 13,
                title: "Denali National Park",
                description: "Home of North America's tallest peak",
                activities: [
                    "Drive to Denali (4 hours)",
                    "Afternoon arrival",
                    "Visitor center exploration",
                    "Evening ranger program",
                ],
            },
            {
                day: 14,
                title: "Denali Exploration",
                description: "Wildlife and wilderness",
                activities: [
                    "Full-day Denali bus tour",
                    "Wildlife viewing opportunities",
                    "Views of Denali (weather permitting)",
                    "Picnic lunch in the park",
                ],
            },
            {
                day: 15,
                title: "Denali to Seward",
                description: "Coastal Alaska",
                activities: [
                    "Scenic drive to Seward",
                    "Stop at Portage Glacier",
                    "Alaska SeaLife Center",
                    "Evening in Seward",
                ],
            },
            {
                day: 16,
                title: "Kenai Fjords",
                description: "Glacier cruise adventure",
                activities: [
                    "Full-day Kenai Fjords cruise",
                    "See tidewater glaciers",
                    "Marine wildlife viewing",
                    "Return to Anchorage",
                ],
            },
            {
                day: 17,
                title: "Departure",
                description: "Farewell to the Great North",
                activities: [
                    "Leisure morning",
                    "Last-minute shopping",
                    "Airport transfer",
                    "Departure with incredible memories",
                ],
            },
        ],
        inclusions: [
            "16 nights accommodation in premium hotels",
            "Daily breakfast and 12 dinners",
            "Rocky Mountaineer train journey (1 day)",
            "All transfers and transportation",
            "Professional tour guide",
            "All entrance fees to national parks",
            "Glacier Bay cruise",
            "Kenai Fjords cruise",
            "Banff Gondola",
            "Columbia Icefield experience",
        ],
        exclusions: [
            "International flights",
            "Domestic flights (Vancouver-Juneau, Skagway-Anchorage)",
            "Travel insurance",
            "Lunches (except where specified)",
            "Optional activities (helicopter tours, etc.)",
            "Personal expenses and tips",
        ],
        price: {
            perPerson: 425000,
            currency: "INR",
        },
    },
]
