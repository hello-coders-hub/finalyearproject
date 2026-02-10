import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Rating as MuiRating } from '@mui/material';
import axios from 'axios';

function Rating() {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState('');

  const handleRate = async () => {
    await axios.post('http://localhost:5000/rate', { fromUserId: 'me', toUserId: 'them', stars, comment });
    alert('Rated! ⭐');
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" color="primary">⭐ Rating Room – Give Stars! ⭐</Typography>
      <MuiRating value={stars} onChange={(e, newValue) => setStars(newValue)} />
      <TextField label="Comment" fullWidth margin="normal" value={comment} onChange={(e) => setComment(e.target.value)} />
      <Button variant="contained" color="secondary" onClick={handleRate}>Submit Rating!</Button>
    </Container>
  );
}

export default Rating;