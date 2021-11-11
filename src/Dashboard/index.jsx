import { GetListReducer, BillSaga } from './pages/Billing/List/store';
import {
  SaveBillReducer,
  UpdateBillReducer,
  SaveBillSaga,
} from './pages/Billing/Details/store';
import {
  BillUserDetailReducer,
  CreateBillReducer,
  SalesItemReducer,
  VerifyBillReducer,
  ProductListingReducer,
  CreateBillSaga,
} from './pages/Billing/Create/store';
import { QRReducer, QRSaga } from './pages/Company/Qr/store';
import { ItemsReducer, ItemsSaga } from './pages/Items/store';
import {
  CompanyGetInfoReducer,
  CompanySaveInfoReducer,
  CompanyGetInputReducer,
  CompanySaveInputReducer,
  CompanyUpdateInputReducer,
  CompanyGetSocialReducer,
  CompanySaveSocialReducer,
  CompanyUpdateSocialReducer,
  CompanyInfoSaga,
} from './pages/Company/CompanyInfo/store';
import {
  CompanySaveProfileReducer,
  CompanyGetUserReducer,
  CompanyUpdatePictureReducer,
  MyProfileSaga,
} from './pages/Company/MyProfile/store';
import {
  AddUserReducer,
  GetAllUser,
  RoleGetListReducer,
  RoleSaveUserReducer,
  UserRoleSaga,
} from './pages/Company/UserRole/store';
import { CouponReducer, CouponSaga } from './pages/Coupon/store';
import { OrdersReducer, OrdersSaga } from './pages/Orders/store';
import { DashboardReducer, DashboardSaga } from './pages/Dashboard/store';

export const dashboardReducer = {
  companyGetInfo: CompanyGetInfoReducer,
  companySaveInfo: CompanySaveInfoReducer,
  companyGetInput: CompanyGetInputReducer,
  companySaveInput: CompanySaveInputReducer,
  companyUpdateInput: CompanyUpdateInputReducer,
  companyGetSocial: CompanyGetSocialReducer,
  companySaveSocial: CompanySaveSocialReducer,
  companyUpdateSocial: CompanyUpdateSocialReducer,
  companySaveProfile: CompanySaveProfileReducer,
  companyUpdatePicture: CompanyUpdatePictureReducer,
  companyGetUser: CompanyGetUserReducer,
  AddUser: AddUserReducer,
  getAllUser: GetAllUser,
  roleGetList: RoleGetListReducer,
  roleSaveUser: RoleSaveUserReducer,
  getBillList: GetListReducer,
  BillUserDetail: BillUserDetailReducer,
  ProductListing: ProductListingReducer,
  CreateBill: CreateBillReducer,
  SalesItem: SalesItemReducer,
  VerifyBill: VerifyBillReducer,
  SaveBill: SaveBillReducer,
  UpdateBill: UpdateBillReducer,
  coupons: CouponReducer,
  qrs: QRReducer,
  items: ItemsReducer,
  orders: OrdersReducer,
  dashboard: DashboardReducer,
};

export const dashboardSaga = [
  DashboardSaga(),
  CompanyInfoSaga(),
  MyProfileSaga(),
  UserRoleSaga(),
  CouponSaga(),
  BillSaga(),
  CreateBillSaga(),
  SaveBillSaga(),
  QRSaga(),
  ItemsSaga(),
  OrdersSaga(),
];

export { default as dashboardRoutes } from './config/routes';
