import Card from "../Card";
import "../styles.css";
import { useState } from 'react';

const generateCardList = () => {
  const cardlist = [];

  while (cardlist.length < 15) {

    var max = 95;
    var min = 79;

    const selectNum = Math.floor(Math.random() * (max - min)) + min;

    if (!(cardlist.includes(selectNum.toString()))) {

      cardlist.push(selectNum.toString());
      cardlist.push(selectNum.toString());
    }
  }

  return cardlist.sort(() => 0.5 - Math.random());
}

const App = () => {
  const [cardlist, setCardlist] = useState(generateCardList());

  const handleRestart = () => {
    setCardlist(generateCardList())
  }

  return (
    <div className="App">
      <div className="container">
        <h1 id="title">Jogo da Memória</h1>
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

        <button onClick={handleRestart}>Shuffle</button>

      </div>
    </div>
  );
};

export default App;
