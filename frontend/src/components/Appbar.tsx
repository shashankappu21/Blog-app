import { Avatar } from "./Blogcard";

export default function Appbar(){
    return (
        <div className="border-b flex justify-between px-10 py-2">
            <div className="font-bold text-xl flex flex-col justify-center">BlogApp</div>
            <Avatar name="harkirat" size="big" />
        </div>
    );
}