import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Landing from './components/Landing';
import Register from './components/Register';
import FarmerLogin from './components/FarmerLogin';
import ConsumerLogin from './components/ConsumerLogin';
import MediatorLogin from './components/MediatorLogin';
import FarmerDashboard from './components/FarmerDashboard';
import ConsumerDashboard from './components/ConsumerDashboard';
import MediatorDashboard from './components/MediatorDashboard';
import AuctionRoom from './components/AuctionRoom';
import Payment from './components/Payment';
import Rating from './components/Rating';

const theme = createTheme({
  palette: {
    primary: { main: '#2E7D32' }, // Deep green
    secondary: { main: '#1976D2' }, // Calm blue
    background: {
      default: '#BC8F5A', // Darker mud yellow (richer tan for visibility)
    },
    text: {
      primary: '#4682B4', // Darker light blue (steel blue for better contrast)
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#BC8F5A', // Force mud yellow background
          color: '#4682B4', // Force light blue text
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login/farmer" element={<FarmerLogin />} />
          <Route path="/login/consumer" element={<ConsumerLogin />} />
          <Route path="/login/mediator" element={<MediatorLogin />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/consumer" element={<ConsumerDashboard />} />
          <Route path="/mediator" element={<MediatorDashboard />} />
          <Route path="/auction/:id" element={<AuctionRoom />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/rate" element={<Rating />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;