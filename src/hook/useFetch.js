import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);
    const [shouldRefetch, setShouldRefetch] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setShouldRefetch(false);

        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("Cancelled request");
                } else {
                    setError(error);
                }
            })
            .finally(() => setLoading(false));

        return () => abortController.abort();
    }, [url, shouldRefetch]);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Cancelled Request");
        }
    };

    const handleRefetch = () => {
        setShouldRefetch(true);
    };

    return { data, loading, error, handleCancelRequest, handleRefetch };
}
