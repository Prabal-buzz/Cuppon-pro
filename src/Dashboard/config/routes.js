import Dashboard from "../pages/Dashboard";
import Company from "../pages/Company";
import Coupon from "../pages/Coupon";
import Billing from "../pages/Billing";
import Create from "../pages/Billing/Create";
import Details from "../pages/Billing/Details";
import Items from "../pages/Items";
import CreateItem from "../pages/Items/components/Create";
import EditItem from "../pages/Items/components/Edit";
import Orders from "../pages/Orders";

export default [
  {
    name: "dashboard",
    path: "/",
    component: Dashboard,
  },
  {
    name: "coupons",
    path: "/coupons",
    component: Coupon,
  },
  {
    name: "billing",
    path: "/billing",
    component: Billing,
  },
  {
    name: "create",
    path: "/billing/create",
    component: Create,
  },
  {  
    name: "details",
    path: "/billing/details",
    component: Details,
  },
  {
    name: "company",
    path: "/company",
    component: Company, 
  },
  {
    name: "profile",
    path: "/profile",
    component: Company, 
  },
  {
    name: "role",
    path: "/role",
    component: Company, 
  },
  {
    name: "qr",
    path: "/qr",
    component: Company, 
  },
  {
    name: "user-profile",
    path: "/user/:id",
    component: Company, 
  },
  {
    name: "coupons",
    path: "/coupons",
    component: Coupon,
  },
  {
    name: "items",
    path: "/items",
    component: Items,
  },
  {
    name: "create items",
    path: "/items/create",
    component: CreateItem,
  },
  {
    name: "update items",
    path: "/items/update/:id",
    component: EditItem,
  },
  {
    name: "orders",
    path: "/orders",
    component: Orders,
  },
];
