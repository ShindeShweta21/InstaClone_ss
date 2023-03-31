import React, { createContext, useEffect, useState } from "react";
import { getAllPost } from "../utils/api-util";

export const UserList = createContext()

export default function PostviewContext({children}) {

    const [posts, setPosts] = useState([]);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        getAllPost().then(res => {
            setPosts(res.data.reverse());
        });
        setPreview("")
        
    }, [])

    return <UserList.Provider value={{
        posts : posts,
        addPost : (post) => {
            const updated = [post, ...posts];
            setPosts(updated);
        },
        preview,
        addPreview : (url) => setPreview(url)
    }}>
        {children}
    </UserList.Provider>
}
