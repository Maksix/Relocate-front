import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import './Header.less';

const Header: React.FC = () => (
  <header>
    <nav>
      <Menu mode="horizontal">
        <Menu.Item key="logo" icon={<Link to="/"><Logo /></Link>} />
        <Menu.Item key="rent">
          <Link to="/accommodation">
            Снять
          </Link>
        </Menu.Item>
        <Menu.Item key="login">
          Войти
        </Menu.Item>
        <Menu.Item key="place">
          <Link to="/">
            Разместить объявление
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  </header>
);

export default Header;
