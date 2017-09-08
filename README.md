# task-mgmt-docker
This is a simple task management app made with Node.js + Express + Vue.js. It can run locally or in a Docker container.

### How to Run:
1) Clone the repository with `git clone https://github.com/p-cherukuri/task-mgmt-docker.git` or by downloading the ZIP file.
2) `cd task-mgmt-docker/services/tasks` -
This is where the tasks app resides, with the Express server implementation being in `server.js`. The user interface is in the `ui` folder, and the `api` and `config` folder contain the API routes and throwaway database config respectively.
3) `cd ui` to go into the root user interface folder, where the Vue app is. Here, first run `npm install` to build all the dependencies needed to run the UI properly.
4) Use `npm run dev` to see a local development version at http://localhost:8080,
or use `npm run build` to build the static production files to be served in Express when running on Docker.
5) `cd ..` to go back to the root `tasks` directory. I created a custom NPM build script that is used by running `npm run build`.
This builds a Docker image using the custom Dockerfile I wrote, and then immediately runs the Docker container on port `8000`.
To run a local development version of Express,
run `nodemon`.
6) After running the build script, the app should be up and running at `http://localhost:8000` - this is the Vue app hosted on Express running in the Docker container.
7) The user interface lets you create a task with a description and due date, and then either mark it as complete or delete it. I implemented LocalStorage to allow the task list state to persist as long as the browser session data has not been cleared.

### Issues:
1) I also tried to implement a data store with MongoDB - while the data store and API do work, 
I was unsuccessful in getting it to work through a build due to CORS issues I couldn't figure out how to solve. 
The API routes worked with Postman testing, however.
2) This was my first time learning how to run an application on Docker on my own - 
I read about the usefulness of Docker Compose with running multi-container applications, but I couldn't set it up properly here.
