import React from 'react';

import './footerStyles.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <div className="footer">
      Copyright © {year}. Created by Karolina Wrona. All rights reserved.
    </div>
  )
}

export default Footer;