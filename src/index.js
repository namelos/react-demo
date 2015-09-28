import React, { Component, render } from 'react';
import { Paper, Slider, Tabs, Tab, FlatButton } from 'material-ui';
import { Router, Route, Link } from 'react-router';
import reset from './utils/normalize';
import route from './route';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
    route
    ,
    document.getElementById('root')
);