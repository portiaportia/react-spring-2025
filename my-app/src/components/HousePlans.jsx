import HousePlan from "./HousePlan";
//https://portiaportia.github.io/json/house-plans.json
const HousePlans = () => {
    return (
        <div id="house-plans" className="columns">
            <HousePlan
                _id="1"
                name="Farm House" 
                size="2000"
                bedrooms="3"
                bathrooms="2.5"
                main_image="farm.webp"/>
        </div>
    );
};

export default HousePlans;