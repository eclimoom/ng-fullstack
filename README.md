# jiong


When the dependencies are ready, you'll be able to run the watcher for file changes and start the server, by either running just:
```shell
$ npm run dev
```
Or running gulp and npm start separated:
```shell
$ npm start
$ npm run watch
```

Then we deploy it to Server:
```shell
$ npm run build-dist
```



The first step is the ensure you have your development environment setup properly. If you do not have [[Node|Getting-Started#using-node]], [[TypeScript | Getting-started#using-typescript]] or [[Go|Getting-Started#using-go]] installed, please see the linked section. 

First, you'll have to download the generator (if you are on a mac, you may need to run this as a `sudo` command to avoid permissions errors):

```shell
$ npm i -g generator-ng-fullstack
```

If you do not have [`Yeoman`](http://yeoman.io/) installed, you will have to run (again if you are on a mac, you may need to run this as a `sudo` command to avoid permissions errors):

```shell
$ npm install -g yo
```

> Make Sure you have all the dependencies installed for the technologies you have selected, we detail these in the sections at the bottom of this page.

Then, you'll have to go to the folder that'll be the root of your application and run:

```shell
$ yo ng-fullstack
```

You'll see a few questions, some are for configuration (package.json, readme, badges for travis and coveralls, etc) and others are for the stack you'll work with. To answer the questions, use the up and down arrows on your keyboard and hit enter on your answer. Here are the questions:

    What is the name of your app?
    What is your username on Github?

    What stack do you want? Full, client or server?
       fullstack
       client
       server

    What do you want in server side?
       node
       go
    What do you want in client side?
       ng1
       ng2
    What transpiler do you want to use in server side?
       node
       babel
       typescript

NB: ng1 and ng2 refer to AngularJS 1.x and AngularJS 2.x respectively.

After answering all the questions, the generator will create all the files the stack needs (the todo application files and deps) and it will start to download the dependencies and devDependencies.

While the dependencies are being installed, you might want to run mongod, so your db is up. If you don't have MongoDB installed, see [here](https://www.mongodb.org/). To do this, open a new terminal window and run:

```shell
$ mongod
```

In case you don't have mongoDB set up correctly, take a look [here](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)
Depending on your installation and opperating system, your path may be different, but find the file called mongod.exe and run it, the database should then be set up and listening on port `27017`.

When the dependencies are ready, you'll be able to run the watcher for file changes and start the server, by either running just: 

```shell 
$ npm run dev
```

Or running gulp and npm start separated:

```shell
$ npm start
```

```shell
$ npm run watch
```

Your Todo sample app should now be running at [http://localhost:3000/](http://localhost:3000/).


### Result:
When the generator is done, you should find this structure in your project directory:

```
├── client
│    └── dev
│        └── todo 
│            ├── components 
│            ├── services
│            ├── templates
│            └── styles
│
├── server
│    ├── api
│    │   ├── todo
│    │   │     ├── dao
│    │   │     ├── models
│    │   │     ├── controllers
│    │   │     └── routes
│    │   │
│    ├── commons  
│    │   └── static 
│    │    
│    │
│    ├── config   
│    ├── constants
│    └── routes
│    
└── tests
     ├── client    
     │   └── todo
     │        ├── services
     │        ├── models
     │        └── services
     │   
     ├── e2e
     │   └── _helpers
     │   
     └── server
         ├── _helpers
         └── todo
              ├── dao
              ├── models
              ├── controllers
              └── routes

```

# Using node

You'll need to install [node](https://github.com/nodejs/node), the website contains installers for Windows, OSX and Linux. It has great documentation to help you with any issues you run into.

### Dependencies

You'll need to install globally the following modules:

- istanbul;
- mocha;
- babel;
- gulp-cli.

You can run:

    $ npm i -g istanbul mocha babel gulp-cli

To install them globally, or if you just want the tools to be available to your projects current directory, cd to that directory and run:

    $ npm i istanbul mocha babel gulp-cli

Now you are ready to start with the generator set up.
