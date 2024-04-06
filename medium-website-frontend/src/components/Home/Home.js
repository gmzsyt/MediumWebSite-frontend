import React, { useState, useEffect } from "react";
import Post from "../Post/Post";


function Home(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [])


    if (error) {
        return <div> Error </div>;
    } else if (!isLoaded) {
        return <div> Loading </div>;
    } else {
        return (
            <Post postList = {postList}/>
        );
    }
}

export default Home;