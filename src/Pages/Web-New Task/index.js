import React from "react";
import SVG from "../../Components/SVGs/svg";
import Button from "../../Components/Buttons/button";
import TextField from "../../Components/Inputs/textarea";
import InputField from "../../Components/Inputs/input";
const WebNewTask = ({showModal , setShowModal, handleClick}) => {

  return(
      <>
      <form onSubmit={handleClick}>
          <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center h-screen ${showModal ? "" : "hidden"}`}>
                <div className="h-3/5 w-3/6 bg-white px-8 py-6 rounded-md">
                    <div className="font-bold text-2xl">
                        <h1>New Task</h1>
                    </div>
                    <div className="mt-9 mx-6">
                        <label className="flex items-start mx-6">
                            <SVG width={21} height={20} fill={"#575767"} pathName={"Summary"} viewBox={"0 0 21 20"}/>
                            <TextField style={"medium"} placeholder={"Summary"}/>
                        </label>
                        <hr className="my-3"/>
                        <label className="flex items-start mx-6">
                            <SVG width={20} height={18} viewBox={"0 0 20 18"} pathName={"Description"} fill={"#575767"}/>
                            <TextField style="large" placeholder="Description"/>
                        </label>
                        <hr className="mb-3"/>
                        <label className="flex items-center mx-6">
                            <SVG width={20} height={20} viewBox={"0 0 20 20"} pathName={"Clock"} fill={"#575767"}/>
                            <InputField type="datetime-local" style="naked" name="date" placeholder= "Date"/>
                        </label>
                        <hr className="my-5"/>
                    </div>
                    <div className="flex flex-col items-center justify-center px-32">
                        <Button style="primary" type="submit">Save</Button>
                        <Button style="naked" type="button" onClick={()=>setShowModal(false)}>Close</Button>
                    </div>
                </div>
          </div>
      </form>
      </>
  )
}
export default WebNewTask;