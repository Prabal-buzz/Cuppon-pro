import Login from '../pages/Login';
import OTPVerification from '../pages/OTPVerification';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';

export default [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/verify', component: OTPVerification },
  { path: '/forgot/password', component: ForgotPassword },
  { path: '/reset/password', component: ResetPassword }
];