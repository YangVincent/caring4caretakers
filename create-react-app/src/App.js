import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Checkout from './Checkout';
import Home from './Home';
import Time from './Timeline';
import Stripe from './Stripe';
import SheerID from './SheerID.js';

import 'rsuite/dist/styles/rsuite-default.css';


export default function App() {
  return (
    <Container maxWidth="lg">
	  <Home />

	  // Healthcare Verification
	  <SheerID/>
	  <Time/>

	  // Payment stuff
	  <Stripe />
    </Container>
  );
}
