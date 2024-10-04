// TouristData.js
const touristData = [
    {
        id: 1,
        name: 'Maharashtra',
        latLng: [19.8762, 75.3433], // Coordinates for Maharashtra
        details: {
            famousLocation: 'Gateway of India',
            festival: 'Ganesh Chaturthi',
            funFact: 'Maharashtra is home to Bollywood, the Hindi film industry.',
            link: 'https://en.wikipedia.org/wiki/Maharashtra'
        },
        cities: [
            {
                name: 'Mumbai',
                latLng: [19.0760, 72.8777],
                iconUrl: 'https://img.icons8.com/?size=100&id=1Vfxk5HY1Vq6&format=png',
                info: 'Mumbai is the financial capital of India.',
                touristSpots: [
                    {
                        name: 'Taj Mahal Palace',
                        latLng: [18.9215, 72.8338],
                        iconUrl: 'https://img.icons8.com/?size=100&id=RIR3Tr8KjPxt&format=png',
                        info: 'Luxury hotel with stunning views of the Gateway of India.',
                        link: 'https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/',
                        type: 'hotel'
                    },
                    {
                        name: 'Phoenix Marketcity',
                        latLng: [19.1080, 72.8950],
                        iconUrl: 'https://img.icons8.com/?size=100&id=7xfD4hRZ3mpX&format=png',
                        info: 'A large shopping mall with a variety of shops.',
                        link: 'https://www.phoenixmarketcity.com/mumbai/',
                        type: 'shopping'
                    },
                    {
                        name: 'Marine Drive',
                        latLng: [18.9520, 72.8258],
                        iconUrl: 'https://img.icons8.com/?size=100&id=HCcMNfRy8sde&format=png',
                        info: 'Famous promenade and tourist attraction.',
                        link: 'https://en.wikipedia.org/wiki/Marine_Drive',
                        type: 'touristPlace'
                    },
                    {
                        name: 'Leopold Cafe',
                        latLng: [18.9210, 72.8358],
                        iconUrl: 'https://img.icons8.com/?size=100&id=2pE0lXZv7MkZ&format=png',
                        info: 'Popular restaurant and tourist destination.',
                        link: 'https://www.leopoldcafe.com/',
                        type: 'food'
                    }
                ]
            },
            {
                name: 'Pune',
                latLng: [18.5214, 73.8567],
                iconUrl: 'https://img.icons8.com/?size=100&id=NZKpLdzGTwt3&format=png',
                info: 'Pune is known for its historical sites.',
                touristSpots: [
                    {
                        name: 'O Hotel',
                        latLng: [18.5291, 73.8744],
                        iconUrl: 'https://img.icons8.com/?size=100&id=Q7vn2jVMHq4e&format=png',
                        info: 'Chic hotel in the heart of the city.',
                        link: 'https://www.ohotels.in/',
                        type: 'hotel'
                    },
                    {
                        name: 'Phoenix Marketcity Pune',
                        latLng: [18.5653, 73.9308],
                        iconUrl: 'https://img.icons8.com/?size=100&id=7xfD4hRZ3mpX&format=png',
                        info: 'Large shopping mall with a wide variety of stores.',
                        link: 'https://www.phoenixmarketcity.com/pune/',
                        type: 'shopping'
                    },
                    {
                        name: 'Aga Khan Palace',
                        latLng: [18.5255, 73.8892],
                        iconUrl: 'https://img.icons8.com/?size=100&id=qpPa4hD9SlzD&format=png',
                        info: 'Historical monument and tourist attraction.',
                        link: 'https://en.wikipedia.org/wiki/Aga_Khan_Palace',
                        type: 'touristPlace'
                    },
                    {
                        name: 'Vaishali Restaurant',
                        latLng: [18.5262, 73.8569],
                        iconUrl: 'https://img.icons8.com/?size=100&id=OPtG2VrDq39h&format=png',
                        info: 'Famous for its South Indian cuisine.',
                        link: 'http://vaishalirestaurant.in/',
                        type: 'food'
                    }
                ]
            }
        ]
    }
];

export default touristData;
