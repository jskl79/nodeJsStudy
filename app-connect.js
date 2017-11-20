var connect = require('connect');
var htutil = require('./basic/htutil');

connect.createServer()
    .use(connect.favicon())
    .use(connect.logger())
    .use('/filez', connect.static(__dirname + '/filez'))
    .use(connect.router(function(app) {
        app.get('/', require('./basic/home-node').get);
        app.get('/square', htutil.loadParams, require('./basic/square-node').get);
        app.get('/factorial', htutil.loadParams, require('./basic/factorial-node').get);
        app.get('/fibonacci', htutil.loadParams, require('./basic/fibo2-node').get);
        app.get('/mult', htutil.loadParams, require('./basic/mult-node').get);
    })).listen(8124);
console.log('listening to http://localhost:8124');