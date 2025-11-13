import { useState } from 'react'
import { Login } from "../components/Login.jsx";
import { Register } from "../components/Registro.jsx";
import { FirstApp } from "../components/FirstApp.jsx";


export function App() {
  //estado para mostrar una u otra tarea
  const [showTask, setShowTask] = useState(''); 
  //estado para el usuario logeado
  const [user, setUser] = useState("");

    const handleLogin = (username) => {
    setUser(username);
  };
  const handleLogout = () => {
    setUser("");
  };

  return (
        <div className="App">
      <div className="Bienvenida">
        <h1>Bienvenido</h1>
        <button onClick={() => setShowTask("task1")}>Tarea 1</button>
        <button onClick={() => setShowTask("task2")}>Tarea 2</button>
        </div>

       {showTask === "task1" ?<FirstApp /> : ""}

      {showTask === "task2" ? (
        <div>
          <h1>tarea2</h1>
          {user ? (
            // si se logeo
            <div>
              <h2>Hola de nuevo {user}</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            // si no se logeo
            <>
              <Login onLogin={handleLogin} />
              <Register />
            </>
          )}
        </div>
      ) : (
        <h1> </h1>
      )}

    </div>
  );
}