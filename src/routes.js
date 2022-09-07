import { Results } from "./pages/results.jsx";
import Questionnaire from "./pages/questionnaire.jsx";
import { CarDetails } from "./cmps/results/car-details.jsx";
import { CarEdit } from "./cmps/edit/car-edit.jsx";

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
    path: "/car/:carId",
    component: CarDetails,
  },
  {
    path: "/edit",
    component: CarEdit,
  },
  {
    path: "/edit/:carId",
    component: CarEdit,
  },
];
