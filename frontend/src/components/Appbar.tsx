import { Link } from "react-router-dom";
import { Avatar } from "./Blogcard";

export default function Appbar(){
    return (
        <div className="border-b flex justify-between px-10 py-2">
            <Link to={'/blogs'}><div className="font-bold text-xl flex flex-col justify-center cursor-pointer">BlogApp</div></Link>
            <div className="cursor-pointer">
                <Link to={'/publish'}><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-5">Publish</button></Link>
                <Avatar name="harkirat" size="big" />
            </div>
        </div>
    );
}