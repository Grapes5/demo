import React from 'react';
import { Route, Link  } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Task1 from './Task/task1';
import Task2 from './Task/task2';
import Task3 from './Task/task3';

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
                       <Menu.Item key="1"><Link to='/task/task1/'>任务一</Link></Menu.Item>
                       <Menu.Item key="2"><Link to='/task/task2/'>任务二</Link></Menu.Item>
                       <Menu.Item key="3"><Link to='/task/task3/'>任务三</Link></Menu.Item>
                   </Menu>
               </Sider>
               <Content style={{ padding: '0 24px', minHeight: '75vh' }}>
                   <Route path='/task/task1/' component={Task1}/>
                   <Route path='/task/task2/' component={Task2}/>
                   <Route path='/task/task3/' component={Task3}/>
               </Content>
           </Layout>
       )
   }

export default Home