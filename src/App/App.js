import Card from "../Card";
import "../styles.css";

const generateCardList = () => {
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
  return cardlist.sort(() => 0.5 - Math.random());
}

const App = () => {

  const cardlist = generateCardList();

  return (
    <div className="App">
      <div className="container">
        <h1 id="title">Jodo da Memoria</h1>
      </div>
      <div className="container">
        <div className="row">
          <Card id={cardlist[0]} />
          <Card id={cardlist[1]} />
          <Card id={cardlist[2]} />
          <Card id={cardlist[3]} />
        </div>
        <div className="row">
          <Card id={cardlist[4]} />
          <Card id={cardlist[5]} />
          <Card id={cardlist[6]} />
          <Card id={cardlist[7]} />
        </div>
        <div className="row">
          <Card id={cardlist[8]} />
          <Card id={cardlist[9]} />
          <Card id={cardlist[10]} />
          <Card id={cardlist[11]} />
        </div>
        <div className="row">
          <Card id={cardlist[12]} />
          <Card id={cardlist[13]} />
          <Card id={cardlist[14]} />
          <Card id={cardlist[15]} />
        </div>

        <button onClick={generateCardList}>Shuffle</button>

      </div>
    </div>
  );
};

export default App;
