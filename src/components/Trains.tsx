import type { TrainApiResponse } from "../store/trianstore"

const TrainStatus = ({ data }: { data: TrainApiResponse }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Train Status</h2>
      <p className="text-gray-700">{data.body.train_status_message}</p>
      <p className="text-sm text-gray-500 mb-4">
        Last updated: {data.body.time_of_availability}
      </p>

      <div className="border rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Station</th>
              <th className="p-2">Arrival</th>
              <th className="p-2">Departure</th>
              <th className="p-2">Distance (km)</th>
              <th className="p-2">Halt</th>
            </tr>
          </thead>
          <tbody>
            {data.body.stations.map((station) => (
              <tr key={station.stationCode} className="border-t">
                <td className="p-2 font-medium">{station.stationName}</td>
                <td className="p-2 text-center">{station.actual_arrival_time}</td>
                <td className="p-2 text-center">{station.actual_departure_time}</td>
                <td className="p-2 text-center">{station.distance}</td>
                <td className="p-2 text-center">{station.haltTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TrainStatus
