import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "../components/Blogcard";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";

export default function Publish(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return(
        <div>
            <div className="border-b flex justify-between px-10 py-2">
                <Link to={'/blogs'}>
                <div className="font-bold text-xl flex flex-col justify-center cursor-pointer">
                    BlogApp
                </div>
                </Link>
                <div className="cursor-pointer">
                <Avatar name="harkirat" size="big" />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-3/5">
                <textarea
                    rows={1}
                    className="mt-4 block p-2.5 w-full text-5xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none leading-relaxed"
                    placeholder="Title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                ></textarea>
                <textarea
                    rows={10}
                    className="mt-5 block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write the content here..."
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                ></textarea>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <button
                    onClick={async () => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                            title,
                            content
                        },
                        {
                            headers:{
                                Authorization: localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${response.data.id}`);
                    }}
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Publish
                </button>
            </div>
        </div>

    );
}

