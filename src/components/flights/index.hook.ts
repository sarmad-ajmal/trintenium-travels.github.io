import { useRef, useState } from "react";
import queryString from "query-string";

const useFlights = () => {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const fromRef = useRef<number | null>(null);
  const toRef = useRef<number | null>(null);
  const dateRef = useRef<string>("");

  const onChangeFromAirport = (id: number | null) => {
    fromRef.current = id;
  };
  const onChangeToAirport = (id: number | null) => {
    toRef.current = id;
  };
  const onChangeDate = (date: string) => {
    dateRef.current = date;
  };
  const onFetch = async () => {
    if (!dateRef.current && fromRef.current == null) {
      return;
    }
    try {
      setLoading(true);
      const payload = queryString.stringify({
        departureAirportId: fromRef.current,
        arrivalAirport: toRef.current,
        etd: dateRef.current,
      });
      const response = await fetch(
        `https://dev.charterpad.com/serve/api/trip/search?${payload}`
      );
      const json = await response.json();
      const trips = json.result.trips;
      setFlights(trips);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return {
    loading,
    flights,
    onFetch,
    onChangeDate,
    onChangeFromAirport,
    onChangeToAirport,
  };
};
export default useFlights;
