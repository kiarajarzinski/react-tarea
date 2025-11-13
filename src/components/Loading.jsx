export const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <div>
      <h1>Cargando...</h1>
    </div>
  );
};