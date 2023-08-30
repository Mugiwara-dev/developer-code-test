import React, { useState } from "react";
import Sidebar from "../Side-Bar";
import Button from "../../Components/Buttons/button";
import LocationInput from "../Web-NewLocation";

const WebLocation = () => {
  const obj = {
    name: "Khanqah Sharif, Bahawalpur",
    latitude: 28.7128,
    longitude: -120.0060,
  }
  const [currentLocation, setCurrentLocation] = useState(obj);
  const [previousLocations, setPreviousLocations] = useState([]);
  const [newLocationName, setNewLocationName] = useState('');
  const [showModal, setShowModal] = useState(false)

  const handleCheckIn = () => {
    setShowModal(true); // Open the modal
  };

  const handleModalSave = () => {
    const newLocation = {
      name: newLocationName,
      latitude: 40.7128,
      longitude: -74.0060,
    };
    setCurrentLocation(newLocation);
    setPreviousLocations([...previousLocations, { ...currentLocation}]);
    setNewLocationName('');
    setShowModal(false); // Close the modal
  };

  return (
      <div className="flex">
        <Sidebar/>

        <div>
          <div>
              <Button onClick={handleCheckIn} style="simple">+ Check-In</Button>
            <section>
              <h2 className="font-bold text-lg py-2">Current Location</h2>
              <span><p className="text-lg">📍<span className="pl-3">{currentLocation.name}</span></p>
                <span className="flex pl-10 text-gray-400">
                <p>{currentLocation.latitude}</p>
                <p>{currentLocation.longitude}</p>
                </span>
              </span>
            </section>
          </div>

          <div>
            <section>
              <h2 className="font-bold text-lg pt-6 pb-2">Previous Locations</h2>
              <ul>
                {previousLocations.map((location, index) => (
                    <li key={index}>
                      📍 <span className="pl-3 text-lg">{location.name}</span> <span className="flex pl-10 text-gray-400">{location.latitude} {location.longitude}</span>
                    </li>
                ))}
                <li>
                  📍 <span className="pl-3 text-lg">Lodhran, Bahawalpur, Punjab</span> <span className="flex pl-10 text-gray-400">28.7128 -120.0060</span>
                </li>
                <li>
                  📍 <span className="pl-3 text-lg">Ahmedpur, Bahawalpur, Punjab</span> <span className="flex pl-10 text-gray-400">28.7128 -120.0060</span>
                </li>
                <li>
                  📍 <span className="pl-3 text-lg">Musafir Khana, Bahawalpur, Punjab</span> <span className="flex pl-10 text-gray-400">28.7128 -120.0060</span>
                </li>
                <li>
                  📍 <span className="pl-3 text-lg">Helsingegatan, Stockholm, SE</span> <span className="flex pl-10 text-gray-400">28.7128 -120.0060</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <LocationInput showModal={showModal} setShowModal={setShowModal} handleModalSave={handleModalSave} newLocationName={newLocationName} setNewLocationName={setNewLocationName} />
      </div>
  );
};

export default WebLocation;
