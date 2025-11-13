
import React, { useState, useEffect } from "react";
import { useCounter } from "../hooks/UseCounter.js";

export const MultipleCustomHook = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
    });

  const { count, handleIncrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, isLoading } = state;
    
    const getFetch = async() => {
      try {
        setState({
        ...state,
        isLoading: true,
    });

      const resp = await fetch(url);
      const data = await resp.json();
      await new Promise((resolve) => setTimeout(resolve, 300));
      console.log(data);
      setState({
        data: data,
        isLoading: false,
      });
    } catch (error) {
      console.log("Error al hacer el fetch de los personajes", error);
    }
  };
  useEffect(() => {
    getFetch();
  }, [count]);

  return (
    <>
    <h1>Los Simpsons API</h1>
    <h2>Personajes</h2>
     <h6>{data?.id}</h6>
      <h5>{data?.name}</h5>
      <h5>{data?.age}</h5>
      <h6>{data?.description}</h6>
      <img
        src="{data?.first_appearance_ep.image_path}"
        alt="{data?.first_appearance_ep.image_path}"
      />
      {isLoading ? <h1>Cargando...</h1> : <h1></h1>}
      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>

      
    </>
  )
};
