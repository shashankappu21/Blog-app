import { Link } from "react-router-dom";
import { Avatar } from "./Blogcard";

export default function Appbar(){
    return (
        <div className="border-b flex justify-between px-10 py-2">
            <Link to={'/blogs'}><div className="font-bold text-xl flex flex-col justify-center cursor-pointer">BlogApp</div></Link>
            <div className="cursor-pointer"><Avatar name="harkirat" size="big" /></div>
        </div>
    );
}