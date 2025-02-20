import { useNavigate } from "react-router";

const Phone = ({phone}) => {
    const {image, phone_name, brand, slug} = phone;
    const nevegate = useNavigate()

    const heandelPhoneDetails = () =>{
        nevegate(`/phone/${slug}`)
    }

    return (
        <div className="border-2 rounded-2xl flex flex-col justify-center items-center p-4">
            <div className="">
                <img src={image} alt="" />

            </div>
            <div className="mt-6 p-6 bg-amber-100 rounded-b-2xl w-full">
                <h2 className="font-black">{phone_name}</h2>
                <h2>{brand}</h2>

                <button onClick={heandelPhoneDetails} className="btn btn-secondary mt-8">Show Details</button>

           
            </div>
        </div>
    );
};

export default Phone;