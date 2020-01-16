const express = require('express');
const router = express.Router();

router.get(
    "/:accountId",
    (request, response) => {
        response.send(request.params.accountId);
    }
);

module.exports = router;