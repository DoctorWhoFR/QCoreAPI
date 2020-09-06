# Getting started

Ceci est la documentation en rapport avec QCore.

## How to Build

The generated code has dependencies over external libraries like UniRest. These dependencies are defined in the ```composer.json``` file that comes with the SDK. 
To resolve these dependencies, we use the Composer package manager which requires PHP greater than 5.3.2 installed in your system. 
Visit [https://getcomposer.org/download/](https://getcomposer.org/download/) to download the installer file for Composer and run it in your system. 
Open command prompt and type ```composer --version```. This should display the current version of the Composer installed if the installation was successful.

* Using command line, navigate to the directory containing the generated files (including ```composer.json```) for the SDK. 
* Run the command ```composer install```. This should install all the required dependencies and create the ```vendor``` directory in your project directory.

![Building SDK - Step 1](https://apidocs.io/illustration/php?step=installDependencies&workspaceFolder=QCORE%20Api-PHP)

### [For Windows Users Only] Configuring CURL Certificate Path in php.ini

CURL used to include a list of accepted CAs, but no longer bundles ANY CA certs. So by default it will reject all SSL certificates as unverifiable. You will have to get your CA's cert and point curl at it. The steps are as follows:

1. Download the certificate bundle (.pem file) from [https://curl.haxx.se/docs/caextract.html](https://curl.haxx.se/docs/caextract.html) on to your system.
2. Add curl.cainfo = "PATH_TO/cacert.pem" to your php.ini file located in your php installation. “PATH_TO” must be an absolute path containing the .pem file.

```ini
[curl]
; A default value for the CURLOPT_CAINFO option. This is required to be an
; absolute path.
;curl.cainfo =
```

## How to Use

The following section explains how to use the QCOREApi library in a new project.

### 1. Open Project in an IDE

Open an IDE for PHP like PhpStorm. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

![Open project in PHPStorm - Step 1](https://apidocs.io/illustration/php?step=openIDE&workspaceFolder=QCORE%20Api-PHP)

Click on ```Open``` in PhpStorm to browse to your generated SDK directory and then click ```OK```.

![Open project in PHPStorm - Step 2](https://apidocs.io/illustration/php?step=openProject0&workspaceFolder=QCORE%20Api-PHP)     

### 2. Add a new Test Project

Create a new directory by right clicking on the solution name as shown below:

![Add a new project in PHPStorm - Step 1](https://apidocs.io/illustration/php?step=createDirectory&workspaceFolder=QCORE%20Api-PHP)

Name the directory as "test"

![Add a new project in PHPStorm - Step 2](https://apidocs.io/illustration/php?step=nameDirectory&workspaceFolder=QCORE%20Api-PHP)
   
Add a PHP file to this project

![Add a new project in PHPStorm - Step 3](https://apidocs.io/illustration/php?step=createFile&workspaceFolder=QCORE%20Api-PHP)

Name it "testSDK"

![Add a new project in PHPStorm - Step 4](https://apidocs.io/illustration/php?step=nameFile&workspaceFolder=QCORE%20Api-PHP)

Depending on your project setup, you might need to include composer's autoloader in your PHP code to enable auto loading of classes.

```PHP
require_once "../vendor/autoload.php";
```

It is important that the path inside require_once correctly points to the file ```autoload.php``` inside the vendor directory created during dependency installations.

![Add a new project in PHPStorm - Step 4](https://apidocs.io/illustration/php?step=projectFiles&workspaceFolder=QCORE%20Api-PHP)

After this you can add code to initialize the client library and acquire the instance of a Controller class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

### 3. Run the Test Project

To run your project you must set the Interpreter for your project. Interpreter is the PHP engine installed on your computer.

Open ```Settings``` from ```File``` menu.

![Run Test Project - Step 1](https://apidocs.io/illustration/php?step=openSettings&workspaceFolder=QCORE%20Api-PHP)

Select ```PHP``` from within ```Languages & Frameworks```

![Run Test Project - Step 2](https://apidocs.io/illustration/php?step=setInterpreter0&workspaceFolder=QCORE%20Api-PHP)

Browse for Interpreters near the ```Interpreter``` option and choose your interpreter.

![Run Test Project - Step 3](https://apidocs.io/illustration/php?step=setInterpreter1&workspaceFolder=QCORE%20Api-PHP)

Once the interpreter is selected, click ```OK```

![Run Test Project - Step 4](https://apidocs.io/illustration/php?step=setInterpreter2&workspaceFolder=QCORE%20Api-PHP)

To run your project, right click on your PHP file inside your Test project and click on ```Run```

![Run Test Project - Step 5](https://apidocs.io/illustration/php?step=runProject&workspaceFolder=QCORE%20Api-PHP)

## How to Test

Unit tests in this SDK can be run using PHPUnit. 

1. First install the dependencies using composer including the `require-dev` dependencies.
2. Run `vendor\bin\phpunit --verbose` from commandline to execute tests. If you have 
   installed PHPUnit globally, run tests using `phpunit --verbose` instead.

You can change the PHPUnit test configuration in the `phpunit.xml` file.

## Initialization

### 

API client can be initialized as following.

```php

$client = new QCOREApiLib\QCOREApiClient();
```


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [ServersController](#servers_controller)
* [QCoreMinecraftController](#q_core_minecraft_controller)

## <a name="servers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ServersController") ServersController

### Get singleton instance

The singleton instance of the ``` ServersController ``` class can be accessed from the API Client.

```php
$servers = $client->getServers();
```

### <a name="listes_les_servers_de_l_utilisateur_connect_s"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.listesLesServersDeLUtilisateurConnectS") listesLesServersDeLUtilisateurConnectS

> *Tags:*  ``` Skips Authentication ``` 

> Retournes une liste qui contient les serveurs actuellements achetés par l'utilisateur.


```php
function listesLesServersDeLUtilisateurConnectS($authorization)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | L'id de l'utilisateur |



#### Example Usage

```php
$authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

$result = $servers->listesLesServersDeLUtilisateurConnectS($authorization);

```


### <a name="get_allume_un_serveur"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.getAllumeUnServeur") getAllumeUnServeur

> *Tags:*  ``` Skips Authentication ``` 

> Cette commande allume un serveur, retourne un message d'erreur si la machine est déjà lancé ou affiche simplement 200 si le lancement et ok.


```php
function getAllumeUnServeur(
        $id,
        $authorization)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | L'id du serveur à lancé |
| authorization |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```php
$id = 21945158;
$authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

$result = $servers->getAllumeUnServeur($id, $authorization);

```


### <a name="get_linode_servers_show"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.getLinodeServersShow") getLinodeServersShow

> *Tags:*  ``` Skips Authentication ``` 

> show info for an linode server


```php
function getLinodeServersShow(
        $id,
        $authorization)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| authorization |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```php
$id = 21945288;
$authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

$result = $servers->getLinodeServersShow($id, $authorization);

```


### <a name="get_stop_un_serveur"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.getStopUnServeur") getStopUnServeur

> *Tags:*  ``` Skips Authentication ``` 

> stop a linode server


```php
function getStopUnServeur(
        $id,
        $authorization)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | L'id du serveur |
| authorization |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```php
$id = 21945288;
$authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

$servers->getStopUnServeur($id, $authorization);

```


### <a name="get_base_linode_api"></a>![Method: ](https://apidocs.io/img/method.png ".ServersController.getBaseLinodeApi") getBaseLinodeApi

> *Tags:*  ``` Skips Authentication ``` 

> Base url, return personal linode info


```php
function getBaseLinodeApi($authorization)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | L'id de l'utilisateur, pour le développement: 7ljr0lDUETeCWbPDJLOuFUkPmr42 |



#### Example Usage

```php
$authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';

$result = $servers->getBaseLinodeApi($authorization);

```


[Back to List of Controllers](#list_of_controllers)

## <a name="q_core_minecraft_controller"></a>![Class: ](https://apidocs.io/img/class.png ".QCoreMinecraftController") QCoreMinecraftController

### Get singleton instance

The singleton instance of the ``` QCoreMinecraftController ``` class can be accessed from the API Client.

```php
$qCoreMinecraft = $client->getQCoreMinecraft();
```

### <a name="create_mc_start"></a>![Method: ](https://apidocs.io/img/method.png ".QCoreMinecraftController.createMcStart") createMcStart

> *Tags:*  ``` Skips Authentication ``` 

> Launch a minecraft server


```php
function createMcStart(
        $authorization,
        $serverId)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | TODO: Add a parameter description |
| serverId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```php
$authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';
$serverId = 21945504;

$qCoreMinecraft->createMcStart($authorization, $serverId);

```


### <a name="create_mc_stop"></a>![Method: ](https://apidocs.io/img/method.png ".QCoreMinecraftController.createMcStop") createMcStop

> *Tags:*  ``` Skips Authentication ``` 

> Stop a minecraft server


```php
function createMcStop(
        $authorization,
        $serverId)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | TODO: Add a parameter description |
| serverId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```php
$authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';
$serverId = 21945504;

$result = $qCoreMinecraft->createMcStop($authorization, $serverId);

```


### <a name="create_mc_details"></a>![Method: ](https://apidocs.io/img/method.png ".QCoreMinecraftController.createMcDetails") createMcDetails

> *Tags:*  ``` Skips Authentication ``` 

> get details about a minecraft


```php
function createMcDetails(
        $authorization,
        $serverId)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | TODO: Add a parameter description |
| serverId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```php
$authorization = '7ljr0lDUETeCWbPDJLOuFUkPmr42';
$serverId = 21945504;

$result = $qCoreMinecraft->createMcDetails($authorization, $serverId);

```


[Back to List of Controllers](#list_of_controllers)



