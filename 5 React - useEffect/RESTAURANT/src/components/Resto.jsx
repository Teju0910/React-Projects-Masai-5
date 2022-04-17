export const Resto = ({ food }) => {
  return (
    <div>
      <div id="card">
        <img src={food.image} alt="" />
        <h3>{food.name}</h3>
        <p>{food.food}</p>
        <div id="p">
          <div className="a">
            <p>Starting at Rs.{food.prize}</p>
            <h4 id="rate">{food.rating}</h4>
          </div>
          <div className="a">
            <p>{food.votes} Votes</p>
            <p>{food.rivew} Rivew</p>
          </div>
        </div>
      </div>
    </div>
  );
};
