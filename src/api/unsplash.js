import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 8cyN8rxt4pfN5maP4XFYFK6EyvNMD2x1IE-vx2O8wdc",
      },
})