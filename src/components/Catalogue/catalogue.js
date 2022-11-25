import { Col, Row } from "reactstrap";
import img from "../../assets/ford.jpg";
import "../Catalogue/catalogue.css";
const Catalogue = () => {
  const data = [
    {
      datePosted: "yesterday",
      carName: "Ford Explorer",
      //   carImg: { img },
      milege: 49000,
      location: "Delhi",
    },
    {
      datePosted: "today",
      carName: "Honda",
      //   carImg: { img },
      milege: 49000,
      location: "Mumbai",
    },
    {
      datePosted: "Monday",
      carName: "Hyundai",
      //   carImg: { img },
      milege: 42110,
      location: "Lucknow",
    },
  ];

  const product = data.map((element) => {
    return (
        <Row className="">
        <Col className="products" >
          <div class="card-body">
              <h6 className="card-title">{element.datePosted}</h6>
            <h5 class="card-title">{element.carName}</h5>
            <img class="card-img-top car-img" src="https://www.cnet.com/a/img/resize/66bfcd0063aa957ff51f41ee65ad596973e58045/hub/2022/04/18/41ef8b2c-5eaa-4208-abe3-37a492de43c5/ogi1-2022-ford-explorer-timberline-001.jpg?auto=webp&fit=crop&height=675&width=1200" alt="Card image cap" />
            <p class="card-text">
              <h6>Car Milege:{element.milege}</h6>
              <h6>Location:{element.location}</h6>
              <h6>Engine:</h6>
              <h6>Transmission:</h6>
            </p>
            <div className="card-footer">
            <h3>$70000</h3>
            <a href="#" class="card-button">
             More Details
            </a>
            </div>
          </div>
        </Col>
        </Row>
    );
  });

  return (
   <div>{product}
      {/* <Col class="products" >
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Col>  */}
      {/* <Col class="card" >
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Col> */}
 </div>
  );
};
export default Catalogue;
