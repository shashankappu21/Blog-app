import Appbar from "../components/Appbar";
import Blogcard from "../components/Blogcard";
import { useBlogs } from "../hooks";

export default function Blog(){
    const {loading , blogs} = useBlogs();
    if(loading){
        return <div>loading...</div>
    }
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    
                    {blogs.map(blog => 
                        <Blogcard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate="07/08/2024" />
                    )}
                </div>
            </div>
        </div>
    );
}