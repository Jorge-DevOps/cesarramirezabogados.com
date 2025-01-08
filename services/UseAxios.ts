import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';


export const useData = (url: string) => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError<any> | null>(null); // Especifica el tipo de error

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<any[]> = await axios.get(url);
                setData(response.data);
                setIsLoading(false);
            } catch (error: AxiosError | any) { // Utiliza error: AxiosError | any para manejar errores de cualquier tipo
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);  

    return { data, isLoading, error };
}
