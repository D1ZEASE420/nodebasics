import { request } from "express";

let cars = [];

export const getAllCars= (request, response) => {
    response.status(200).json(cars);
};

export const getCarById = (request, response) => {
    const { id } = request.params
    // loop through array and find the item with same id as params
    // using filter is returning [] when no matches found
    const car = cars.filter((car) => car.id === id);


    // Error handling 

    if (!car.length) {
        response.status(404).json({
            message: "car not found"
        });
    }

    response.status(200).json(car);
};

// POST /cars
export const createCar = (request, response) => {
    const { model, series, year } = request.body;

    const id = cars.length > 0 ? car.length + 1 : 1;

    cars.push({
        id,
        model,
        series,
        year,
});

    response.status(200).json([
    ])
}; 