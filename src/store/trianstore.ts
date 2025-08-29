import { create } from "zustand";
// types/train.ts
export type Station = {
  stationCode: string;
  stationName: string;
  arrivalTime: string;
  departureTime: string;
  routeNumber: string;
  haltTime: string;
  distance: string;
  dayCount: string;
  stnSerialNumber: string;
  boardingDisabled: string;
  actual_arrival_date: string;
  actual_departure_date: string;
  actual_arrival_time: string;
  actual_departure_time: string;
};

export type TrainApiResponse = {
  error: string | null;
  status: {
    result: string;
    message: {
      title: string;
      message: string;
    };
  };
  body: {
    time_of_availability: string;
    current_station: string;
    terminated: boolean;
    server_timestamp: string;
    train_status_message: string;
    stations: Station[];
  };
  meta: object;
  code: number;
};

type TrainState = {
  trainData: TrainApiResponse | null;
  loading: boolean;
  error: string | null;
  setTrainData: (data: TrainApiResponse) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const useTrainStore = create<TrainState>((set) => ({
  trainData: null,
  loading: false,
  error: null,
  setTrainData: (data) => set({ trainData: data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
