const App = () => {
  const [users, setusers] = useState([
    { name: "vihsja;", age: 21 },
    { name: "Noone;", age: 1 },
    { name: "Bone;", age: 11 },
  ])
  const renderUser = users.map((use, ind) => {
    return <li key={ind}>{user.name}</li>
  })

  return (
    <div>
      <h1>Users</h1>
      <ol>{renderUser}</ol>
    </div>

  );
};
export default App;