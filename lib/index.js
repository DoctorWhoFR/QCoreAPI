/**
  * @module QCOREServerLib
  *
  * fezefzefezfez
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const ServersController = require('./Controllers/ServersController');
const ListesDeServeur = require('./Models/ListesDeServeur');
const Specs = require('./Models/Specs');
const Alerts = require('./Models/Alerts');
const Backups = require('./Models/Backups');
const Schedule = require('./Models/Schedule');
const SiLeServeurEstDJAllum = require('./Models/SiLeServeurEstDJAllum');
const MError = require('./Models/MError');
const LinodeServersShow = require('./Models/LinodeServersShow');
const Result = require('./Models/Result');
const BaseStatusApi = require('./Models/BaseStatusApi');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of QCOREServerLib
    Configuration,
    Environments,
    // controllers of QCOREServerLib
    ServersController,
    // models of QCOREServerLib
    ListesDeServeur,
    Specs,
    Alerts,
    Backups,
    Schedule,
    SiLeServeurEstDJAllum,
    MError,
    LinodeServersShow,
    Result,
    BaseStatusApi,
    // exceptions of QCOREServerLib
    APIException,
};

module.exports = initializer;
