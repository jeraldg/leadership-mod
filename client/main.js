import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';

import './css/sidebar.css';
import './css/main.css';
import './css/bandersnatch-timer-bar.css';
import 'antd/dist/antd.css';
// import "/node_modules/video-react/dist/video-react.css";

import CaseStudies from '../imports/ui/CaseStudies.jsx';
import BanderSnatch from '../imports/ui/BanderSnatch.jsx';
import PublicLayout from '../imports/layout/PublicLayout.jsx';
import Game from '../imports/ui/Game';




// FlowRouter.route('/', {
//   action: function (params, queryParams) {
//     mount(PublicLayout, {
//       content: <HomePage />
//     });
//   }
// });

FlowRouter.route('/', {
  action: function (params, queryParams) {
    mount(PublicLayout, {
      content: <Game />
    });
  }
});

FlowRouter.route('/pre-game', {
  action: function (params, queryParams) {
    mount(PublicLayout, {
      content: <CaseStudies />
    });
  }
});

FlowRouter.route('/:scenario', {
  action: function (params, queryParams) {
    mount(PublicLayout, {
      content: <BanderSnatch />
    });
  }
});


