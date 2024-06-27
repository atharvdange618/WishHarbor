import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import FeaturedList from '../components/FeaturedSection/FeaturedList'

const HomePage = () => {

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
            <Header />
            <main className="flex-1">
                <HeroSection />
            </main>
            <FeaturedList wishlist={wishlist} />
            <Footer />
        </div>
    )
}

export default HomePage