const Card = (props) => {
  const url = `https://ygoprodeck.com/pics/${props.id}.jpg`;

  return (
    <div className="three columns">
      <img className="card" alt="alt" src={url} />
    </div>
  );
};

export default Card;
