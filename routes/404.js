const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(404).send(JSON.stringify({
        response: 404,
        error: 'EndpointNotFoundException',
        errorMessage: 'This endpoint could not be found on this version of the Minecraft API.'
    }));
});

module.exports = router;