import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = async () => {
  try {
    const res = await axios.post('http://localhost:5000/login', { email, password });
    localStorage.setItem('token', res.data.token);
    alert('Login successful! 🌟');
    // Now redirect based on role
    if (res.data.user.role === 'farmer') {
      window.location.href = '/farmer';  // Go to farmer dashboard
    } else if (res.data.user.role === 'consumer') {
      window.location.href = '/consumer';  // Go to consumer dashboard
    } else {
      alert('Oops! Unknown role. Try again.');
    }
  } catch (error) {
    alert('Oops! Wrong email or password. Try again or register first! 😊');
  }
};

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" color="primary">🌽 FarmFresh Auction Login 🌽</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: 20 }}>Login</Button>
      <Button onClick={() => window.location.href = '/register'}>New? Register Here!</Button>
    </Container>
  );
}

export default Login;