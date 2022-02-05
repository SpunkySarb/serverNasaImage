import { useEffect, useState } from 'react';


const useHttp = (url) => {

    const [isLoading, setLoading] = useState(false);

    const [error, setError] = useState(null);
    
    const [response, newResponse] = useState(null);
        
    useEffect(async () => {
        setLoading(true);
        setError(null);
            try {
            const response = await fetch(url);
            //throwing error
            if (!response.ok) {
                throw new Error("OOPS.. The date should be between June, 16, 1995 and  today's Date...");
            }
                
            const data = await response.json();
                newResponse(data);
                

            } catch (error) {

                setError(error.message);

        }
        setLoading(false);
        },[url]);

   


    return { ...response, errorMessage: error, loadingStatus: isLoading };






}

export default useHttp;