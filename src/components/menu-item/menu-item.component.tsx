import React from 'react';

import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
// import {Directory} from "../../redux/directory/directory.reducer";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match}: any) => (
  <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
