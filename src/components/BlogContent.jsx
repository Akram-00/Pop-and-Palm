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
            <a href='https://us.bigin.online/org868107012/forms/enquiry-form' target='_blank' rel="noopener noreferrer">
                <button className='button-primary blog-redirect-btn' style={{marginTop:'2rem'}}>Contact Us</button>
            </a>
        </section>
    )
}

export default BlogContent