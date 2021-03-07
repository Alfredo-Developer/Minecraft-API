const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(JSON.stringify({
        response: 200,
        content: `Welcome to the Minecraft Variety API.`
    }));
});

module.exports = router;