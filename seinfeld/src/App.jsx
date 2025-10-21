import Shows from "./components/Shows";
const App = () => {
  const seinfeldSeasons = [
    {
      season: 1,
      episodes: [
        { id: 1, title: "The Seinfeld Chronicles (Pilot)", views: 15839273 },
        { id: 2, title: "The Stake Out", views: 18347520 },
        { id: 3, title: "The Robbery", views: 12708391 },
        { id: 4, title: "Male Unbonding", views: 21467215 },
        { id: 5, title: "The Stock Tip", views: 17659482 },
      ],
    },
    {
      season: 2,
      episodes: [
        { id: 6, title: "The Ex-Girlfriend", views: 19402831 },
        { id: 7, title: "The Pony Remark", views: 18264011 },
        { id: 8, title: "The Jacket", views: 20573918 },
        { id: 9, title: "The Phone Message", views: 18736422 },
        { id: 10, title: "The Apartment", views: 21405839 },
      ],
    },
    {
      season: 3,
      episodes: [
        { id: 11, title: "The Note", views: 22358172 },
        { id: 12, title: "The Truth", views: 21709356 },
        { id: 13, title: "The Pen", views: 23147920 },
        { id: 14, title: "The Dog", views: 20947531 },
        { id: 15, title: "The Library", views: 24019384 },
      ],
    },
    {
      season: 4,
      episodes: [
        { id: 16, title: "The Trip (Part 1)", views: 22837492 },
        { id: 17, title: "The Trip (Part 2)", views: 21905763 },
        { id: 18, title: "The Pitch", views: 23394218 },
        { id: 19, title: "The Ticket", views: 22638591 },
        { id: 20, title: "The Bubble Boy", views: 23871925 },
      ],
    },
  ];

  return (
    <div>
      <h3>Seinfeld Show</h3>
      <Shows shows={seinfeldSeasons} />
    </div>
  );
};

export default App;
