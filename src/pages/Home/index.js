import "./styles.css";

const Home = ({ history }) => {
  return (
    <main className="container-home">
      <img src="https://yt3.ggpht.com/ytc/AAUvwni1DTPwHRZhEQzAw_bTw2aSgBVUW1SF8mo4b16p5w=s900-c-k-c0x00ffffff-no-rj" alt="Logo" />
      <div>
        <h1>Sobre Igor</h1>
        <p>
          Igor pratica violão a cinco anos, estudando repertórios desde violão clássico, finger-style, folk e contemporâneo.
        </p>
        <button onClick={() => history.push("/acoustic")}>
          Ver Performances
        </button>
      </div>
    </main>
  );
};

export default Home;
