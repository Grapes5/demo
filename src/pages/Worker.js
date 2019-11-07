import React from "react";
import {  Route, Link  } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Work1 from './WorkPlace/work1';
import Work2 from './WorkPlace/work2';

const { Header, Content, Footer, Sider } = Layout;

function Worker() {
    return (
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1"><Link to='/workplace/work1/'>工作台一</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/workplace/work2/'>工作台二</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
                    <Route path='/workplace/work1/'  component={Work1}/>
                    <Route path='/workplace/work2/'  component={Work2}/>
                </Content>
            </Layout>
    )
}

export default Worker;