import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/";
const headers = {
	"Content-Type": "application/json; charset=utf-8",
	"Acess-Control-Allow-Origin": "*",
	Accept: "application/json",
}

export const Fetch = axios.create({
	baseURL: baseUrl,
	headers: headers,
});

