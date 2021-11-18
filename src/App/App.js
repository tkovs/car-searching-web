import Card from "../Card";
import "../styles.css";

const App = () => {
  
  const cardlist = ["100000010",
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
  "100000021"];

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
          <Card id={cardlist[7]} />
          <Card id={cardlist[6]} />
          <Card id={cardlist[5]} />
          <Card id={cardlist[4]} />
        </div>
        <div className="row">
          <Card id={cardlist[3]} />
          <Card id={cardlist[2]} />
          <Card id={cardlist[1]} />
          <Card id={cardlist[0]} />
        </div>
      </div>
    </div>
  )
};

export default App;
