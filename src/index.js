import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AdminApp from './AdminApp';
import Main from './pages/user/main/Main';
import NotFound from './pages/NotFound';
import SignUp from './pages/user/SignUp';
import Login from './pages/user/login/Login';
import FindId from './pages/user/login/FindId';
import FindPw from './pages/user/login/FindPw';
import MyPage from './pages/user/mypage/MyPage';
import UserModify from './pages/user/mypage/UserModify';
import MyOrder from './pages/user/mypage/MyOrder';
import OrderDetail from './pages/user/mypage/OrderDetail';
import WishList from './pages/user/mypage/WishList';
import MyInquiryList from './pages/user/mypage/MyInquiryList';
import Cart from './pages/user/mypage/Cart';
import Inquiry from './pages/user/Inquiry';
import ProductDetail from './pages/user/shopping/ProductDetail';
import Shopping from './pages/user/shopping/Shopping';
import Payment from './pages/user/Payment';
import AdminLogin from './pages/admin/AdminLogin';
import CategoryManagement from './pages/admin/product/CategoryManagement';
import InquiryHistory from './pages/admin/inquiryhistory/InquiryHistory';
import PaymentHistory from './pages/admin/paymentHistory/PaymentHistory';
import Product from './pages/admin/Product';
import ProductAdd from './pages/admin/ProductAdd';
import ProductModify from './pages/admin/ProductModify';
import UserList from './pages/admin/userList/UserList';
import DeliveryStatus from './pages/user/mypage/DeliveryStatus';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/findid', element: <FindId /> },
      { path: '/findpw', element: <FindPw /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/mypage/usermodify', element: <UserModify /> },
      { path: '/mypage/order', element: <MyOrder /> },
      { path: '/mypage/order/detail/:orderNumber', element: <OrderDetail /> },
      {
        path: '/mypage/order/detail/deliverytatus/:orderNumber',
        element: <DeliveryStatus />,
      },
      { path: '/mypage/wishlist', element: <WishList /> },
      { path: '/mypage/myinquirylist', element: <MyInquiryList /> },
      { path: '/mypage/cart', element: <Cart /> },
      { path: '/inquiry', element: <Inquiry /> },
      { path: '/shopping', element: <Shopping /> },
      { path: '/shopping/detail/:productId', element: <ProductDetail /> },
      { path: '/payment', element: <Payment /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminApp />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <AdminLogin /> },
      { path: '/admin/management/userlist', element: <UserList /> },
      { path: '/admin/management/product', element: <Product /> },
      { path: '/admin/management/product/add', element: <ProductAdd /> },
      {
        path: '/admin/management/product/modify/:productId',
        element: <ProductModify />,
      },
      {
        path: '/admin/management/product/category',
        element: <CategoryManagement />,
      },
      { path: '/admin/management/paymenthistory', element: <PaymentHistory /> },
      { path: '/admin/management/inquiryhistory', element: <InquiryHistory /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
