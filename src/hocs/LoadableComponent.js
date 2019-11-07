import React from 'react';
import Loadable from 'react-loadable';

//通用的过场组件
const loadingComponent =()=>{
  return (
      <div>loading</div>
  ) 
}

const LoadableComponent = component => {
  return Loadable({
    loader: component,
    loading: loadingComponent,
    delay: 300
  })
}

export default LoadableComponent
