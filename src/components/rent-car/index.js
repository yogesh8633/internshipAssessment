import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  InputGroup,
  Label,
  Row,
  InputGroupText,
} from "reactstrap";
import useRentCar from "./use-rent-car";
import { FIELDS } from "./utils/constants";

const RentACar = () => {
  const { register, handleSubmit, onSubmit, errors } = useRentCar();

  return (
    <Container className="border p-2 bg-white mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="text-center">WELCOME TO AUTO WORLD</h4>
        <h4 className="text-center mb-4">RENT A CAR</h4>
        <Row className="justify-content-center mt-5">
          {FIELDS.map((item) => (
            <Col md={4} className="mx-2" key={item.id}>
              <Label>
                {item.label}
                {item.required && <span className="text-danger">*</span>}
              </Label>
              <InputGroup>
                {item.append && (
                  <InputGroupText>
                    <i className={`fa fa-${item.append}`} />
                  </InputGroupText>
                )}
                <input
                  type={item.type}
                  name={item.key}
                  className="form-control"
                  id={item.key}
                  invalid={errors[item.key]}
                  {...register(item.key, { required: item.required, min: 1 })}
                />
                {item.prepend && (
                  <InputGroupText>
                    <i className={`fa fa-${item.prepend}`} />
                  </InputGroupText>
                )}
              </InputGroup>
              {errors[item.key]?.type === "required" && (
                <span className="text-danger">This field is required</span>
              )}
              {errors[item.key]?.type === "min"  && (
                <span className="text-danger">Value should be greater than 1</span>
              )}
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-end my-5">
          <Button type="submit" className="me-2 bg-primary border-0">
            Rent A Car
          </Button>
          <Link to="/car-layout" type="submit" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </Container>
  );
};
export default RentACar;
