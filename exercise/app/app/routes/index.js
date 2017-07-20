var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 新页面
router.get('/new',function(req,res,next){
res.render('new/static',{title:'new page'})
})
module.exports = router;
