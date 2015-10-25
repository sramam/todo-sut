# todo-sut
A collection of todo-mvc apps + server, intended as a System-Under-Test (SUT) for automation tools. 

Currently, includes 
1. An express todomvc server: https://github.com/sramam/todomvc-server/examples/expressjs, which is cherry picked from https://github.com/kouphax/todomvc-server/trunk/examples/expressjs, along with modifications that allow the application to work with the angularjs app.

2. An angularjs todomvc app: https://github.com/sramam/todomvc/examples/angularjs, which is also cherry picked from https://github.com/tastejs/todomvc/trunk/examples/angularjs, updated to work with express 3.

# Install

    git clone https://github.com/sramam/todo-sut todo-sut
    cd todo-sut
    npm install
    # The angularjs app is a stand alone sub project
    # we'll have to install it's dependencies too.
    cd public/angularjs
    npm install
    cd ../..

# Run
    
    node app.js
    # visit http://localhost:3000/angularjs/
