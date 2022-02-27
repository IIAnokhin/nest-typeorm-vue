nest-typeorm-vue
Build a simple project using Nest.js, Vue.js and TypeORM

Getting Started This prototype is divided into two separate sections. Namely the Backend ( Built with Nest.js) and the frontend ( Built with Vue.js ).

Backend Change directory into the backend cd backend Install backend dependencies npm install

Mysql Ensure that you have Mysql installed on your machine before running the application. Start mongoDB:

sudo service mysql start

Run the application Open another terminal and still within the blog-backend project directory run the application with:

npm run start:dev This will start the backend application on port 3000.

Frontend Open another terminal from the nest-vue-project and navigate to the blog-frontend folder to setup the frontend

Frontend dependencies cd frontend npm install

Run the frontend app npm run serve

Test the application Finally open your browser and view the application on http://localhost:8080