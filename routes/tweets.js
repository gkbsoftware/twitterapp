var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res) {
//   res.render('tweets', { title: 'Tweets', message: 'These are your tweets' });
// });

router.get('/', function (req, res) {
  var q = req.query.q || 'javascript';
  twitter.get('search/tweets', { q: q }, function(error, tweets, response){
    res.send(tweets);
    //res.render('tweets', { title: 'Tweets', tweets: tweets });
  });
});

module.exports = router;
