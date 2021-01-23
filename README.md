# blrb - Full Stack Blog Application Frontend 

<strong>Check out the app here! <a href="https://blog-project-frontend.herokuapp.com/">blrb</a></strong>
<br>
<br>
<strong><underline>Frontend Tech Stack:</strong></underline>
Angular11, TypeScript, Javascript, Webstorage Library, Toastr Library, HTML5, Angular Bootstrap, and CSS3.  Amazon S3 configuration handles upload and retrieval of images for blog posts. 
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
<strong>Endpoints:</strong>
`/signup` Register a new account. 
`/login` Login for an existing user. 
`/logout` Logout for a signed in user. 
`/createpost` Create a post with an image. 
`/fullpost/{id}` View that displays a full blog post.
`/home` Dashboard view that displays all posts on the platform and tag bar
`/myPosts` View that displays all of a logged in users posts.
`/search/{tag}` View that displays search by tag results in nav bar search bar
<br>
<br>
The application is deployed to Heroku with a MySQL database instance hosted via Amazon RDS.
<br>
<br>

