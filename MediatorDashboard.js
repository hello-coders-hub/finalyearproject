import React from 'react';
import { Container, Typography } from '@mui/material';

function MediatorDashboard() {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '10%' }}>
      <Typography variant="h4" color="primary">Welcome Mediator! 🚚</Typography>
      <Typography variant="body1" style={{ marginTop: 20 }}>
        Handle transports here. (More features coming soon, like viewing delivery jobs!)
      </Typography>
    </Container>
  );
}

export default MediatorDashboard;