# react-vrpc example
This repo is an example project that shows how to setup a
[react-vrpc](https://github.com/JacobTheEvans/react-vrpc) client to execute
[remote procedure calls](https://en.wikipedia.org/wiki/Remote_procedure_call)
against a running node agent. The node agent can be replaced with any other
supported [VRPC](https://github.com/bheisen/vrpc) language such as python or C++
and examples of how to do so can be found in the VRPC main repo.

# Reference Documentation
* [VRPC documentation]()
* [react-vrpc documentation]()


# How to run
To start this example application do the following:

Open a terminal and go the react-vrpc-example folder
```bash
cd agent
./start.sh
```

Open a terminal and go the react-vrpc-example folder
```bash
cd frontend
npm run start
```

Then open your browser and go to `http://localhost:3000`

# Example Walk through
## agent
The agent folder is where you will find the remote agent that the frontend
website will make remote procedure calls to. It contains the following items

### /src
The src folder contains the main src code of the the Todo list application. It
contains a Todo class (`Todo.js`) which has the standard
[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) methods.
It also contains a Store class (`Store.js`) where all Todo items are stored.

### /test
The test folder contains mocha and chai unit tests for the Todo list
application. These tests can be ran by running `npm run test` inside of your
terminal.

### binding.js
This file contains the VRPC binding file which registers the Todo class so
agents (react app) can create and use a Todo instance on the agent
host system from there running code (react app).


### start.sh
This file runs the vrpc-agent binary with some preset defaults to be used with
the frontend react app. To learn more how to use the vrpc-agent binary checkout
the [documentation for VRPC](). Once this script is ran the frontend will be
able to make rpc calls to the running agent.

## frontend
The frontend folder is where you will find the react app that makes remote
procedure calls to the agent. It is important to realize it makes a remote
instance on the agents, calls methods on that instance and then it pipped the
result. That means that even on refresh of the frontend todo items persist just
like they would with an http server because the code is running on the agent
not in the browser.
