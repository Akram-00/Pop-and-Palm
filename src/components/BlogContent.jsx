import React from 'react'

const BlogContent = ({ blog }) => {
    return (
        <section id='top'>
            <div className='blog-image-container'>
                <img src={blog.imgSrc} alt="" className="blog-image" />
            </div>
            <h1 className='blog-title'>{blog.title}</h1>
            <div className='blog-hr' />
            {/* blogcontent */}
            <blog.blogContent /> 
            <button>Contact Us</button>
        </section>
    )
}

export default BlogContent