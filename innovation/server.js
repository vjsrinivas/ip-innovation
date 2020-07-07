var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var db = mongo.createConnection("mongodb://localhost:27017/test", function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to ' + db + '\n');
    }
})

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,mode');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var EventSchema = new Schema(
    { 
        name: {type: String},
        date: {type: Date},
        description: {type: String},
        type: {type: String},
        presenters: {type: []},
        connection_type: {type: String},
        link: {type: String}
    }, {versionKey: false}
);

var UserSchema = new Schema(
    {
        name: {type: String},
        badge1: {type: Boolean},
        badge2: {type: Boolean},
        badge3: {type: Boolean},
        badge4: {type: Boolean},
        badge5: {type: Boolean},
        badge6: {type: Boolean},
        badge7: {type: Boolean},
        badge8: {type: Boolean},
        badge9: {type: Boolean},
        badge10: {type: Boolean}
    }
);

var stickerSchema = new Schema(
    {
        name: {type: String},
        description: {type: String},
        image: {type:String} // just the image name not the path!
    }
);

var eventModel = db.model('event', EventSchema);
var userModel = db.model('users', UserSchema);
var stickerModel = db.model('stickers', stickerSchema);

app.post('/api/SaveEvent', function(req,res){
    console.log("SaveEvent post detected");
    var mod = new eventModel(req.body);

    console.log(req.headers.mode);
    if(req.headers.mode == 'add') {
        console.log('Saving mode...');
        mod.save(function(err, data){
            if (err) {
                res.send(err);
            } else {
                res.send({data: 'Record has been inserted'});
            }
        });
    } else {
        console.log('Updating mode...');
        eventModel.findByIdAndUpdate(req.body.id, req.body,
            function(err, data) {
                if(err) {
                    res.send(err);
                } else {
                    res.send({data: 'Record has been updated'});
                }
            }
        )
    }
});

app.get('/api/GetEvents', function(req,res){
    console.log("GetEvent get detected");
    eventModel.find({}, function(err, docs) {
        if(err != null) {
            res.send(docs);
        } else {
            res.send(err);
        }
    });
});

app.get('/api/GetUsers', function(req, res) {
    console.log("GetUsers get detected");
    userModel.find({}, function(err, docs) {
        if(err != null) {
            res.send(docs);
        } else {
            res.send(err);
        }
    });
});

app.post('/api/SetUsers', function(req, res) {
    // TODO
    res.send(null);
});

app.post('/api/SetUser', function(req, res) {
    // TODO
    res.send(null);
});

app.get('/api/GetStickers', function(req, res){
    console.log("GetStickers get detected");
    stickerModel.find({}, function(err, doc) {
        res.send(doc);
    });
});

app.listen(8080, function() {
    console.log('Express server is running on port 8080...');

    // const Model = db.model('event', EventSchema);
    // const m = new Model();
    // m.name = 'test'
    // m.date = Date('9/2/2020');
    // m.description = 'testetsetset';
    // m.type = 'webex';
    // m.save(function (err) {
    //     console.log(err);
    // });
});