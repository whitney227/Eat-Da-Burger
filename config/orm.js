var connection = require("./connection.js");

//create methods for MySQL commands
var orm = {
    //selectAll method
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM '+tableInput+';', function(err, result){
            if(err)throw err;
            cb(result)
        });
    },
    //insertOne method
    create: function() {
        
        connection.query(function(err, result) {
            if (err)throw err;
            cb(result)
        });
    },

    //updateOne method
    update: function( ) {
        
        connection.query(queryString, function(err, result) {
            if (err)throw err;
            cb(result);
        });
    }
};

module.exports = orm;