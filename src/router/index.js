import { Fragment } from "react";
import DefaultLayout from "../components/Layout";
import NewLayout from "../components/Layout/NewLayout";
import Home from "../page/Home";
import Login from "../page/Login/index";
import LoginPage from "../page/Login/LoginPage";
import SignUpPage from "../page/Register/SignUpPage";
import Profile from "../components/Profile";
import Alert from "../page/Alert";
import Confirm from "../page/ResetPassword";
import Navbar from "../components/Navbar";
import DetailDish from "../page/DetailDishPage";
import AdminLayout from "../components/admin/Layout";
import ProductManagement from "../page/admin/ProductManagement";
import Cart from "../page/Cart";
import Payment from "../page/Payment";




const publicPath = [
//   { path: "/", component: Fragment ,layout: DefaultLayout },
  { path: "/login", component: LoginPage, layout: Fragment },
  { path: "/register" , component: SignUpPage, layout: Fragment},
];

// user details
const privatePath = [
  {path: '/reset-password', component: Confirm, layout: Fragment },
  {path: "/detail-dish/:dishId", component: DetailDish, layout: DefaultLayout},
  {path: "/alert", component: Alert, layout: Fragment},
  {path: "/", component: Home, layout: DefaultLayout },
  {path:"/detail-profile", component: Profile, layout: DefaultLayout },
  {path: "/cart", component: Cart, layout: DefaultLayout},
  {path: "/payment-confirmation", component: Payment, layout: DefaultLayout}
];

const adminPath = [
  {path: "/admin/order", component: Fragment, layout: DefaultLayout, subLayout: AdminLayout},
  {path: "/admin/product-management", component: ProductManagement, layout: DefaultLayout, subLayout: AdminLayout},
  {path: "/admin", component: Fragment, layout: DefaultLayout, subLayout: AdminLayout},
]
export { publicPath, privatePath, adminPath };
