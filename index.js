const http = require('http');
const app = require('./app');
const format = require('date-fns/format');
const color = require('node-colorify');


function startServerConfig () {
    process.env.TZ = 'America/Sao_Paulo';
    Date.prototype.toJSON = function () {
        return format(this, 'YYYY-MM-DDTHH:mm:ss');
    };
}


function verifyEnv () {
    if (process.env.ENV_NAME !== 'DEV') {
        console.log(color.colorItSync(`Atenção voce iniciou em : ${process.env.ENV_NAME}`, { bColor: 'red', fColor: 'black' }));
    }
}

app.server = http.createServer(app);
app.server.listen(process.env.PORT);
startServerConfig();
verifyEnv();
console.log(`============ Server Started on http://localhost:${process.env.PORT} ============`);