import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            Discover and Share Wishlists
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Explore curated wishlists from influencers, celebrities, and your friends. Easily create and share your own wishlist with the world.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                                Create Wishlist
                            </Button>
                            <Button variant="outlined" color="primary" component={Link} to="/explore">
                                Explore Wishlists
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src='https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={600} height={600} alt="Hero Image" className="mx-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection