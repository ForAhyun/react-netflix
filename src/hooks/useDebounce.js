import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debounceValue, sestDebounceValue] = useState(value);

    useEffect(() => {

        const handler = setTimeout(() => {
            sestDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debounceValue;
}
