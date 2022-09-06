const express = require('express');
const testCtrl = require('./test.controller');
let router = express.Router();

router.get('/', testCtrl.getExampleText);

export default router;