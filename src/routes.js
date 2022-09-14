import { Results } from "./pages/results.jsx";
import Questionnaire from "./pages/questionnaire.jsx";
import { CarDetails } from "./cmps/results/car-details.jsx";
import { AdminDashboard } from "./pages/admin-dashboard.jsx";
import { CarEditor } from "./cmps/admin/edit/car-editor.jsx";

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
    routes: [
      { path: 'notifications', component: AdminDashboard },
      { path: 'quick-look', component: AdminDashboard },
      { path: 'edit', component: CarEditor },
      { path: 'edit/:carId', component: CarEditor },
      { path: 'statistics', component: AdminDashboard },
      { path: 'leads', component: AdminDashboard }
    ]
  },
];
