import { Results } from "./pages/results.jsx";
import Questionnaire from "./pages/questionnaire.jsx";
import { CarDetails } from "./cmps/results/car-details.jsx";
import { CarEditor } from "./cmps/admin/edit/car-editor.jsx";
import { AdminDashboard } from "./pages/admin-dashboard.jsx";

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
    path: "/admin",
    component: AdminDashboard,
  },
  {
    path: "/edit/:carId",
    component: CarEditor,
  },
];
