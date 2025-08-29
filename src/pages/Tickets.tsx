import { useState } from "react";
import FlightResults from "../components/FlightResult";
import useFlightTickets from "../store/store";
import TrainStatus from "../components/Trains";
import { useTrainStore } from "../store/trianstore";
import { motion } from "motion/react";

type Tab = "train" | "bus" | "flight";

const Tickets = () => {
  const [tab, setTab] = useState<Tab>("flight");
  const { flightTickets } = useFlightTickets();
  const { trainData } = useTrainStore();

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-50 h-full w-full">
      <nav className="relative m-2 md:mx-8 flex items-center justify-center gap-6 px-4 md:px-8 py-2 md:py-2 bg-white rounded-2xl">
        {["flight", "train", "bus"].map((item) => (
          <div
            key={item}
            onClick={() => setTab(item as Tab)}
            className="relative px-4 py-2 cursor-pointer"
          >
            {/* Motion highlight background for selected tab */}
            {tab === item && (
              <motion.div
                layoutId="tabHighlight"
                className="absolute inset-0 bg-blue-200 rounded-xl -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Tab text */}
            <motion.p
              animate={{
                y: tab === item ? -4 : 0, // lift text up if selected
                fontWeight: tab === item ? 600 : 400,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative z-10 ${
                tab === item ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
              }`}
            >
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              
            </motion.p>
          </div>
        ))}
      </nav>

      {/* Bus tab */}
      {tab === "bus" && (
        <div className="flex justify-center items-center mt-10">coming soon</div>
      )}

      {/* Train tab */}
      {tab === "train" && (
        <div>{trainData && <TrainStatus data={trainData}></TrainStatus>}</div>
      )}

      {/* Flight tab */}
      {tab === "flight" && (
        <div>
          {flightTickets && (
            <div>
              <FlightResults data={flightTickets}></FlightResults>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tickets;
