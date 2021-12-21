const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp); //use nos permite usar plugins de chai, en este caso chai http

const app = require('../app').app; //Importamos el objeto app que hemos exportado de app.js


describe('Suite de prueba e2e para el curso', () => {
    it('should return hello world', (done) => { //Done es para calcular el tiempo de respueste, en que momento empieza y termina
        chai.request(app) //Conectate al servidor app
            .get('/') //Haz esa llamada get del servidor app
            .end((err, res) => { //Recoge el resutado de la llamada, ya sea error o el resultado
                chai.assert.equal(res.text, 'Hello World!')
                done();
            });
    });
});

describe('Suite de pruebas auth', () => {
    it('should return 200 when jwt is valid', (done) => {
        //Cuando la llamada no tiene correctamente la clave
        chai.request(app)
            .post('/login')
            .end((err, res) => {
                chai.request(app)
                    .get('/team')
                    .set('Autorization', 'JWT token') //Aquí stamos enviando un header (nombre header, valor header)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200);
                        done();
                    });
            });
    });
});

