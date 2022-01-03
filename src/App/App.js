import Card from '../Card'
import '../styles.css'
import { useState } from 'react'

const generateCardList = () => {
  const base = [
    46986414, 89631139, 55144522, 83764719, 48372950, 51786039, 97316367,
    49094491, 66290900, 86962245, 81344637, 79905468, 87871125, 52945066,
    93084621, 44163252, 52097679, 40619741, 33655493, 44046281, 36361633,
    43096270, 88975532, 79852326, 77622396, 10000020, 37576645, 10000010,
    10000000, 70781052, 15025844, 4031928, 80666118, 42941100,
  ]

  base.sort(() => 0.5 - Math.random())
  const cardlist = [...base.slice(0, 8), ...base.slice(0, 8)]

  return cardlist.sort(() => 0.5 - Math.random())
}

const App = () => {
  const [cardlist, setCardlist] = useState(generateCardList())

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
  )
}

export default App
