# blrb - Full Stack Blog Application Frontend 

Frontend Tech Stack includes Angular11, TypeScript, Javascript, Webstorage Library, Toastr Library, HTML5, Angular Bootstrap, and CSS3.  Amazon S3 configuration handles upload and retrieval of images for blog posts. 
<br>
<br>
AuthInterceptor implements HTTPInterceptor and handles registration and authentication flow with the JSONWebToken and the Bearer scheme, RouteGuard protects pages with restricted access, and ErrorHandlingInterceptor implements HTTPInterceptor to handle errors. Authentication tokens are stored in local storage via Webstorage.
<br>
<br>
All form fields incorporate form validation with RegEx. Forms that require input utilize autofocus to turn red if a user has clicked but not inputted information.
<br>
<br>
Popup notifcations are implenented via Toastr JS library for success and error messages.
<br>
<br>
Users are able to register an account, log in, view all blog posts, view their specific blog posts, search for posts by tag, click tag side bar to view all posts associated to a specific tag, create a blog post with an image, and log out. A user is unable to register for an account that already exists, as well as log into an existing account with incorrect credentials. 
<br>
<br>
The application is deployed to Heroku with a MySQL database instance hosted via Amazon RDS.
<br>
<br>
Check out the app here! <a href="https://blog-project-frontend.herokuapp.com/">blrb</a>
