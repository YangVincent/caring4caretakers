import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Checkout from './Checkout';
import Home from './Home';
import Time from './Timeline';
import Stripe from './Stripe';

import 'rsuite/dist/styles/rsuite-default.css';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Home />
      <h1>Trial 0</h1>
      <h1>Trial 3</h1>
      <Time/>

	  // Payment stuff
	  <Stripe />
    </Container>
  );
}
