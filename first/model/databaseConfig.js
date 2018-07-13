var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "una",
            password: "",
            database: "batam"
        });
        return conn;
    }
};
module.exports = dbconnect