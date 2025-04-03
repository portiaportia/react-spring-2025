import {useState, useEffect} from "react";
import axios from "axios";
import HousePlan from "./HousePlan";

//https://portiaportia.github.io/json/house-plans.json
const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    //after page loaded to asynch json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("https://portiaportia.github.io/json/house-plans.json");
        })();

    },[]);

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