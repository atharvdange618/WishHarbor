import React from 'react';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';
import { Card, CardContent, Avatar, Button, Typography } from '@mui/material';

// Custom Avatar Component with Fallback
const CustomAvatar = ({ src, alt, fallback }) => (
    <Avatar src={src} alt={alt}>
        {!src && fallback}
    </Avatar>
);

export default function Design1() {
    const wishlist = [
        { id: 1, img: "https://i.pinimg.com/564x/8d/58/39/8d583911f76ac7fb88c784c02c9a6b54.jpg" },
        { id: 2, img: "https://i.pinimg.com/564x/b6/7b/36/b67b36ab3c24b6b8e0468c38e69a4720.jpg" },
        { id: 3, img: "https://i.pinimg.com/564x/25/91/46/259146119bae28997127d5050689fce4.jpg" },
        { id: 4, img: "https://i.pinimg.com/736x/5b/ed/2f/5bed2f0ed65834dc511154d755ac6612.jpg" },
        { id: 5, img: "https://i.pinimg.com/736x/ab/5d/ac/ab5dac625ad0bdd9fd62e4735d369966.jpg" },
        { id: 6, img: "https://i.pinimg.com/736x/2a/fb/5a/2afb5a122912b73983df9b30df5812f3.jpg" },
        { id: 7, img: "https://i.pinimg.com/564x/04/ee/40/04ee40b30e7623fd05b0a377d0fd9321.jpg" },
        { id: 8, img: "https://i.pinimg.com/564x/ce/3b/be/ce3bbefe77a95c7eae56fb9901128c2a.jpg" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
                        <CardGiftcardIcon className="h-6 w-6" />
                        Wishlist Collective
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="relative w-full max-w-md">
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                            <input
                                type="search"
                                placeholder="Search wishlists..."
                                aria-label="Search wishlists"
                                className="pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className="rounded-full">
                                    <div className="w-8 h-8">
                                        <img src="https://i.pinimg.com/736x/b0/df/a3/b0dfa38aebd725361ce4ca7afc718cc5.jpg" alt="atharvdange._" className="rounded-full" />
                                    </div>
                                </button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content align="end">
                                <DropdownMenu.Item>
                                    <Link to="/profile">My Profile</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item>
                                    <Link to="/wishlists">My Wishlists</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>Logout</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                </div>
            </header>
            <main className="flex-1">
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
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold mb-8">Featured Wishlists</h2>
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
                    </div>
                </section>
            </main>
            <footer className="bg-gray-100 py-6">
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm">
                        &copy; 2024 Wishlist Collective. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link to="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Terms of Service
                        </Link>
                        <Link to="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
