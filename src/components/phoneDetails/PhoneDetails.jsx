import { useLoaderData, useNavigate } from "react-router";

const PhoneDetails = () => {
    const phoneDetailsLode = useLoaderData();
   const phoneInfo = phoneDetailsLode.data;
   const {image, name, brand, mainFeatures,  } = phoneInfo;
   const {storage, displaySize, memory, sensors} = mainFeatures;
    const nevegate = useNavigate();
   const goBackHome = ()=>{
            nevegate(-1)
   }
    return (
        <div className="border-2 p-6 flex flex-col justify-center items-center rounded-2xl">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="mt-8">
                <h3>{name}</h3>
                <h3>Brand: {brand}</h3>
                <h3>Storage: {storage}</h3>
                <h3>Display Size: {displaySize}</h3>
                <h3>Memory: {memory}</h3>
                <div className="flex gap-4">
                   <h1>Feuters:</h1>
                    {
                        sensors.map(item => <h1 key={item.index}>{item}</h1>)
                    }
                </div>

                <button onClick={goBackHome} className="btn btn-warning mt-8">Go back</button>
            </div>
        </div>
    );
};

export default PhoneDetails;