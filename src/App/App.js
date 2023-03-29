import Card from "../Card";
import "../styles.css";
import { useState } from 'react';

const generateCardList = () => {
  const base = [70903634, 7902349, 8124921, 44519536, 33396948, 46986414, 89631139, 55144522, 83764719, 48372950, 51786039, 97316367, 49094491, 66290900, 86962245, 81344637, 79905468, 87871125, 52945066, 93084621, 44163252, 52097679, 40619741, 33655493, 44046281, 36361633, 43096270, 88975532, 79852326, 77622396, 10000020, 37576645, 10000010, 10000000, 70781052, 15025844, 4031928, 80666118, 42941100]
  
  base.sort(() => 0.5 - Math.random())
  const cardlist = [...base.slice(0, 8), ...base.slice(0, 8)]

  cardlist.sort(() => 0.5 - Math.random());

  const list = [{uuid: 0, codImg: cardlist[0], turnStatus: false} ,{uuid: 1, codImg: cardlist[1],  turnStatus: false} ,{uuid: 2, codImg: cardlist[2],  turnStatus: false} ,{uuid: 3, codImg: cardlist[3],  turnStatus: false} ,{uuid: 4, codImg: cardlist[4],  turnStatus: false} ,{uuid: 5, codImg: cardlist[5],  turnStatus: false} ,{uuid: 6, codImg: cardlist[6],  turnStatus: false} ,{uuid: 7, codImg: cardlist[7],  turnStatus: false} ,{uuid: 8, codImg: cardlist[8],  turnStatus: false} ,{uuid: 9, codImg: cardlist[9],  turnStatus: false} ,{uuid: 10, codImg: cardlist[10], turnStatus: false} ,{uuid: 11, codImg: cardlist[11], turnStatus: false} ,{uuid: 12, codImg: cardlist[12], turnStatus: false} ,{uuid: 13, codImg: cardlist[13], turnStatus: false} ,{uuid: 14, codImg: cardlist[14], turnStatus: false} ,{uuid: 15, codImg: cardlist[15], turnStatus: false}]

  return list
}

var cardsOpened = 0
var card1 = ''
var indexcard1 = 0
var card2 = ''
var indexcard2 = 0
var trys = 0
var correct = 0

const App = () => {
  const [cardlist, setCardlist] = useState(generateCardList());
  
  const handleRestart = () => {
    setCardlist(generateCardList())
    trys = 0
    correct = 0
  }
 
  function turnCard (uuid) {
    if (cardsOpened <= 2) {
      setCardlist(cardlist.map((card, index) => { if (card.uuid === uuid && card.turnStatus === false) {
        card.turnStatus = !card.turnStatus;
        cardsOpened = cardsOpened + 1;

        if (cardsOpened === 1) {
            card1 = card.codImg;
            indexcard1 = index
        }
          
        if (cardsOpened === 2) {
            card2 = card.codImg;
            indexcard2 = index
            
            if (card1 !== card2) {
              
              setTimeout(() => {
                  cardlist[indexcard1].turnStatus = false;
                  cardlist[indexcard2].turnStatus = false;
                }, 1);
            }
              
            cardsOpened = 0
            trys = trys + 1

            if (card1 === card2) {
              correct = correct + 1
            }

        }
        
      } 
      return card}))
    }
    
    if (correct === 8){
      alert('Parabéns você concluiu o jogo!')
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 id="title">Jogo da Memória</h1>
      </div>
      <div className="container">
        <div className="row">
          <Card id={cardlist[0]} turn={turnCard} />
          <Card id={cardlist[1]} turn={turnCard} />
          <Card id={cardlist[2]} turn={turnCard} />
          <Card id={cardlist[3]} turn={turnCard} />
        </div>
        <div className="row">
          <Card id={cardlist[4]} turn={turnCard} />
          <Card id={cardlist[5]} turn={turnCard} />
          <Card id={cardlist[6]} turn={turnCard} />
          <Card id={cardlist[7]} turn={turnCard} />
        </div>
        <div className="row">
          <Card id={cardlist[8]} turn={turnCard} />
          <Card id={cardlist[9]} turn={turnCard} />
          <Card id={cardlist[10]} turn={turnCard} />
          <Card id={cardlist[11]} turn={turnCard} />
        </div>
        <div className="row">
          <Card id={cardlist[12]} turn={turnCard} />
          <Card id={cardlist[13]} turn={turnCard} />
          <Card id={cardlist[14]} turn={turnCard} />
          <Card id={cardlist[15]} turn={turnCard} />
        </div>

        <button onClick={handleRestart}>New Game</button>

      </div>
    </div>
  );
};

export default App;
