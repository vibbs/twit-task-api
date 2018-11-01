'use strict';

var dotenv = require('dotenv');
var mongoose = require('mongoose');

var connection = mongoose.connection;

var db = module.exports = {
    connecting: false,
    connected: false
};

function loadConfig() {
    dotenv.config({ silent: false });
    var prefix = process.env.MONGODB_SVC_NAME;

    return {
        "db.name": process.env.DB_NAME
        , "db.host": process.env[prefix + '_SERVICE_HOST']
        , "db.port": process.env[prefix + '_SERVICE_PORT']
        , has: function(key) {
            return this.hasOwnProperty(key) && typeof this[key] !== 'function';
        }
        , get: function(key) {
            if ( typeof this[key] !== 'function' ) {
                return this[key];
            }
            return null;
        }
    };
}

db.setup = function() {
    var options, uri;
    var config = loadConfig();
    var dbName = config.get('db.name');
    var host = config.get('db.host');
    var port = config.get('db.port');
    var login = '';

    console.log('db connecting: ' + this.connecting);
    if (this.connecting || this.connected) {
        return;
    }

    if (config.has('db.login') && config.has('db.password')) {
        login = config.get('db.login') + ':' + config.get('db.password') + '@';
    }
    if (config.has('db.uri')) {
        uri = config.get('db.uri');
    } else {
        uri = 'mongodb://' + login + host + ':' + port + '/' + dbName;
    }

    connection.once('connected', function() {
        console.log( 'db connection established');
        db.connected = true;
    });

    connection.on('disconnecting', function() {
        console.log('db connection disconnecting');
    });

    connection.on('error', function(err) {
        console.log('error db ' +  err);
    });

    // Connect to Database
    console.log(uri);
    this.connecting = true;
    mongoose.connect(uri, { useNewUrlParser: true });

};

process.on('SIGINT', function() {
    if (db.connected) {
        mongoose.connection.close(function() {
            console.log('default connection disconnected through app termination');
        });
    }
    process.exit();
});


