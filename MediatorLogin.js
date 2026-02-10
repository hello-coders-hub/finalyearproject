import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

function MediatorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      if (res.data.user.role === 'mediator') {
        localStorage.setItem('token', res.data.token);
        alert('Mediator login successful! 🌟');
        window.location.href = '/mediator';
      } else {
        alert('Not a mediator account!');
      }
    } catch (error) {
      alert('Oops! Wrong email or password. 😊');
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" color="primary">Mediator Login 🚚</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: 20 }}>Login</Button>
    </Container>
  );
}

export default MediatorLogin;