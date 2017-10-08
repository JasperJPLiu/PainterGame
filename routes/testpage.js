/**
 * Created by liujiapeng on 2017/10/1.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('testpage', { title: 'Express' });
});

module.exports = router;
