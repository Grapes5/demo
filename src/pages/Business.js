import React from "react";
import {  Route, Link  } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Business1 from './Business/business1';
import Business2 from './Business/business2';

const { Content, Sider } = Layout;

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
                        <Menu.Item key="1"><Link to='/business/page_b1/'>大商机</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/business/page_b2/'>小商机</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
                    <Route path='/business/page_b1/'  component={Business1}/>
                    <Route path='/business/page_b2/'  component={Business2}/>
                </Content>
            </Layout>
    )
}

export default Worker;