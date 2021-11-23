import Card from "../Card";
import "../styles.css";

const App = () => {
  const cardlist = [
    "100000010",
    "100000011",
    "100000012",
    "100000013",
    "100000014",
    "100000015",
    "100000020",
    "100000021",
    "100000010",
    "100000011",
    "100000012",
    "100000013",
    "100000014",
    "100000015",
    "100000020",
    "100000021",
  ];


  const shuffled = handleSubmit();

  function handleSubmit() {

    const shuffledArray = cardlist.sort(() => 0.5 - Math.random());

    return shuffledArray
  };


  return (
    <div className="App">
      <div className="container">
        <h1 id="title">Jodo da Memoria</h1>
      </div>
      <div className="container">
        <div className="row">
          <Card id={shuffled[0]} />
          <Card id={shuffled[1]} />
          <Card id={shuffled[2]} />
          <Card id={shuffled[3]} />
        </div>
        <div className="row">
          <Card id={shuffled[4]} />
          <Card id={shuffled[5]} />
          <Card id={shuffled[6]} />
          <Card id={shuffled[7]} />
        </div>
        <div className="row">
          <Card id={shuffled[8]} />
          <Card id={shuffled[9]} />
          <Card id={shuffled[10]} />
          <Card id={shuffled[11]} />
        </div>
        <div className="row">
          <Card id={shuffled[12]} />
          <Card id={shuffled[13]} />
          <Card id={shuffled[14]} />
          <Card id={shuffled[15]} />
        </div>

        <button onClick={handleSubmit}>Shuffle</button>

      </div>
    </div>
  );
};

export default App;
