import React from 'react';
import { Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'; 
import '../index.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import LOGO from '../assets/images/logo.png';

import Home from '../pages/Home';
import WorkPlace from '../pages/Worker';
import Business from '../pages/Business';
import Task from '../pages/Task';
import Finance from '../pages/Finance';
import Data from '../pages/Data';

const { Header, Content, Footer } = Layout;

class BasicLayout extends React.Component {
    // state = {
    //     selectedKey: '1'
    // }

    // handleSelect = ({ key }) => {
    //     this.setState({
    //         selectedKey: key
    //     })
    // }

    render() {
        // const { selectedKey } = this.state;
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo">
                            <img src={LOGO} />
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            // defaultSelectedKeys={this.state.selectedKey}
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px', marginLeft:'4%'}}
                            // onSelect={this.handleSelect}
                        >
                            <Menu.Item key="1"><Link to='/'>系统</Link></Menu.Item>
                            <Menu.Item key="2"><Link to='/workplace/'>工作台</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/business/'>商机</Link></Menu.Item>
                            <Menu.Item key="4"><Link to='/task/'>任务单</Link></Menu.Item>
                            <Menu.Item key="5"><Link to='/finance/'>财务</Link></Menu.Item>
                            <Menu.Item key="6"><Link to='/data/'>数据</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>系统设置</Breadcrumb.Item>
                            <Breadcrumb.Item>角色管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div>
                            <Route path='/' exact component={Home}/>
                            <Route path='/workplace/'  component={WorkPlace}/>
                            <Route path='/business/'  component={Business}/>
                            <Route path='/task/'  component={Task}/>
                            <Route path='/finance/'  component={Finance}/>
                            <Route path='/data/'  component={Data}/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>优麦后台 ©2019 Created by Mr.z</Footer>
                </Layout>
        </div>
        )
    }
}

export default BasicLayout;