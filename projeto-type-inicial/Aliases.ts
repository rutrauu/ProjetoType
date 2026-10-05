type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
}

const carYear: CarYear = 2025;
const carType: CarType = "Tesla";
const carModel: CarModel = "Model S";

const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

console.log(car);
