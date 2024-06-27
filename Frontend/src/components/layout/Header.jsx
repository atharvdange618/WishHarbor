import React from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SearchIcon from '@mui/icons-material/Search';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Header = () => {
    return (
        <header className="bg-white shadow">
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
    )
}

export default Header