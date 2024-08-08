import { Blog } from "../hooks";
import { Avatar } from "./Blogcard";

export default function FullBlog({blog}: {blog: Blog}){
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-5">
                <div className="col-span-8">
                    <div className="font-extrabold text-5xl text-center">
                        {blog.title}
                    </div>
                    <div className="pt-10 text-xl">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 pt-7 text-lg text-center font-semibold">
                    <div className="text-slate-500 text-md">Author: </div>
                    <div className="flex justify-center pt-4">
                        <Avatar name={blog.author.name} size="small"/>
                        <div className="pl-1">
                           {blog.author.name} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}