import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6">
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
    )
}

export default Footer