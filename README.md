# todo-sut
A collection of todo-mvc apps + server, intended as a System-Under-Test (SUT) for automation tools. 

Currently, includes 
1. An express todomvc server: https://github.com/sramam/todomvc-server/examples/expressjs, which is cherry picked from https://github.com/kouphax/todomvc-server/trunk/examples/expressjs, along with modifications that allow the application to work with the angularjs app.

2. An angularjs todomvc app: https://github.com/sramam/todomvc/examples/angularjs, which is also cherry picked from https://github.com/tastejs/todomvc/trunk/examples/angularjs, updated to work with express 3.

# Install

    npm init
    npm install https://github.com/sramam/todo-sut

# Run

    ./node_modules/.bin/todo-sut.js


visit
-  http://localhost:3000/angularjs/ or
-  http://localhost:3000/angulari18n-test/index.html
