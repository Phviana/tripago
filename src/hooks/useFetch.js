import { useEffect, useRef, useState } from "react";
import { api } from "../services/api";

export function useFetch(url, _option) {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");

    const option = useRef(_option).current

    useEffect(() => {

        const controller = new AbortController()

        async function getTrips() {
            try {
                setIsPending(true);
                const response = await api.get(url, { signal: controller.signal });
                console.log(response)
                if (response.status !== 200) {
                    throw new Error(response.status)
                }

                setIsPending(false);
                setData(response.data);
                setError(null);
            } catch (err) {
                if (err.message === "canceled") {
                    console.log("the fetch was aborted")
                }else{
                    setIsPending(false);
                    setError("Could not fetch the data");
                    console.log(err.message)
                }
                
            }


        }

        getTrips();

        return () => {
            controller.abort()
        }

    }, [url, option])

    return { data, isPending, error }
}
