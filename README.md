# Getting started

Ceci est la documentation en rapport avec QCore.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=QCORE%20Api-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=QCORE%20Api-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `QCOREApiLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=QCORE%20Api-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=QCORE%20Api-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=QCORE%20Api-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=QCORE%20Api-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  QCORE ApiController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=QCORE%20ApiController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [ServersController](#servers_controller)
* [QCoreMinecraftController](#q_core_minecraft_controller)

## <a name="servers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ServersController") ServersController

### Get singleton instance

The singleton instance of the ``` ServersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ServersController;
```

### <a name="listes_les_servers_de_l_utilisateur_connect_s"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.listesLesServersDeLUtilisateurConnectS") listesLesServersDeLUtilisateurConnectS

> *Tags:*  ``` Skips Authentication ``` 

> Retournes une liste qui contient les serveurs actuellements achetés par l'utilisateur.


```javascript
function listesLesServersDeLUtilisateurConnectS(authorization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | L'id de l'utilisateur |



#### Example Usage

```javascript

    var authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

    controller.listesLesServersDeLUtilisateurConnectS(authorization, function(error, response, context) {

    
    });
```



### <a name="get_allume_un_serveur"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.getAllumeUnServeur") getAllumeUnServeur

> *Tags:*  ``` Skips Authentication ``` 

> Cette commande allume un serveur, retourne un message d'erreur si la machine est déjà lancé ou affiche simplement 200 si le lancement et ok.


```javascript
function getAllumeUnServeur(id, authorization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | L'id du serveur à lancé |
| authorization |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 21945158;
    var authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

    controller.getAllumeUnServeur(id, authorization, function(error, response, context) {

    
    });
```



### <a name="get_linode_servers_show"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.getLinodeServersShow") getLinodeServersShow

> *Tags:*  ``` Skips Authentication ``` 

> show info for an linode server


```javascript
function getLinodeServersShow(id, authorization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| authorization |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 21945288;
    var authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

    controller.getLinodeServersShow(id, authorization, function(error, response, context) {

    
    });
```



### <a name="get_stop_un_serveur"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.getStopUnServeur") getStopUnServeur

> *Tags:*  ``` Skips Authentication ``` 

> stop a linode server


```javascript
function getStopUnServeur(id, authorization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | L'id du serveur |
| authorization |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 21945288;
    var authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

    controller.getStopUnServeur(id, authorization, function(error, response, context) {

    
    });
```



### <a name="get_base_linode_api"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.getBaseLinodeApi") getBaseLinodeApi

> *Tags:*  ``` Skips Authentication ``` 

> Base url, return personal linode info


```javascript
function getBaseLinodeApi(authorization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | L'id de l'utilisateur, pour le développement: 7ljr0lDUETeCWbPDJLOuFUkPmr42 |



#### Example Usage

```javascript

    var authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

    controller.getBaseLinodeApi(authorization, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="q_core_minecraft_controller"></a>![Class: ](https://apidocs.io/img/class.png ".QCoreMinecraftController") QCoreMinecraftController

### Get singleton instance

The singleton instance of the ``` QCoreMinecraftController ``` class can be accessed from the API Client.

```javascript
var controller = lib.QCoreMinecraftController;
```

### <a name="create_mc_start"></a>![Method: ](https://apidocs.io/img/method.png ".QCoreMinecraftController.createMcStart") createMcStart

> *Tags:*  ``` Skips Authentication ``` 

> Launch a minecraft server


```javascript
function createMcStart(authorization, serverId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | TODO: Add a parameter description |
| serverId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';
    var serverId = 21945504;

    controller.createMcStart(authorization, serverId, function(error, response, context) {

    
    });
```



### <a name="create_mc_stop"></a>![Method: ](https://apidocs.io/img/method.png ".QCoreMinecraftController.createMcStop") createMcStop

> *Tags:*  ``` Skips Authentication ``` 

> Stop a minecraft server


```javascript
function createMcStop(authorization, serverId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | TODO: Add a parameter description |
| serverId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';
    var serverId = 21945504;

    controller.createMcStop(authorization, serverId, function(error, response, context) {

    
    });
```



### <a name="create_mc_details"></a>![Method: ](https://apidocs.io/img/method.png ".QCoreMinecraftController.createMcDetails") createMcDetails

> *Tags:*  ``` Skips Authentication ``` 

> get details about a minecraft


```javascript
function createMcDetails(authorization, serverId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | TODO: Add a parameter description |
| serverId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';
    var serverId = 21945504;

    controller.createMcDetails(authorization, serverId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



