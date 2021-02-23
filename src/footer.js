import React, { createElement, Component } from 'react';

class Footer extends Component {
  render() {
    return(
      createElement('footer', { className: 'footer' },
        createElement('span', null, <em>All rights reserved <i className="far fa-copyright"></i> </em>))
    );
  }
}

export default Footer;
