import { useLoaderData } from "react-router";
import Phone from "../../components/phone/Phone";

const Phones = () => {

    const loadPhones = useLoaderData();

    const phones = loadPhones.data;
    return (
        <div>
            <h1>This is phone Component {phones.length} </h1>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
                {
                    phones.map(phone => <Phone key={phone.slug} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;