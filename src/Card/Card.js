const Card = ({id , turn}) => {
  const url = `https://ygoprodeck.com/pics/${id.codImg}.jpg`;

  const back = 'https://images.ygoprodeck.com/images/cards/back_high.jpg'

  const status = id.turnStatus;

  return (
    <div className="three columns" onClick={() => turn(id.uuid)}>
      <img className="card" alt="alt" src={status ? url: back} />
    </div>
  );
};

export default Card;
