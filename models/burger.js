//import orm.js
var orm = require("../config/orm.js")

//code that will call the ORM functions
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        })
    },
    create: function(name, cb) {
        orm.create("burgers", name, cb);
    },
    
    update: function(id, cb) {
        orm.update("burgers", id, cb);
    }
};

//Export 
module.exports = burger;