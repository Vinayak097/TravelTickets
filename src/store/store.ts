import { create } from "zustand";
import type { ApiResponse } from "../components/FlightResult";

type FlightTicketsState = {
  flightTickets: ApiResponse | null;
  setFlightTickets: (tickets: ApiResponse) => void;
};

const useFlightTickets = create<FlightTicketsState>((set) => ({
  flightTickets: null,
  setFlightTickets: (tickets) => set({ flightTickets: tickets }),
}));

export default useFlightTickets;
