import React from 'react';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Design1() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white dark:bg-gray-950 shadow">
                <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 font-semibold text-lg">
                        <CardGiftcardIcon className="h-6 w-6" />
                        Wishlist Collective
                    </a>
                    <div className="flex items-center gap-4">
                        <div className="relative w-full max-w-md">
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                            <input
                                type="search"
                                placeholder="Search wishlists..."
                                className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className="rounded-full">
                                    <div className="w-8 h-8">
                                        <img src="/placeholder.svg" alt="@username" className="rounded-full" />
                                    </div>
                                </button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content align="end">
                                <DropdownMenu.Item>
                                    <a href="#">My Profile</a>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item>
                                    <a href="#">My Wishlists</a>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>Logout</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                    Discover and Share Wishlists
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    Explore curated wishlists from influencers, celebrities, and your friends. Easily create and share your own wishlist with the world.
                                </p>
                                <div className="flex gap-4">
                                    <button className="btn btn-primary">
                                        <AddIcon className="h-5 w-5 mr-2" />
                                        Create Wishlist
                                    </button>
                                    <button className="btn btn-outline-primary">
                                        Explore Wishlists
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <img src="/placeholder.svg" width={600} height={600} alt="Hero Image" className="mx-auto rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center space-y-4 mb-8">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Featured Wishlists</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md">
                                Discover the latest and most popular wishlists curated just for you.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
                                >
                                    <img src="/placeholder.svg" width={400} height={300} alt={`Wishlist ${item}`} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">Wishlist {item}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacus.
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-100 dark:bg-gray-950 py-6">
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        &copy; 2024 Wishlist Collective. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
