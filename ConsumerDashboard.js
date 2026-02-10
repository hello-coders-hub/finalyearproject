import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import axios from 'axios';

function ConsumerDashboard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container maxWidth="lg" style={{ marginTop: '5%' }}>
      <Typography variant="h4" color="primary">🛒 Consumer Dashboard – Find Your Favorite Farm Goods! 🛒</Typography>
      <TextField label="Search Products (e.g., Apples)" fullWidth margin="normal" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card style={{ backgroundColor: '#FFF9C4' }}> {/* Yellow like sun */}
              <CardContent>
                <Typography variant="h6">{product.name} 🌽</Typography>
                <Typography>Pesticides: {product.pesticides}</Typography>
                <Typography>Yield Size: {product.yieldSize}</Typography>
                <Typography>Amount: {product.amount}</Typography>
                <Button variant="contained" color="primary" onClick={() => window.location.href = `/auction/${product._id}`}>Join Auction!</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ConsumerDashboard;