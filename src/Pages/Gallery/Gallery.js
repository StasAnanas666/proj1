import CardCollection from "./Components/CardCollection";
import image from "./Components/1.jpg";

function Gallery() {
    let arr = [
        {"image": image, "title": "Item #1", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae unde animi fugit nisi."},
        {"image": image, "title": "Item #2", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae unde animi fugit nisi."},
        {"image": image, "title": "Item #3", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae unde animi fugit nisi."},
        {"image": image, "title": "Item #4", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae unde animi fugit nisi."}
    ];

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
            <h2 className="mb-5">Галерея</h2>

            <CardCollection arr={arr} />
        </div>
    );
}

export default Gallery;
