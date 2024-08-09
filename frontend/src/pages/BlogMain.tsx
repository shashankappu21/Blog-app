import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import Appbar from "../components/Appbar";
import BlogSkeleton from "../components/BlogSkeleton";

export default function BlogMain(){
    const { id } = useParams();
    console.log(id);
    const {loading, blog} = useBlog({
        id: id || ""
    });
    if(loading){
        return (
        <div>
            <Appbar />
            <BlogSkeleton />
        </div>
        );
    }
    return (
        <div>
            <Appbar />
            <FullBlog blog={blog}/>
        </div>
    );
}