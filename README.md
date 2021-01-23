# blrb - Full Stack Blog Application Frontend 

## Check out the app here! <a href="https://blog-project-frontend.herokuapp.com/">blrb</a>

## Frontend Tech Stack:
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
## Endpoints:
`/signup` Register a new account.<br>
`/login` Login for an existing user.<br>
`/logout` Logout for a signed in user.<br>
`/createpost` Create a post with an image.<br>
`/fullpost/{id}` View that displays a full blog post.<br>
`/home` Dashboard view that displays all posts on the platform and tag bar.<br>
`/myPosts` View that displays all of a logged in users posts.<br>
`/search/{tag}` View that displays search by tag results in nav bar search bar.<br>
<br>
<br>
The application is deployed to Heroku with a MySQL database instance hosted via Amazon RDS.
<br>
<br>
## Future Feature Roadmap:
Update User Details<br>
Update Post<br>
Delete Post<br>
Add comments<br>
Edit comments<br>
Delete comments<br>
Like and Dislike Posts<br>
Homepage ranking based on most popular posts<br>

