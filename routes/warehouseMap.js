const express = require('express');
const router = express.Router();
const { jsonConvert } = require('../api/jsonTrasnformer');
// const warehouse = require('../test/data/groupLocations.json');
const warehouse = require('../data/warehouse.json');
const users = require('../data/users.json');
const productsData = require('../data/products.json');
const stocksData = require('../data/stocks.json');
const placeStatusTypesData = require('../data/placeStatusTypes.json');
const workload = require('../data/workload.json');

router.get('/', function (req, res, next) {
    const transformedData = jsonConvert('WH', warehouse, users);
    res.render('warehouseMap', { data: transformedData, productsData, stocksData, placeStatusTypesData, warehouse, workload });
});

module.exports = router;
