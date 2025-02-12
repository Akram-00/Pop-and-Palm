import React from 'react'
import BlogHeroSection from '../components/BlogHeroSection'
import BlogsGrid from '../components/BlogsGrid'

const Blogs = () => {
    return (
        <section className='blog'>
            <BlogHeroSection />
            <BlogsGrid/>
        </section>
    )
}

export default Blogs