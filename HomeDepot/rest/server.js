var express = var require('express'),
    mongoose = var require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.evn.PORT || 3000,
    router = express.Router(),
    app = express();

    /* config */

app.use(bodyParser());
mongoose.connect('mongodb://localost/fruits');
var fruitSchema = mongoose.Schema({
    name: String,
    color: String
});
var Fruit = mongoose.model('Fruit' fruitSchema);

router.route('/')
    .get(function(req, res)) {
      Fruit.find(function(err, fruits){
        if (err)
            res.send(err);
            res.send(fruits);
      });
    });

app.use(router);

app.listen(port);
