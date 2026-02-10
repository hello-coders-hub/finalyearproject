import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AuctionRoom() {
  const { id } = useParams(); // Gets the product ID from the URL
  const [bids, setBids] = useState([]);
  const [bidAmount, setBidAmount] = useState('');

  useEffect(() => {
    // Pretend to load bids (in real app, fetch from backend)
    setBids([{ user: 'Consumer1', amount: 50 }, { user: 'Consumer2', amount: 60 }]);
  }, []);

  const handleBid = async () => {
    await axios.post('http://localhost:5000/bid', { productId: id, userId: 'some-user-id', amount: bidAmount });
    setBids([...bids, { user: 'You', amount: bidAmount }]);
    alert('Bid placed! 💰');
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '5%' }}>
      <Typography variant="h4" color="primary">🎉 Auction Room – Bid High! 🎉</Typography>
      <Typography>Product: Apples (from URL ID: {id})</Typography>
      <List>
        {bids.map((bid, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${bid.user} bid $${bid.amount}`} />
          </ListItem>
        ))}
      </List>
      <TextField label="Your Bid Amount" type="number" fullWidth margin="normal" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} />
      <Button variant="contained" color="secondary" className="glow-button" onClick={handleBid}>Place Bid!</Button>
    </Container>
  );
}

export default AuctionRoom;