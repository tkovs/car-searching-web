import Card from "../Card";
import "../styles.css";

const App = () => {
  
  const cardlist = ["https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000010.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000011.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000012.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000013.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000014.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000015.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000020.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000021.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000010.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000011.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000012.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000013.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000014.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000015.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000020.png",
  "https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/100000021.png"];

  return (
    <div className="App">
      <div className="container">
        <h1 id="title">Jodo da Memoria</h1>
      </div>
      <div className="container">
        <div className="row">
          <Card src={cardlist[0]} />
          <Card src={cardlist[1]} />
          <Card src={cardlist[2]} />
          <Card src={cardlist[3]} />
        </div>
        <div className="row">
          <Card src={cardlist[4]} />
          <Card src={cardlist[5]} />
          <Card src={cardlist[6]} />
          <Card src={cardlist[7]} />
        </div>
        <div className="row">
          <Card src={cardlist[7]} />
          <Card src={cardlist[6]} />
          <Card src={cardlist[5]} />
          <Card src={cardlist[4]} />
        </div>
        <div className="row">
          <Card src={cardlist[3]} />
          <Card src={cardlist[2]} />
          <Card src={cardlist[1]} />
          <Card src={cardlist[0]} />
        </div>
      </div>
    </div>
  )
};

export default App;
