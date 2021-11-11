import React, { Component } from 'react';
import {
  BusinessOutlined,
  HomeOutlined,
  FeaturedPlayListOutlined,
  ConfirmationNumberOutlined,
  ViewStreamOutlined,
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import Drawer from '../../components/Drawer';
import { AuthContext } from '../../auth';

class DashboardLayout extends Component {
  handleProfileClick = (e) => {
    this.props.history.push('/profile');
  };

  handleLogoutClick = () => {
    this.context.logoutUser();
  };

  getMenuItems = () => {
    const { currentUser } = this.context;
    const permitted = currentUser.company && currentUser.company.length > 0;

    return [
      {
        path: '/',
        key: 'home',
        text: 'Dashboard',
        permitted: true,
        icon: <HomeOutlined />,
      },
      {
        path: '/coupons',
        key: 'coupons',
        text: 'Coupons',
        permitted,
        icon: <ConfirmationNumberOutlined />,
      },
      {
        path: '/billing',
        key: 'billing',
        text: 'Billing',
        permitted,
        icon: <FeaturedPlayListOutlined />,
      },
      {
        path: '/company',
        key: 'company',
        text: 'Company',
        permitted: true,
        icon: <BusinessOutlined />,
      },
      {
        path: '/items',
        key: 'items',
        text: 'Items',
        permitted: true,
        icon: <ConfirmationNumberOutlined />,
      },
      {
        path: '/orders',
        key: 'orders',
        text: 'Orders',
        permitted,
        icon: <ViewStreamOutlined />,
      },
    ];
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Drawer
          menus={this.getMenuItems()}
          handleProfileClick={this.handleProfileClick}
          handleLogoutClick={this.handleLogoutClick}
        >
          {children}
        </Drawer>
      </div>
    );
  }
}

DashboardLayout.contextType = AuthContext;

export default withRouter(DashboardLayout);
