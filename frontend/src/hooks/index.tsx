import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "name": string
    }
}

interface Exporter {
    "loading": boolean,
    "blog": Blog
}

export const useBlog = ({id} : {id: string}) : Exporter => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const defaultBlog:Blog = {
        content: "",
        title: "",
        id: 0,
        author:{
            name: ""
        }
    }

    useEffect(() => {
        // console.log(localStorage.getItem("token")); // Log the token to check its value
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
                // console.log("Got the response");
                setBlog(response.data.post),
                setLoading(false)
            })
    },[id]);
    return{
        loading,
        blog: blog || defaultBlog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        console.log(localStorage.getItem("token")); // Log the token to check its value
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
                console.log("Got the response");
                setBlogs(response.data.blog),
                setLoading(false)
            })
    },[]);
    return{
        loading,
        blogs
    }
}