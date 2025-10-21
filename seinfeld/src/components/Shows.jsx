import Show from "./Show";

const Shows = ({ shows }) => {
  return (
    <div>
      {shows.map((sh) => (
        <Show key={sh.id} season={sh} />
      ))}
    </div>
  );
};

export default Shows;
