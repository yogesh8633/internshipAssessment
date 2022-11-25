import { useRoutes } from "react-router-dom";
/**
 * CarGrid
 */
import CarGrid from '../components/car-grid';
/**
 * RentCar
 */
import RentACar from '../components/rent-car';

const Router = () => {
  const routes = useRoutes([
    {
      path: "/car-layout",
      element: <CarGrid />,
    },
    {
      path: "/rent-a-car",
      element: <RentACar />,
    },
    {
      path: "*",
      element: <CarGrid />,
    },
  ]);

  return routes;
};

export default Router;
