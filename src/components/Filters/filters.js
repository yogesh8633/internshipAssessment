import "../Filters/filters.css";

const FilterMenu = () => {
  return (
    <div>
      <div
        class="panel-group"
        id="accordion"
        role="tablist"
        aria-multiselectable="true"
      >
        <div class="panel panel-default filterItems">
          <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i class="fa fa-id-badge filterIcon" aria-hidden="true"></i>
                Basic Information
              </a>
            </h4>
          </div>
          <div
            id="collapseOne"
            class="panel-collapse collapse in"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div class="panel-body">
              Anim pariatur cliche reprehenderit, enim
            </div>
          </div>
        </div>
        <div class="panel panel-default filterItems">
          <div class="panel-heading" role="tab" id="headingTwo">
            <h4 class="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i class="fa fa-usd filterIcon" aria-hidden="true"></i>
                Car Cost
              </a>
            </h4>
          </div>
          <div
            id="collapseTwo"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div class="panel-body">
              Anim pariatur cliche reprehenderit, enim
            </div>
          </div>
        </div>
        <div class="panel panel-default filterItems">
          <div class="panel-heading" role="tab" id="headingThree">
            <h4 class="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i class="fa fa-map-marker filterIcon" aria-hidden="true"></i>
                Search Region
              </a>
            </h4>
          </div>
          <div
            id="collapseThree"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingThree"
          >
            <div class="panel-body">
              Anim pariatur cliche reprehenderit, enim
            </div>
          </div>
        </div>
        <div class="panel panel-default filterItems">
          <div class="panel-heading" role="tab" id="headingFour">
            <h4 class="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <i class="fas fa-tools filterIcon" aria-hidden="true"></i>
                Vehicle Condition
              </a>
            </h4>
          </div>
          <div
            id="collapseFour"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingFour"
          >
            <div class="panel-body">
              Anim pariatur cliche reprehenderit, enim
            </div>
          </div>
        </div>
        <div class="panel panel-default filterItems">
          <div class="panel-heading" role="tab" id="headingFive">
            <h4 class="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <i class="fa fa-cog filterIcon" aria-hidden="true"></i>
                Add. Characteristics
              </a>
            </h4>
          </div>
          <div
            id="collapseFive"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingFive"
          >
            <div class="panel-body">
              Anim pariatur cliche reprehenderit, enim
            </div>
          </div>
        </div>
        <div class="panel panel-default filterItems">
          <div class="panel-heading" role="tab" id="headingSix">
            <h4 class="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <i class="fa-solid fa-palette filterIcon" aria-hidden="true"></i>
                Color
              </a>
            </h4>
          </div>
          <div
            id="collapseSix"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingSix"
          >
            <div class="panel-body">
              Anim pariatur cliche reprehenderit, enim
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
