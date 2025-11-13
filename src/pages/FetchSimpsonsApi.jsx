import { CharacterInfo } from "../components/CharacterInfo.jsx";
import { Loading } from "../components/Loading.jsx";
import { useCounter } from "../hooks/UseCounter.js";
import { useFetch } from "../hooks/useFetch.js";

export const FetchSimpsonsApi = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, loading, hasError } = useFetch(url);
  return (
    <div>
      {/* cargando */}
      <Loading loading={loading} />
      {/* error */}
      {hasError && <h2>Error al cargar los personajes: {hasError}</h2>}
      {/* mostrar los personajes */}
      {!loading && !hasError && <CharacterInfo data={data} />}

      {/* botones */}
      <button onClick={() => handleDecrement()} disabled={count === 1}>
        Anterior
      </button>
      <button onClick={() => handleIncrement()} disabled={loading}>
        Siguiente
      </button>
    </div>
  );
};