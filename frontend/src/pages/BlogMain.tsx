import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import Appbar from "../components/Appbar";

export default function BlogMain(){
    const { id } = useParams();
    console.log(id);
    const {loading, blog} = useBlog({
        id: id || ""
    });
    if(loading){
        <div>
            Loading...
        </div>
    }
    return (
        <div>
            <Appbar />
            <FullBlog blog={blog}/>
        </div>
    );
}