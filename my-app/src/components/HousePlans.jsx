import {useState} from "react";
import axios from "axios";
import HousePlan from "./HousePlan";

//https://portiaportia.github.io/json/house-plans.json
const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    return (
        <div id="house-plans" className="columns">
            {houses.map((house)=>(
                <HousePlan
                _id="1"
                name={house.name}
                size={house.size}
                bedrooms={house.bedrooms}
                bathrooms={house.bathrooms}
                main_image={house.main_image}/>
            ))}
            
        </div>
    );
};

export default HousePlans;