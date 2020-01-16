const express = require('express');
const router = express.Router();

router.get(
    "/",
    (request, response) => {
        response.send([ 0, 1, 2]);
    }
);

router.get(
    "/:lobbyId",
    (request, response) => {
        response.send({ lobbyId: request.params.lobbyId, name: `Lobby ${request.params.lobbyId}` });
    }
);

module.exports = router;