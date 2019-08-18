# Course Nodejs Web Server Using Express
***Begin Course Nodejs to Express***
* Create: `npm init`

## Lesson(1): Install Express
1. Install Express: **$** `npm install express --save`
2. Practice in folder ~~Lesson(1)-install-express~~.

## Lesson(2): Template Engines
1. Introduction to Template Engines:
    * EJS
    * Mutache
    * HandlebarsJS
    * PUG (jade)
 **At lesson**, i will using [PUG](https://pugjs.org/api/getting-started.html) `Template Engine` for Course.
2. Install Express: **$** `npm install pug --save`
3. Practice in folder ~~Lesson(1)-Template-Engines~~.

## Lesson(3): Query Paramaters
1. Create a Form in views at folder ~~Lesson(3)-Query-Paramaters~~.
2. Create action for Form in TestSearch.pug, using search the values in List
3. Practice in folder ~~Lesson(3)-Query-Paramaters~~.

## Lesson(4): Post Method
1. Install bodyParser: **$** `npm install body-parser --save`
2. Using the files in lessin (3) again.
3. Create a view AddValue.pug and using [Post](http://expressjs.com/en/5x/api.html#express) `Method` submit values and save.
4. Practice in folder ~~Lesson(4)-Post-Method~~

## Lesson(5): Install Nodemon for Dev
1. Install nodemon: **$** `npm install --save-dev nodemon`
2. In package.json, additional `"start": "nodemon"` at `"scripts":` and edit `"main": "Lesson(5)-Use-Npm-Nodemon/index.js",`
3. In index.js, edit `app.set('views', './Lesson(6)-Database(lowdb)/views')`
4. Listening to port: **$** `npm start` 
5. Practice in folder ~~Lesson(5)-Use-Npm-Nodemon~~

## Lesson(6): Using Database(Lowdb) in project
1. Install lowdb: **$** `npm install lowdb --save`
2. In package.json, edit `"main": "Lesson(6)-Database(lowdb)/index.js",`
3. In index.js, edit `app.set('views', './Lesson(6)-Database(lowdb)/views')`
4. Listening to port: **$** `npm start`
5. Practice in folder ~~Lesson(6)-Database(lowdb)~~

## Lesson(7): View details
1. Reuse Lesson 6 and additional ViewDetails.pug
2. Install shortid: **$** `npm install shortid --save`, Using Auto create id
3. In package.json, edit `"main": "Lesson(7)-View-Details/index.js",`
4. In index.js, edit `app.set('views', './Lesson(7)-View-Details/views')` and `FileSync('Lesson(7)-View-Details/db.json')`
5. Listening to port: **$** `npm start`
6. Practice in folder ~~Lesson(7)-View-Details~~

## Lession(8): Express Router
1. Reuse Lesson 7.
2. In package.json, edit `"main": "Lesson(8)-Express-Router/index.js",`
3. In index.js, edit `app.set('views', './Lesson(8)-Express-Router/views')` and `FileSync('Lesson(8)-Express-Router/db.json')`
4. Listening to port: **$** `npm start`
5. Practice in folder ~~Lesson(8)-Express-Router~~

## Lession(9): Structure MVC Model
1. Reuse Lesson 8.
2. In package.json, edit `"main": "Lesson(9)-Structure-MVC-Model/index.js",`
3. In index.js, edit `app.set('views', './Lesson(9)-Structure-MVC-Model/views')` and `FileSync('Lesson(9)-Structure-MVC-Model/db.json')`
4. Listening to port: **$** `npm start`
5. Practice in folder ~~Lesson(9)-Structure-MVC-Model~~

# Update Content of Git