
function Home({ user, children }) {
  
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {children}
      </div>
    </div>
  );
}

export default Home;
