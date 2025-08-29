import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { handleGetflight, handleGetTrains } from "../actions/api";
import { useState } from "react";

import useFlightTickets from "../store/store";
import { useNavigate } from "react-router-dom";
import { useTrainStore } from "../store/trianstore";
type TicketSearchForm = {
  from: string;
  to: string;
  departure: string; // Changed to string to work with date input
  mode: "train" | "bus" | "flights";
};

const Filltrain = () => {
  const navigate=useNavigate()
    
    const [loadings,setloading]=useState<boolean>(false)
    const {setFlightTickets}=useFlightTickets()
     const {  setTrainData} =  useTrainStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketSearchForm>();

  const onSubmit: SubmitHandler<TicketSearchForm> = (data) => console.log(data);

  return (
    <div className=" mt-6 bg-white p-2 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className=" grid text-black grid-cols-2 gap-2">

        
        {/* From Input */}
        <div>
          <label htmlFor="from" className="block text-lg font-medium mb-2">
            From
          </label>
          <input
            id="from"
            type="text"
            {...register("from", { required: "From location is required" })}
            className="w-full p-2 border border-neutral-400 rounded-lg"
            placeholder="Enter departure location"
          />
          {errors.from && (
            <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>
          )}
        </div>

        {/* To Input */}
        <div className="">
          <label htmlFor="to" className="block text-lg font-medium mb-2">
            To
          </label>
          <input
            id="to"
            type="text"
            {...register("to", { required: "Destination is required" })}
            className="w-full p-2 border border-neutral-400 rounded-lg"
            placeholder="Enter destination"
          />
          {errors.to && (
            <p className="text-red-500 text-sm mt-1">{errors.to.message}</p>
          )}
        </div>

        {/* Departure Date */}
        <div>
          <label htmlFor="departure" className="block text-lg font-medium mb-2">
            Departure Date
          </label>
          <input
            id="departure"
            placeholder="departure"
            type="date"
            {...register("departure", { required: "Departure date is required" })}
            className="w-full p-2 border border-neutral-400 rounded-lg"
          />
          {errors.departure && (
            <p className="text-red-500 text-sm mt-1">
              {errors.departure.message}
            </p>
          )}
        </div>

      

        {/* Submit Button */}
        </div>
      <div>
          <button
          onClick={async()=>{
            setloading(true)
            const res=await handleGetflight()
            const trainres=await handleGetTrains();
            
            
            setFlightTickets(res)
            setTrainData(trainres)
            
            console.log(res , 'res')
            setloading(false)
            navigate('/tickets')
        }}
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Search Tickets
          </button>
        </div>
        
      </form>
      {loadings&&(
        <div className="px-4 py-8 mb-4 shadow-2xl "> loading...</div>
      )}
      
    
        
    </div>
  );
};

export default Filltrain;