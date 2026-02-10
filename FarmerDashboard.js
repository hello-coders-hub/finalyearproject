import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

function FarmerDashboard() {
  const [name, setName] = useState('');
  const [pesticides, setPesticides] = useState('');
  const [yieldSize, setYieldSize] = useState('');
  const [amount, setAmount] = useState('');
  const [auctionDate, setAuctionDate] = useState('');

  const handleAddProduct = async () => {
    const farmerId = 'some-farmer-id'; // In real app, get from login
    await axios.post('http://localhost:5000/add-product', { farmerId, name, pesticides, yieldSize, amount, auctionDate });
    alert('Product added! 🌽');
  };

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '5%' }}>
      <Typography variant="h4" color="primary">🚜 Farmer's Dashboard – Add Your Yummy Products! 🚜</Typography>
      <Card className="product-card" style={{ marginTop: 20, padding: 20 }}>
        <CardContent>
          <TextField label="Product Name (e.g., Apples)" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Pesticides Used" fullWidth margin="normal" value={pesticides} onChange={(e) => setPesticides(e.target.value)} />
          <TextField label="Yield Size (e.g., Big or Small)" fullWidth margin="normal" value={yieldSize} onChange={(e) => setYieldSize(e.target.value)} />
          <TextField label="Amount (e.g., 100 kg)" type="number" fullWidth margin="normal" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <TextField label="Auction Date (e.g., 2023-10-10)" type="date" fullWidth margin="normal" value={auctionDate} onChange={(e) => setAuctionDate(e.target.value)} />
          <Button variant="contained" color="secondary" onClick={handleAddProduct} style={{ marginTop: 20 }}>Add Product!</Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default FarmerDashboard;