import FilterMenu from "./catalogue/filters";
import Catalogue from "./catalogue";
import { Row, Col, ButtonGroup } from "reactstrap";
import "./index.scss";
import { Link } from "react-router-dom";
const CarGrid = () => {
  return (
    <div className="grid-layout my-4 mx-0 mx-lg-5 justify-content-center">
      <Row className="border-bottom">
        <Col lg={4} sm={12} className="p-0 border-right">
          <b className="justify-content-center mb-3 py-2 w-100 d-flex">
            AUTO WORLD
          </b>
        </Col>
        <Col lg={8} sm={12} className="p-0">
          <Row className="h-100">
            <Col lg={7} className="border-right">
              <div className="form-group has-search d-flex align-items-center mt-2">
                <i className="fa fa-search text-secondary" aria-hidden="true"/>
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search"
                />
                <i className="fa fa-times text-primary cursor-pointer" aria-hidden="true"/>
              </div>
            </Col>
            <Col lg={5} className="d-flex justify-content-between">
              <ButtonGroup>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="mx-2 rounded-2 sell-car border-0 py-1">
                    SELL YOUR CAR
                  </button>
                  <Link to="/rent-a-car" className="mx-2 rounded-2 rent-car border-0 btn">
                    RENT CAR
                  </Link>
                </div>
              </ButtonGroup>
              <button className="menu-button mt-2">
              <i className="fa fa-bars" />
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={3} sm={6} className="border-right p-0">
          <FilterMenu />
        </Col>
        <Col lg={9} sm={6}>
          <Catalogue />
        </Col>
      </Row>
    </div>
  );
};

export default CarGrid;
