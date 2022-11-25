import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { CAR_DATA } from "../utils/constants";
import "./index.scss";

const Catalogue = () => {
  const product = CAR_DATA.map((item, index) => {
    return (
      <Col lg={4} className="my-2 p-1" key={index}>
        <Card>
          <CardHeader className=" border-0">
            <CardTitle>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex align-items-center">
                    <small>{item.postedOn},</small>
                    <small className="text-secondary">{item.postedTime}</small>
                  </div>
                  <b>{item.name}</b>
                </div>
                <button className="fav-button">
                  <i className="fa fa-star-o" />
                </button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <img
              className="card-img-top car-img"
              src={item.imgSrc}
              alt={item.name}
            />
            <Row className="mt-4">
              {Object.keys(item.details).map((key, index) => (
                <Col lg={6} className="d-flex p-0" key={index}>
                  <h6 className="text-secondary text-capitalize fs-6">
                    {key}:&nbsp;
                  </h6>
                  <small className="fw-bold">{item.details[key]}</small>
                </Col>
              ))}
            </Row>
          </CardBody>
          <CardFooter className="d-flex justify-content-between bg-white border-0">
            <strong>{item.amount}$</strong>
            <button className="mx-2 rounded-2 more-details border-0">
              More Details
            </button>
          </CardFooter>
        </Card>
      </Col>
    );
  });

  return <Row>{product}</Row>;
};
export default Catalogue;
