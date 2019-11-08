/**
 * 首页
 */

 import React from 'react';
 import { Route, Link  } from "react-router-dom";
 import FirstPage from './System';
 import { Layout, Menu } from 'antd';

 const { Content, Sider } = Layout;

    function Home() {
        return(
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1"><Link to='/'>系统一</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
                    <Route path='/' component={FirstPage}/>
                </Content>
            </Layout>
        )
    }

export default Home