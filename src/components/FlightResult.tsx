
export type Flight = {
  departure_time: string
  arrival_time: string
  duration: { raw: number; text: string }
  price: number
  airline_logo: string
  flights: {
    departure_airport: { airport_name: string; airport_code: string }
    arrival_airport: { airport_name: string; airport_code: string }
    airline: string
    flight_number: string
    aircraft: string
    seat: string
  }[]
}

export type ApiResponse = {
  itineraries: {
    topFlights: Flight[]
    otherFlights: Flight[]
  }
}

const FlightResults = ({ data }: { data: ApiResponse }) => {
  return (
    <div className="p-4 grid gap-4 ">
      <h2 className="text-2xl font-bold">Top Flights</h2>
      {data.itineraries.topFlights.map((flight, idx) => (
        <div
          key={idx}
          className="border border-neutral-200 rounded-2xl p-4 shadow flex items-center gap-4"
        >
          <img
            src={flight.airline_logo}
            alt="airline logo"
            className="w-12 h-12"
          />
          <div className="flex-1">
            <div className="font-semibold">
              {flight.flights[0].departure_airport.airport_code} →{" "}
              {flight.flights[0].arrival_airport.airport_code}
            </div>
            <div className="text-sm text-gray-600">
              {flight.departure_time} – {flight.arrival_time}
            </div>
            <div className="text-sm">{flight.duration.text}</div>
          </div>
          <div className="text-lg font-bold border bg-red-500">${flight.price}</div>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-6">Other Flights</h2>
      {data.itineraries.otherFlights.map((flight, idx) => (
        <div
          key={idx}
          className="border border-neutral-300 rounded-2xl p-4 shadow flex items-center gap-4"
        >
          <img
            src={flight.airline_logo}
            alt="airline logo"
            className="w-12 h-12"
          />
          <div className="flex-1">
            <div className="font-semibold">
              {flight.flights[0].departure_airport.airport_code} →{" "}
              {flight.flights[flight.flights.length - 1].arrival_airport.airport_code}
            </div>
            <div className="text-sm text-gray-600">
              {flight.departure_time} – {flight.arrival_time}
            </div>
            <div className="text-sm">{flight.duration.text}</div>
          </div>
          <div className="text-lg font-bold">${flight.price}</div>
        </div>
      ))}
    </div>
  )
}

export default FlightResults
