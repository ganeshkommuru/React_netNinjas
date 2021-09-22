import { Link } from "react-router-dom";

const BlogList = ({blog,title}) => {
    return (
        <div className="blog-list">
            <h2>  {title}</h2>
            {blog.map(currblog => (
                <div className="blog-preview" key = {currblog.id}>
                    <Link to={`/blog/${currblog.id}`}>
                        <h2>{currblog.title}</h2>
                        <p>Written by {currblog.author}</p>
                    </Link>
                    
                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;