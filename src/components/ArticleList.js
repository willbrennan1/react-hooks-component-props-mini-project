import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const postsArray = props.blogPosts.map(post => {
        return <Article 
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}
            />
    });
    
    return (
            <main>
                {postsArray}
            </main>
    )
}

export default ArticleList;