import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/layout/App';
import '../imports/ui/style/index.css';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
