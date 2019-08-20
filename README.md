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

## Lesson(8): Express Router
1. Reuse Lesson 7.
2. In package.json, edit `"main": "Lesson(8)-Express-Router/index.js",`
3. In index.js, edit `app.set('views', './Lesson(8)-Express-Router/views')`
4. In db.js, edit `FileSync('Lesson(8)-Express-Router/db.json')`
5. Listening to port: **$** `npm start`
6. Practice in folder ~~Lesson(8)-Express-Router~~

## Lesson(9): Structure MVC Model
1. Reuse Lesson 8.
2. In package.json, edit `"main": "Lesson(9)-Structure-MVC-Model/index.js",`
3. In index.js, edit `app.set('views', './Lesson(9)-Structure-MVC-Model/views')`
4. In db.js, edit `FileSync('Lesson(9)-Structure-MVC-Model/db.json')`
5. Listening to port: **$** `npm start`
6. Practice in folder ~~Lesson(9)-Structure-MVC-Model~~

## Lesson(10): Template Layout
1. Reuse Lesson 9
2. Additional Bootstrap 4
3. In package.json, edit `"main": "Lesson(10)-Template-Layout/index.js",`
4. In index.js, edit `app.set('views', './Lesson(10)-Template-Layout/views')` 
5. In db.js, edit `FileSync('Lesson(10)-Template-Layout/db.json')`
6. Listening to port: **$** `npm start`
7. Practice in folder ~~Lesson(10)-Template-Layout~~

## Lesson(11): Static Files
1. In package.json, edit `"main": "Lesson(11)-Static-Files/index.js",`
2. In index.js, edit `app.set('views', './Lesson(11)-Static-Files/views')`
3. Listening to port: **$** `npm start`
4. Practice in folder ~~Lesson(11)-Static-Files~~

## Lesson(12): Server-side Validation
1. Reuse Lesson 10 and Lesson 11
2. In package.json, edit `"main": "Lesson(12)-Server-side-Validation/index.js",`
3. In index.js, edit `app.set('views', './Lesson(12)-Server-side-Validation/views')` and `app.use(express.static('Lesson(12)-Server-side-Validation/Assets'))`
4. In db.js, edit `FileSync('Lesson(12)-Server-side-Validation/db.json')`
5. Listening to port: **$** `npm start`
6. Practice in folder ~~Lesson(12)-Server-side-Validation~~

## Lesson(13): Middleware
1. Reuse Lesson 12
2. Practice in folder ~~Lesson(12)-Server-side-Validation~~

## Lesson(14): Use Cookie and Create Page Login
1. Reuse Lesson 13
2. In package.json, edit `"main": "Lesson(13)-Page-Login/index.js",`
3. In index.js, edit `app.set('views', './Lesson(13)-Page-Login/views')` and `app.use(express.static('Lesson(13)-Page-Login/Assets'))`
4. In db.js, edit `FileSync('Lesson(13)-Page-Login/db.json')`
5. Listening to port: **$** `npm start`
6. Install cookie-parser: **$** `npm install cookie-parser --save`
7. Practice in folder ~~Lesson(13)-Page-Login~~

## Lesson(15): Convert md5
1. Reuse Lesson 14 `folder(13)-Page-Login`
2. Install md5: **$** `npm install md5 --save`
3. Practice in folder ~~Lesson(13)-Page-Login~~

## Lesson(16): Signed Cookies
1. Reuse Lesson 15 `folder(13)-Page-Login`
2. Practice in folder ~~Lesson(13)-Page-Login~~

## Lesson(17): Environment Variables
1. Reuse Lesson 16 `folder(13)-Page-Login`
2. Instal dotenv: **$** `npm install dotenv --save`
3. Practice in folder ~~Lesson(13)-Page-Login~~

# Update Content of Git