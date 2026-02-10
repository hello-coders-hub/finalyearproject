import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

function Landing() {
  const [showTitle, setShowTitle] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
      setShowOptions(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container 
      maxWidth="md" 
      style={{ 
        textAlign: 'center', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: '#D2B48C', // Mud yellow background
        color: '#ADD8E6' // Light blue text
      }}
    >
      {showTitle && (
        <div style={{
          backgroundColor: '#2E7D32', // Keep green for title
          color: '#ADD8E6', // Light blue text
          fontSize: '4rem',
          fontWeight: 'bold',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          animation: 'pop 1s ease-in-out, slideOut 1s ease-in-out 1s forwards'
        }}>
          AgriTrust360 🌽
        </div>
      )}
      {showOptions && (
        <div style={{ animation: 'fadeIn 1s ease-in-out' }}>
          <Typography variant="h3" style={{ marginBottom: 30, color: '#ADD8E6' }}>Login As</Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card 
                style={{ 
                  cursor: 'pointer', 
                  backgroundColor: '#F1F8E9', // Light green for contrast
                  border: '2px solid #2E7D32',
                  borderRadius: '15px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }} 
                onClick={() => window.location.href = '/login/farmer'}
              >
                <CardContent style={{ textAlign: 'center', padding: '20px' }}>
                  <Typography style={{ fontSize: '5rem' }}>🚜</Typography>
                  <Typography variant="h5" style={{ color: '#1B5E20' }}>Farmer</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card 
                style={{ 
                  cursor: 'pointer', 
                  backgroundColor: '#F1F8E9', // Light green for contrast
                  border: '2px solid #2E7D32',
                  borderRadius: '15px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }} 
                onClick={() => window.location.href = '/login/consumer'}
              >
                <CardContent style={{ textAlign: 'center', padding: '20px' }}>
                  <Typography style={{ fontSize: '5rem' }}>🛒</Typography>
                  <Typography variant="h5" style={{ color: '#1B5E20' }}>Consumer</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card 
                style={{ 
                  cursor: 'pointer', 
                  backgroundColor: '#F1F8E9', // Light green for contrast
                  border: '2px solid #2E7D32',
                  borderRadius: '15px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }} 
                onClick={() => window.location.href = '/login/mediator'}
              >
                <CardContent style={{ textAlign: 'center', padding: '20px' }}>
                  <Typography style={{ fontSize: '5rem' }}>🚚</Typography>
                  <Typography variant="h5" style={{ color: '#1B5E20' }}>Mediator</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button 
            variant="contained" 
            style={{ 
              marginTop: 40, 
              backgroundColor: '#1976D2', // Blue
              color: 'white',
              fontSize: '1.2rem',
              padding: '15px 30px',
              borderRadius: '25px',
              boxShadow: '0 0 10px #1976D2',
              animation: 'glow 2s infinite alternate'
            }} 
            onClick={() => window.location.href = '/register'}
          >
            New Register 📝
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Landing;