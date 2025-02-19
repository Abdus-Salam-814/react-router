import { useLoaderData } from "react-router";
import Post from "../post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>This is post Component {posts.length}</h1>

        <div className="grid gap-3 mt-8 md:grid-cols-4">
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>

        </div>
    );
};

export default Posts;