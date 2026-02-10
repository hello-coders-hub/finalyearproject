import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

function Payment() {
  const [amount, setAmount] = useState('');

  const handlePay = async () => {
    // Pretend payment
    await axios.post('http://localhost:5000/pay', { amount, token: 'fake-token' });
    alert('Payment done! 🤑');
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" color="primary">💳 Payment Room – Pay for Your Win! 💳</Typography>
      <TextField label="Amount to Pay" type="number" fullWidth margin="normal" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handlePay}>Pay Now!</Button>
    </Container>
  );
}

export default Payment;