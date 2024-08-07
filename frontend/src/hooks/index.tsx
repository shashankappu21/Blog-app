import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

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