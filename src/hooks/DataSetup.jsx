import React, { useState, useEffect } from "react";

export default function DataSetup(url) {
    const [data, setData] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    const [isError, SetIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                SetIsLoading(true);
                SetIsError(false);
                const fetchedData = await fetch(url);
                const json = await fetchedData.json();
                setData(json);
            } catch (error) {
                console.log(error);
                SetIsError(true);
            } finally {
                SetIsLoading(false);
            }
        }

        getData();
    }, [url]);

    return { data, isLoading, isError };
}
