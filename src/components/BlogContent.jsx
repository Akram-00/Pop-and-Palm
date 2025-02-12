import React from 'react'

const BlogContent = ({ blog }) => {
    return (
        <section>
            <div className='blog-image-container'>
                <img src={blog.imgSrc} alt="" className="blog-image" />
            </div>
            <h1 className='blog-title'>{blog.title}</h1>
            <div className='blog-hr' />
            {/* blogcontent */}
            <blog.blogContent />
        </section>
    )
}

export default BlogContent