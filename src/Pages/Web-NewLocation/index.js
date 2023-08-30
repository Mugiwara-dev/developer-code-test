import Button from "../../Components/Buttons/button";
import React from "react";
import InputField from "../../Components/Inputs/input";

const LocationInput = ({ showModal, setShowModal, handleModalSave, newLocationName, setNewLocationName }) => {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center h-screen ${showModal ? "" : "hidden"}`}>
            <div className="bg-white p-4 rounded shadow flex flex-col">
                <div className="flex justify-center mb-2"><h2 className="font-bold text-2xl">Location Name</h2></div>
                <InputField style="Simple" type="text" placeholder="Enter Location Name" value={newLocationName} onChange={(e) => setNewLocationName(e.target.value)}/>
                <div className="my-2 flex flex-col items-center">
                    <Button onClick={handleModalSave} style="primary">Save</Button>
                    <Button onClick={() => setShowModal(false)} style="naked">Cancel</Button>
                </div>
            </div>
        </div>
    );
};
export default LocationInput;