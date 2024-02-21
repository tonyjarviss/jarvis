const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://replit.com/@GoLive3/db/get?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
