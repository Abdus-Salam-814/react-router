import { Link,  useRouteError } from "react-router";

const ErrorePage = () => {

    const error = useRouteError();


    

    return (
        <div>
           <h1>Oops! </h1> 
           <p>Ami pari na r pari na ami kano morina 🤦🏻‍♀️</p>
           <p>{error.statusText}</p>
           {
            error.status === 404 && <div>
                <h1>Page note Found</h1>
                <Link to={'/'}><div  className="btn btn-primary mt-4">Go Home</div></Link>
            </div>
           }
        </div>
    );
};

export default ErrorePage;