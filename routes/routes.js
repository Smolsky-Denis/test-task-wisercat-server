// JSON data
const path = require('path');
const {requestData} = require('../request-data');

const router = (app, wss) => {

    app.get('/group.free.beeceptor.com/list', (request, response) => {
        response.send(requestData.itemList);
    });

    // app.post('/redirect-to-app', (request, response) => {
    //     response.redirect('http://localhost:3000/pay/1');
    // });

    app.get('/group.free.beeceptor.com/item/:id', (request, response) => {
        const id = JSON.parse(request.params.id)

        switch (id) {
            case 1:
                response.send(requestData.itemById[0]);
                break;
            case 2:
                response.send(requestData.itemById[1]);
                break;
            case 3:
                response.send(requestData.itemById[2]);
                break;
            default:
                response.status(400);
                response.send('None shall pass');
        }
    });
};

// Export the router
module.exports = router;