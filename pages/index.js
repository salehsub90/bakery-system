import * as React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import startApp from './startApp';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h1 className="start">
          Click <Link href="/startApp" color="secondary">
            here
          </Link> to start your order
        </h1>
      </Box>
    </Container>
  );
}
