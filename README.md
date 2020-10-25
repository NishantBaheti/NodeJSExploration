# NodeJSExploration

### global

All these are present in window object

- console.log();
- setTimeout();
- clearTimeout();
- setInterval();
- clearInterval();

### module wrapper function

- (function(exports, require, module, **filename, **dirname))
- is actually wrapped around all the modules

### npm

require module take under consideration that arg is

- core module
- file of folder(with index.js)
- inside node_module

| Command           |
| ----------------- |
| npm init          |
| npm install       |
| npm list          |
| npm view          |
| npm outdated      |
| npm update        |
| npm uninstall     |
| npm adduser       |
| npm login         |
| npm publish       |
| npm version minor |

## dev-dependencies

only for development env dependency

## Middleware function

A middleware function is a function that takes req and either gives a response or pass it to another middleware function.

## Handing Asynchronous code

1. Callbacks
1. Promises
1. Async/ Await

### Callbacks Hell / X-mas tree problem

- Callbacks can create nested structure that can go very deep based on application complexity. eg-

        getUser(1, (userObj) => {
            console.log(userObj);

                getRepositories(userObj.username, (repoObj) => {
                    console.log(repoObj);
                });
        });

### Promises

- Holds the eventual result of an asynchronous operation
- It will be in pending state
- Now Promise can be either fulfilled successfully and a result is returned
- Or It can be in a rejected state and error is returned
