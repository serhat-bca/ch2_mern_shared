const Show = ({ season }) => {
  return (
    <div>
      <h4>{season.title}</h4>
      <ul>
        {season.episodes.map((m) => (
          <li key={m.id}>
            {m.title} - Views: {m.views.toLocaleString()}
          </li>
        ))}
      </ul>
      <p>
        <strong>
          Total views of the season:
          {season.episodes
            .reduce((sum, nextEp) => sum + nextEp.views, 0)
            .toLocaleString()}
        </strong>
      </p>
    </div>
  );
};

export default Show;
