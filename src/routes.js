import { Results } from "./pages/results.jsx";
import Questionnaire from "./pages/questionnaire.jsx";
import { CarDetails } from "./cmps/results/car-details.jsx";

export default [
  {
    path: "/",
    component: Questionnaire,
  },
  {
    path: "/results",
    component: Results,
  },
  {
    path: "/results/:carId",
    component: CarDetails,
  },
];
