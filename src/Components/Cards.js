import Card from "./Card";

function Cards(props) {
  return (
    <div className="container">
      <div className="row">
        {props.produits.map((produit, index) => (
          <Card key={index} data={produit} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
