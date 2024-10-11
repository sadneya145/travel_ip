import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import touristData from './TouristData'; // Import tourist data
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Simulate a socket connection (replace with your server URL)
const socket = io();

const Map = () => {
    const mapRef = useRef(null); // Reference for map container
    const [filters, setFilters] = useState({
        hotels: false,
        shopping: false,
        touristPlaces: false,
        food: false,
    });
    const [mapInstance, setMapInstance] = useState(null);
    const [touristMarkers, setTouristMarkers] = useState({});

    useEffect(() => {
        if (mapRef.current) {
            // Initialize the map
            const mapInstance = L.map(mapRef.current).setView([20.5937, 78.9629], 5); // Center of India
            L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                subdomains: ['0', '1', '2', '3'],
                attribution: '&copy; <a href="https://maps.google.com">Google</a>',
            }).addTo(mapInstance);

            // Define a common icon for state markers
            const stateIcon = L.icon({
                iconUrl: 'https://img.icons8.com/?size=100&id=OBmVbH2qOGwK&format=png&color=000000',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });

            touristData.forEach((state) => {
                const stateMarker = L.marker(state.latLng, { icon: stateIcon }).addTo(mapInstance);
                
                // Create popup content for state data
                const popupContent = `
                    <b>${state.name}</b><br/>
                    Famous Location: ${state.details.famousLocation}<br/>
                    Festival: ${state.details.festival}<br/>
                    Fun Fact: ${state.details.funFact}<br/>
                    <a href="${state.details.link}" target="_blank">More Info</a>
                `;
                stateMarker.bindPopup(popupContent);

                // Add a click event listener to show tourist spots
                stateMarker.on('click', () => {
                    mapInstance.setView(state.latLng, 7); // Zoom in on state

                    // Clear existing markers
                    Object.values(touristMarkers).forEach((marker) => mapInstance.removeLayer(marker));

                    // Add city markers
                    state.cities.forEach((city) => {
                        const customIcon = L.icon({
                            iconUrl: city.iconUrl,
                            iconSize: [32, 32],
                            iconAnchor: [16, 32],
                        });
                        const cityMarker = L.marker(city.latLng, { icon: customIcon }).addTo(mapInstance);
                        cityMarker.bindPopup(`<b>${city.name}</b><br/>${city.info}<br/><a href="${city.link}" target="_blank">More Info</a>`);

                        // City marker click event
                        cityMarker.on('click', (e) => {
                            e.stopPropagation(); // Prevent the state marker popup from closing
                            mapInstance.setView(city.latLng, 11); // Zoom in on city

                            // Clear existing tourist markers
                            Object.values(touristMarkers).forEach((marker) => mapInstance.removeLayer(marker));
                            const newTouristMarkers = {}; // Store new markers based on filters

                            city.touristSpots.forEach((spot) => {
                                // Check if the tourist spot matches any selected filters
                                if ((filters.hotels && spot.type === 'hotel') || 
                                    (filters.shopping && spot.type === 'shopping') || 
                                    (filters.touristPlaces && spot.type === 'touristPlace') || 
                                    (filters.food && spot.type === 'food')) {
                                    
                                    const customIcon = L.icon({
                                        iconUrl: spot.iconUrl,
                                        iconSize: [20, 20],
                                        iconAnchor: [10, 20], // Adjust anchor to fit the icon
                                    });

                                    // Create and add the tourist marker
                                    const touristMarker = L.marker(spot.latLng, { icon: customIcon }).addTo(mapInstance);
                                    newTouristMarkers[spot.name] = touristMarker; // Save marker for cleanup

                                    touristMarker.bindPopup(
                                        `<b>${spot.name}</b><br/>${spot.info}<br/><a href="${spot.link}" target="_blank">More Info</a>`
                                    );
                                }
                            });
                            setTouristMarkers(newTouristMarkers); // Update state with new markers
                        });
                    });
                });
            });

            setMapInstance(mapInstance);
            
            // Cleanup function
            return () => {
                mapInstance.remove();
                socket.disconnect();
            };
        }
    }, [filters]);

    // Handle filter change
    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
    };

    return (
        <div>
            <Navbar/>
            <div className="filters">
                <label>
                    <input type="checkbox" name="hotels" checked={filters.hotels} onChange={handleFilterChange} />
                    Hotels
                </label>
                <label>
                    <input type="checkbox" name="shopping" checked={filters.shopping} onChange={handleFilterChange} />
                    Shopping
                </label>
                <label>
                    <input type="checkbox" name="touristPlaces" checked={filters.touristPlaces} onChange={handleFilterChange} />
                    Tourist Places
                </label>
                <label>
                    <input type="checkbox" name="food" checked={filters.food} onChange={handleFilterChange} />
                    Food
                </label>
            </div>
            <div id="map" ref={mapRef} style={{ width: '100%', height: '100vh' }} />
            <Footer/>
        </div>
    );
};

export default Map;
