import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';

import './main.css';
import 'antd/dist/antd.css';
// import "/node_modules/video-react/dist/video-react.css";

import OptionsPage from '../imports/ui/OptionsPage.jsx';
import HomePage from '../imports/ui/HomePage.jsx';
import BanderSnatch from '../imports/ui/BanderSnatch.jsx';
import PublicLayout from '../imports/layout/PublicLayout.jsx';
import Game from '../imports/ui/Game';




FlowRouter.route('/', {
  action: function (params, queryParams) {
    mount(PublicLayout, {
      content: <HomePage />
    });
  }
});

FlowRouter.route('/game', {
  action: function (params, queryParams) {
    mount(PublicLayout, {
      content: <Game />
    });
  }
});

FlowRouter.route('/game/:scenario', {
  action: function (params, queryParams) {
    mount(PublicLayout, {
      content: <BanderSnatch />
    });
  }
});


