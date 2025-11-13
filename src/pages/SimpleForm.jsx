import React from "react";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm.js";

export default function SimpleForm() {
  const { form, handleChange } = useForm({
    username: "",
    password: "",
  });
  const getFechTareas = () => {
    console.log("Realizar fetch a una api");
    console.log("Guardamos las tareas en el estado");
  };
  useEffect(() => {
    getFechTareas();
  }, []);

  useEffect(() => {
    console.log("Cambio el username");
  }, [form.username]);

  return (
    <>
      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username va aqui"
          value={form.username}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password va aqui"
          value={form.password}
          onChange={handleChange}
          required
        />
      </form>
    </>
  );
}