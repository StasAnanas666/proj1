import Card from "./Card";

function CardCollection(props) {
    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {props.arr.map((item) => (
                <Card image={item.image} title={item.title} text={item.text} />
            ))}
        </div>
    );
}

export default CardCollection;
