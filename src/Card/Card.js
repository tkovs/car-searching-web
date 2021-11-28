const Card = (props) => {
  const url = `https://raw.githubusercontent.com/Perham94/YGOAnimeMangaHQPics/master/${100000000 + props.id}.png`;

  return (
    <div className="three columns">
      <img className="card" alt="alt" src={url} />
    </div>
  );
};

export default Card;
