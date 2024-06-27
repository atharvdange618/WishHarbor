import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Card, CardContent, Avatar, Button, Typography } from '@mui/material';

const Cards = ({ wishlist }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 345, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <img
                        src={item.img}
                        alt={`Wishlist ${item.id}`}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Wishlist {item.id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            A curated collection of unique items.
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Avatar sx={{ bgcolor: 'grey.300' }} src="https://i.pinimg.com/736x/b0/df/a3/b0dfa38aebd725361ce4ca7afc718cc5.jpg">
                                <PersonIcon />
                            </Avatar>
                            <Button variant="outlined" size="small">
                                View Wishlist
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Cards