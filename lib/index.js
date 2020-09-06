/**
  * @module QCOREApiLib
  *
  * Ceci est la documentation en rapport avec QCore.
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const ServersController = require('./Controllers/ServersController');
const QCoreMinecraftController = require('./Controllers/QCoreMinecraftController');
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
const McStop = require('./Models/McStop');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of QCOREApiLib
    Configuration,
    Environments,
    // controllers of QCOREApiLib
    ServersController,
    QCoreMinecraftController,
    // models of QCOREApiLib
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
    McStop,
    // exceptions of QCOREApiLib
    APIException,
};

module.exports = initializer;
