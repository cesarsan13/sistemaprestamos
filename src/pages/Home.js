function Home({logout}) {
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={(evt)=>logout(evt)}></button>
    </div>
  );
}

export default Home;
