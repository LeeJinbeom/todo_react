import React, { useEffect, useState } from 'react';
import 'App.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

import Empty from 'Empty';
import Favourite from 'pages/Favourite';
import FavouriteGroup from 'pages/Favouritegroup';
import Todo from 'pages/Todo';
import TodoGroup from 'pages/Todogroup';
import Login from 'account/Login';
import LoginContext from 'account/Util'

const { SubMenu } = Menu;


function App() {

  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(()=>{

    const token = window.localStorage.getItem("token")

    if (token!=null){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
    
  });

  const handleClick = e => {
    console.log('click ', e);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setIsLogin(false);
  }

  return (
    <>
    <LoginContext.Provider value={{isLogin, setIsLogin}}>
    <div id="menu">
    <Menu
        onClick={handleClick}
        style={{ width: 256, height: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>즐겨찾기</span>
            </span>
          }
        >
            <Menu.Item key="1">
              <Link to="/favouritegroup">그룹관리</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="favourite">즐겨찾기</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <SettingOutlined />
              <span>할일</span>
            </span>
          }
        >
          <Menu.Item key="3">            
              <Link to="/todogroup">그룹관리</Link>            
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/todo">할일</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
    <div id="content">
      <div>
        { isLogin ? 
          <div>
            <a onClick={logout}>로그아웃</a>
          </div> : 
          <div>
            <Link to="/login">로그인</Link>
          </div>
        }
      </div>
      <Switch>
        <Route exact path="/" component={Favourite}/>
        <Route path="/favourite" component={Favourite}/>
        <Route path="/favouritegroup" component={FavouriteGroup}/>                
        <Route path="/todo" component={Todo}/>
        <Route path="/todoGroup" component={TodoGroup}/>  
        <Route path="/Login" component={Login}/>       
      </Switch>
      <Route path="/" component={Empty}/>
    </div>
    </LoginContext.Provider>
    </>
  );
}

export default App;
