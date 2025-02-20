import { useLoaderData, useNavigate, useParams } from "react-router";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} =post;

    const {postID} = useParams();
    console.log(postID)

    const navigate = useNavigate();
    const hendailGoBack = () =>{
        navigate(-1)
    }

    return (
        <div>
            <h1>Post id: {id}</h1>
            <h1>Post Title: {title}</h1>
            <h1 className="p-3 bg-amber-100">Post content: {body}</h1>
            <button onClick={hendailGoBack} className="btn btn-warning mt-8"> Go back</button>
        </div>
    );
};

export default PostDetails;