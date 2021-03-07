import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

class startApp extends Component {

  render() {
    return (
      <Container>
        <Box my={4}>
          <h1 className="bake-breads">
            Select your type of Breads to be baked.
          </h1>
          <p>component for bread array selection goes here for today's bread list...</p>
        </Box>
      </Container>
    );
  }
}

export default startApp;