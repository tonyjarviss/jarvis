const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://df0f-139-5-249-170.ngrok-free.app/get?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
