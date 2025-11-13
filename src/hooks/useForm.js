//Se importa el hook useState
import { useState } from "react";
 
//recibe el valor inicial del formulario
 export const useForm = (initialState) => {
  //useState para el manejo de los valores del formulario
    const [ form, setFormValues ] = useState(initialState);

 const handleChange = ( event ) => {
  const { name, value} = event.target;
  setFormValues({
    ...form,
    [ name ]: value
  });

 };
 const handleReset = () => {
  setFormValues(initialState);

 };
 //retorna los valores, la funcion para actualizar y resetear los valores del formulario
 return  { form, handleChange, handleReset };
  };


 
 