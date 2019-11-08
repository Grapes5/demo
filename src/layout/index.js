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
// import index from '../pages/System';

const { Header, Content, Footer } = Layout;

let configRouter = [
    {path:'/', title:'系统', exact: true, component: Home},
    {path:'/workplace/', title:'工作台', exact: false, component: WorkPlace},
    {path:'/business/', title:'商机', exact: false, component: Business},
    {path:'/task/', title:'任务单', exact: false, component: Task},
    {path:'/finance/', title:'财务', exact: false, component: Finance},
    {path:'/data/', title:'数据', exact: false, component: Data},
];

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
                            defaultSelectedKeys={['0']}
                            style={{ lineHeight: '64px', marginLeft:'4%'}}
                            // onSelect={this.handleSelect}
                        >
                            {
                                configRouter && configRouter.map((item, index) => {
                                    return(
                                        <Menu.Item key={index}><Link to={item.path}>{item.title}</Link></Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>系统设置</Breadcrumb.Item>
                            <Breadcrumb.Item>角色管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div>
                            {
                                configRouter && configRouter.map((val, indexRouter) => {
                                    return (
                                        <Route key={indexRouter} path={val.path} exact={val.exact} component={val.component}/>
                                    )
                                })
                            }
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>优麦后台 ©2019 Created by Mr.z</Footer>
                </Layout>
            </div>
        )
    }
}

export default BasicLayout;