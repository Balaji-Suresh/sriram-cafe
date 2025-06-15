import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const defaultCenter = {
  lat: 13.0827, // Chennai coordinates as default
  lng: 80.2707,
};

const MapPicker = ({ onLocationSelect }) => {
  const [marker, setMarker] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  
  // Load the Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY', // Replace with your actual API key
    libraries,
  });

  const onMapClick = useCallback((event) => {
    const location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarker(location);
    
    // Get address from coordinates using Geocoding API
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const address = results[0].formatted_address;
        onLocationSelect(address, location);
        setSearchValue(address);
      }
    });
  }, [onLocationSelect]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    
    // Search for the address using Geocoding API
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchValue }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
        setMarker(location);
        onLocationSelect(searchValue, location);
        
        // Center the map on the found location
        if (map) {
          map.panTo(location);
        }
      }
    });
  };

  const [map, setMap] = useState(null);
  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <form onSubmit={handleSearch} className="location-search">
        <input
          type="text"
          className="form-control"
          placeholder="Search for an address"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={14}
          onClick={onMapClick}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {marker && <Marker position={marker} />}
        </GoogleMap>
      </div>
      <small className="text-muted d-block mb-3">
        Click on the map to select your delivery location or search for an address above.
      </small>
    </div>
  ) : (
    <div>Loading map...</div>
  );
};

export default MapPicker;