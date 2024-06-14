/*
import chai from 'chai';

import chaiHttp from 'chai-http';
import { app } from '../server.js'; // Correct relative path to server.js

chai.use(chaiHttp);
const { expect } = chai;

describe('Vehicle Controller', () => {
    describe('POST /api/vehicles', () => {
        it('should add a new vehicle', (done) => {
            chai.request(app)
                .post('/api/vehicles')
                .send({ vehicleId: 'testVehicle', lat: 10, lon: 20 })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.have.property('msg', 'Vehicle added');
                    done();
                });
        });
    });

    describe('PUT /api/vehicles', () => {
        it('should update vehicle position', (done) => {
            chai.request(app)
                .put('/api/vehicles')
                .send({ vehicleId: 'testVehicle', lat: 30, lon: 40 })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('msg', 'Vehicle position updated');
                    done();
                });
        });
    });

    describe('GET /api/vehicles/:vehicleId', () => {
        it('should get vehicle position', (done) => {
            chai.request(app)
                .get('/api/vehicles/testVehicle')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('lat');
                    expect(res.body).to.have.property('lon');
                    done();
                });
        });
    });

    describe('GET /api/vehicles', () => {
        it('should get all vehicle positions', (done) => {
            chai.request(app)
                .get('/api/vehicles')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });
});
*/