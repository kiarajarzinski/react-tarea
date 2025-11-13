
import { useState } from "react";
export const MultipleCustomHook = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })
    
    const getFetch = async() => {
        
    }
  return (
    <>
    <h1>Los Simpsons API</h1>
    <h2>Personajes</h2>
      
    </>
  )
};
