import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('consumer'); // Default to consumer

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/register', { name, email, password, role });
      alert('Registration successful! 🌟 Now log in!');
      window.location.href = '/'; // Go back to login page
    } catch (error) {
      alert('Oops! Try again. Maybe the email is already used.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '10%', backgroundColor: '#E8F5E8', padding: 20, borderRadius: 10 }}>
      <Typography variant="h4" color="primary">🌱 Welcome to FarmFresh! Register Here 🌱</Typography>
      <TextField 
        label="Your Name" 
        fullWidth 
        margin="normal" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        style={{ backgroundColor: 'white' }}
      />
      <TextField 
        label="Email" 
        type="email" 
        fullWidth 
        margin="normal" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        style={{ backgroundColor: 'white' }}
      />
      <TextField 
        label="Password" 
        type="password" 
        fullWidth 
        margin="normal" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        style={{ backgroundColor: 'white' }}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Are you a Farmer or Consumer?</InputLabel>
        <Select value={role} onChange={(e) => setRole(e.target.value)} style={{ backgroundColor: 'white' }}>
          <MenuItem value="farmer">🚜 Farmer (I sell crops!)</MenuItem>
          <MenuItem value="consumer">🛒 Consumer (I buy crops!)</MenuItem>
        </Select>
      </FormControl>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleRegister} 
        style={{ marginTop: 20, fontSize: 18 }}
      >
        Register Me! 🎉
      </Button>
    </Container>
  );
}

export default Register;