import React from 'react'
import { blogData } from '../data/blogsData';
import { generateBlogUrl } from '../utils/blogURLGenerator';
import { useNavigate } from 'react-router-dom';


const BlogCard = ({ imgSrc, title, description }) => {

    const navigate = useNavigate();

    const handleBlogRedirect = () => {
        const blogUrl = generateBlogUrl(title) // Replace spaces with hyphens
        navigate(`/blog/${blogUrl}`);
    };
    return (
        <div className="blog-card">
            <img src={imgSrc} className="blog-card-img-top" alt={title} />
            <div className="blog-card-body">
                <h5 className="blog-card-title">{title}</h5>
                <p className="blog-card-text">{description}</p>
                <button onClick={handleBlogRedirect} className='button-primary blog-redirect-btn'>Read More &rarr;</button>
            </div>
        </div>
    );
};

const BlogsGrid = () => {
    return (
        <section className='blog-grid-container'>
            <h2 className='blog-grid-container-title'>Recent Post</h2>
            <div className='blog-grid-container-cards'>
                {
                    blogData.map((blog, index) =>
                    (<BlogCard
                        key={index}
                        imgSrc={blog.imgSrc}
                        title={blog.title}
                        description={blog.description}
                    />)
                    )
                }
            </div>
        </section>
    )
}

export default BlogsGrid