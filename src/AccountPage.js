// src/AccountPage.js

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const AccountPage = () => {
  const accountNumber = '123456789';
  const balance = 2500.75;
  const transactions = [
    { id: 1, description: 'Grocery Store', amount: -75.00, date: '2024-06-01' },
    { id: 2, description: 'Salary', amount: 3000.00, date: '2024-06-01' },
    { id: 3, description: 'Coffee Shop', amount: -5.50, date: '2024-06-02' },
    { id: 4, description: 'Book Store', amount: -15.00, date: '2024-06-03' },
  ];

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Avatar
          alt="Profile Picture"
          src="https://via.placeholder.com/150"
          sx={{ width: 80, height: 80, mb: 2 }}
        />
        <Typography variant="h5" component="div">
          Account Number: {accountNumber}
        </Typography>
        <Typography variant="h6" component="div" color="primary" mt={2}>
          Balance: ${balance.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Recent Transactions
        </Button>
        <List sx={{ width: '100%', mt: 3 }}>
          {transactions.map((transaction) => (
            <ListItem key={transaction.id}>
              <ListItemText
                primary={transaction.description}
                secondary={`${transaction.date} - $${transaction.amount.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default AccountPage;


// add this page to the navigation bar 
