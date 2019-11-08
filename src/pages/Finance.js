import React from "react";
import {  Route, Link  } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Finance1 from './Finance/finance1';
import Finance2 from './Finance/finance2';

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
                        <Menu.Item key="1"><Link to='/finance/finance1/'>财务小哥</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/finance/finance2/'>财务小姐姐</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
                    <Route path='/finance/finance1/'  component={Finance1}/>
                    <Route path='/finance/finance2/'  component={Finance2}/>
                </Content>
            </Layout>
    )
}

export default Worker;