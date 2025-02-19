import { Link, useNavigate } from "react-router";

const Post = ({post}) => {
    const {id, title} =post;
const navigate = useNavigate();
    const hendalShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className="border-2 border-amber-100 p-8 rounded-2xl">
            <h1>Post ID: {id}</h1>
            <h1>Title: {title}</h1>
            <Link to={`/post/${id}`}><button className="btn btn-warning mt-8">Read more</button></Link>

            <button className="btn mt-7 ml-2 btn-primary" onClick={hendalShowDetails}>Click to See Details</button>
        </div>
    );
};

export default Post;