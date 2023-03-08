
function Home({ user, children }) {
  
  return (
    <div className="container-fluid">
      <div className="row ">
        {children}
      </div>
    </div>
  );
}

export default Home;
