import React, { useState } from "react";
import Sidebar from "../Side-Bar";

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
            <div className="">
              <button onClick={handleCheckIn} className="font-bold py-6 text-lg">+ Check-In</button>
            </div>
            <section>
              <h2 className="font-bold text-lg py-2">Current Location</h2>
              <span>
                <p className="text-lg">📍<span className="pl-3">{currentLocation.name}</span></p>
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

const LocationInput = ({ showModal, setShowModal, handleModalSave, newLocationName, setNewLocationName }) => {
  return (
      <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center h-screen ${showModal ? "" : "hidden"}`}>
        <div className="bg-white p-4 rounded shadow flex flex-col">
          <div className="flex justify-center"><h2 className="font-bold text-2xl">Location Name</h2></div>
          <input
              className="border w-full px-3 py-2.5 my-5 rounded-md bg-gray-100"
              type="text"
              placeholder="Enter Location Name"
              value={newLocationName}
              onChange={(e) => setNewLocationName(e.target.value)}
          />
          <div className="my2">
            <button onClick={handleModalSave} className="w-full py-2.5 bg-black text-white rounded-full">Save</button>
          </div>
          <div className="flex justify-center mt-3">
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
  );
};

export default WebLocation;
