import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    
    const {data:blog,loading,error} = useFetch('http://localhost:8000/blogs');
 
    return (
        <div className="home">
            <h1>App Component</h1>
            {error && <div>
                {error}
            </div>}
            {loading && <div>Loading...</div>}
            {blog && <BlogList blog = {blog} title = "All Blog's"/>}
        </div>
    );
}
 
export default Home;