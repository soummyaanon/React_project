import { useEffect, useState } from "react"; // Importing useEffect and useState from react

function useCurrencyInfo(currency) { // Function to get the currency info
    const [data, setData] = useState({}); // Using useState to set the data and setData

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) // Fetching the data from the api
            .then((res) => setData(res[currency])); // Setting the data to the res

        console.log(data);
    }, [currency, data]); // Include 'data' in the dependency array

    console.log(data);

    return data;
}

export default useCurrencyInfo;