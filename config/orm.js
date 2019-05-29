var connection = require("./connection.js");

//create methods for MySQL commands
var orm = {
    //select method
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM '+tableInput+';', function(err, result){
            if(err)throw err;
            cb(result)
        });
    },
    //insert method
    create: function(tableInput, val, cb) {
        connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');",
        function(err, result){
            if(err)throw err;
            cb(result);
        });
    },

    //update method
    update: function(tableInput, condition, cb) {  
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';',
        function(err,result){
            if (err)throw err;
            cb(result); 
        });
    },
}
 
module.exports = orm;