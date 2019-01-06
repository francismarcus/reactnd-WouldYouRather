import React, {Component, Fragment} from 'react';
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared"

import {isEmpty} from "../utils/helpers";