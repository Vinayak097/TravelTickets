import axios from "axios";

export const handleGetflight = async () => {
  const options = {
    method: "GET",
    url: "https://google-flights2.p.rapidapi.com/api/v1/searchFlights",
    params: {
      departure_id: "LAX",
      arrival_id: "JFK",
      outbound_date: "2025-09-28",
      return_date: "2025-09-30",
      travel_class: "ECONOMY",
      adults: "1",
      show_hidden: "1",
      currency: "USD",
      language_code: "en-US",
      country_code: "US",
      search_type: "best",
    },
    headers: {
      "x-rapidapi-key": "079b8dbe54msh7e2723eea7b4595p154443jsn92898f782b70",
      "x-rapidapi-host": "google-flights2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data, " data printing ");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const handleGetTrains = async () => {
  const options = {
    method: "GET",
    url: "https://indian-railway-irctc.p.rapidapi.com/api/trains/v1/train/status",
    params: {
      departure_date: "20250917",
      isH5: "true",
      client: "web",
      deviceIdentifier: "Mozilla%20Firefox-138.0.0.0",
      train_number: "12051",
    },
    headers: {
      "x-rapidapi-key": "079b8dbe54msh7e2723eea7b4595p154443jsn92898f782b70",
      "x-rapidapi-host": "indian-railway-irctc.p.rapidapi.com",
      "x-rapid-api": "rapid-api-database",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data, "trains response");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
