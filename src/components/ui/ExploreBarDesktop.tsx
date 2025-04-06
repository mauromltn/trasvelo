'use client';
import { useState } from "react";
import Divider from "./Divider";

export default function ExploreBarDesktop() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [tripType, setTripType] = useState("");

  const handleExplore = () => {
    console.log("Destination:", destination);
    console.log("Date:", date);
    console.log("Trip Type:", tripType);
  };

  return (
    <div className="hidden md:block md:absolute md:top-125">
      <div className="flex items-center w-170 h-15 p-2 gap-4 rounded-full border-2 border-white/20 text-sm font-medium backdrop-blur-sm bg-black/5">
        <select
          value={destination}
          onChange={e => setDestination(e.target.value)}
        >
          <option value="" disabled>Select destination</option>
          <option value="paris">Paris</option>
          <option value="tokyo">Tokyo</option>
          <option value="newyork">New York</option>
        </select>

        <Divider />
        
        <select
          value={date}
          onChange={e => setDate(e.target.value)}
        >
          <option value="" disabled>Date destination</option>
          <option value="2025-05">May 2025</option>
          <option value="2025-06">June 2025</option>
          <option value="2025-07">July 2025</option>
        </select>

        <Divider />

        <select
          value={tripType}
          onChange={e => setTripType(e.target.value)}
        >
          <option value="" disabled>Trip type</option>
          <option value="solo">Solo</option>
          <option value="couple">Couple</option>
          <option value="family">Family</option>
        </select>

        <Divider />
        
        <button
          onClick={handleExplore}
          className="w-1/4 h-full rounded-full bg-white text-black cursor-pointer hover:bg-gray-300 duration-200 ease"
        >
          Explore
        </button>
      </div>
    </div>
  );
}
