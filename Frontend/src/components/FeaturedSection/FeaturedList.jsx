import React from 'react'
import Cards from '../Cards/Cards'

const FeaturedList = ({ wishlist }) => {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Featured Wishlists</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md">
                        Discover the latest and most popular wishlists curated just for you.
                    </p>
                </div>
                <Cards wishlist={wishlist} />
            </div>
        </section>
    )
}

export default FeaturedList