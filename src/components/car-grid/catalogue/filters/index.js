import React, { Fragment, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import "./index.css";

const FilterMenu = () => {
  const [minValue, setMinValue] = useState(35000);
  const [maxValue, setMaxValue] = useState(55000);
  const [open, setOpen] = useState("2");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const CAR_COST = [
    {
      value: "possible_bargaining",
      label: "Possible Bargaining",
    },
    {
      value: "exchange_real_estate",
      label: "Exchange for real Estate",
    },
    {
      value: "car_exchange",
      label: "Car Exchange",
    },
  ];
  return (
    <Fragment>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            <i className="fa fa-user me-3" /> Basic Information
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <i className="fa-solid fa-dollar-sign me-3" />
            Car Cost
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <Row className="justify-content-between">
              <Col lg={6} className="ps-lg-0">
                <div className="bg-white p-1 rounded">
                  <p> Price from:</p>
                  <b>${minValue}</b>
                </div>
              </Col>
              <Col lg={6} className="pe-lg-0 mt-lg-0 mt-1">
                <div className="bg-white p-1 rounded">
                  <p> Price up to:</p>
                  <b>${maxValue}</b>
                </div>
              </Col>
              <MultiRangeSlider
                baseClassName="multi-range-slider"
                min={20000}
                minValue={minValue}
                max={70000}
                step={4000}
                maxValue={maxValue}
                onInput={(e) => {
                  setMinValue(e.minValue);
                  setMaxValue(e.maxValue);
                }}
              />
            </Row>
            {CAR_COST.map((item) => (
              <div className="bg-white p-1 my-1" key={item.value}>
                <Input type="checkbox" value={item.value} />{" "}
                <Label check>{item.label}</Label>
              </div>
            ))}
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            <i className="fa fa-map-marker me-3"></i>Search Region
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            <i className="fas fa-tools me-3"></i>Vehicle Condition
          </AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>This is the third item&#39;s accordion body.</strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            <i className="fa fa-cog me-3"></i>Add. Characteristics
          </AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>This is the third item&#39;s accordion body.</strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">
            <i className="fa-solid fa-palette me-3"></i>Color
          </AccordionHeader>
          <AccordionBody accordionId="6">
            <strong>This is the third item&#39;s accordion body.</strong>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      <div className="px-5 pt-5">
        <div className="d-flex align-items-center justify-content-start">
          <strong className="text-secondary me-2">Found Car:</strong>
          <strong>10231</strong>
        </div>
        <div className="d-flex justify-content-start mt-2">
          <button className="rounded-2 show-button border-0 bg-primary text-white me-3">
            Show
          </button>
          <button className="exit-button rounded-2 border-0 bg-light-primary text-primary">
            <i className="fa-solid fa-x" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterMenu;
