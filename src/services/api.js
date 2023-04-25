import axios from "axios";
const URL = "http://localhost:8000";

async function allUser() {
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log(error);
    }
}
async function queryOne() {
    try {
        return await axios.get(`${URL}/findIncomeAndCar`)
    } catch (error) {
        console.log(error);
    }
}
async function queryTwo() {
    try {
        return await axios.get(`${URL}/findPhonePrice`)
    } catch (error) {
        console.log(error);
    }
}
async function queryThree() {
    try {
        return await axios.get(`${URL}/findLastName`)
    } catch (error) {
        console.log(error);
    }
}
async function queryFour() {
    try {
        return await axios.get(`${URL}/findCarBrand`)
    } catch (error) {
        console.log(error);
    }
}
async function queryFive() {
    try {
        return await axios.get(`${URL}/findCities`)
    } catch (error) {
        console.log(error);
    }
}

export { allUser, queryOne, queryTwo, queryThree, queryFour, queryFive }