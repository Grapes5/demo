import React from "react";
import {  Route, Link  } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Java from './Data/java';
import JavaScript from './Data/javascript';

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
                        <Menu.Item key="1"><Link to='/data/java/'>万金油java</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/data/javascript/'>天下第一js</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
                    <Route path='/data/java/'  component={Java}/>
                    <Route path='/data/javascript/'  component={JavaScript}/>
                </Content>
            </Layout>
    )
}

export default Worker;