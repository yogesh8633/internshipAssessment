import "../../src/components/grid.css";
import FilterMenu from "./Filters/filters";
import MenuButton from "./UI/menuButton";
import Catalogue from "./Catalogue/catalogue";
import { Row } from "reactstrap";
const Grid = () => {
  return (
    <div className="container main m-7">
      <Row className="header-row">
        <div className="col-md-4 logo">AUTO WORLD</div>
        <div className="col-md-4 searchBar">
          <div class="form-group has-search">
          <i class="fa fa-search search-icon" aria-hidden="true">  </i>
          <input type="text" class="form-control" placeholder="Search" />
        
          </div>
        </div>
        <div className="col-md-4 buttonCol">
          <button type="button" class="sellCarButton">
            SELL YOUR CAR
          </button>
          <button type="button" class="rentCarButton">
            RENT YOUR CAR
          </button>
          {/* <MenuButton/> */}
        </div>
      </Row>
      <div className="row">
        <div className="col-md-4 p-0">
          <FilterMenu />
        </div>
        <div className="col-md-8">
          <Catalogue />
        </div>
      </div>
    </div>
  );
};

export default Grid;
