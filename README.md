# Blogging application - ECE Webtech project

- Our website is for food lovers. It features recipes from all over the world, sorted by category (Meat, Vegetarian, Pasta, Side ...).
Users can create an account or log in with GitHub (in which case their Gravatar will be automatically synchronized). Once connected, they in turn can share their favorite recipes by posting an article on the site, including a photo of the recipe, ingredients, measurements and steps to follow, and in the best case a youtube link to a video of the recipe. Users can also edit their articles, delete them...
On the site, all visitors can look at the recipes and post a comment on a recipe they like, also giving it a 5-star rating.
We also have a "Random Meal" page which generates a random recipe when a visitor runs out of ideas for the evening meal. Two categories are presented: random meals among the site's recipes, and random meals among users' recipes. 
Finally, for admins, it's possible to access all messages that have been sent on the site's "Contact Us" page. 
We hope you enjoy a culinary journey through this site :D

- To launch the site locally on your machine, simply follow these steps: 
1. Clone the repo on your machine
2. Create a ``.env.local`` file in which you copy the contents of the ".env.example" file and add the environment variables (the URL of the Supabase database and the secret key).
3. Go to the ``app`` folder on the repo
4. Run the ``npm install`` command
5. Then the command ``npm run build``.
6. And finally ``npm run start``.
The site will then be deployed on one of your localhost addresses! 


## Deliverables

- Vercel URL: https://ece-webtech-2023-fall-gr04-09.vercel.app/
- Supabase project URL: https://supabase.com/dashboard/project/etvejangzykpgoboshyc

## Authors
 
- SIALELLI Téo
- DALMASSO Hugo
- GOULAMHOUSSEN Ines

## Evaluation

### Mandatory Tasks

- **Naming convention**

* Grade: 2

* Comments: We've tried to give consistent names and respect naming conventions for project folders, pages or even variables.


- **Project structure**

* Grade: 2

* Comments: We have followed the structure suggested in the template: we have a folder called "app" and another called "supabase". 
The app folder contains the various pages of our site, as well as these different components. Additional pages linked to a main page - for example, pages allowing you to modify an article, view it, etc. - are stored in a folder called articles. 

* Task feedback: It was interesting to learn how to structure a project in this way, because in a project where several people use the code, it's important that the structure is clear and precise, so that everyone understands it.

- **Git usage**

* Grade: 2

* Comments: Our commits respect the convention. We have tried to squash commits with similar tasks even though we still have a high number of commits.

* Task feedback: Using git for this project allowed us to really familiarize ourselves with basic git commands, rename comits ...

- **Code quality**

* Grade: 3.5

* Comments: Our code is quite clean, well indented and easily understood by an external user.

- **Design, UX, and content**

* Grade: 3.5

* Comments: Our web site is pleasant to visit, the design is rather uncluttered and the navigation is intuitive. The site is a little less attractive on the phone, perhaps the site's responsiveness could be improved to suit all screen types.

* Task feedback: It's great to be able to modify the design of a site "instantly" with the "npm run dev" command and see all the changes take place directly. 

- **Home page**

* Grade: 2

* Comments: The home page is rather pretty. It briefly explains in one sentence the concept of the site: find a recipe you like. The carousel gives a pictorial overview of the recipes available on the site. Our site logo is also displayed in the top left of the header and in the top right of the footer. 

- **Navigation**

* Grade: 2

* Comments: We implement a navigation bar into the header. Users can naviguate through the website main pages from anywhere by using this navigation bar.


- **Login and profile page**

* Grade: 4

* Comments: Users can login with their own GitHub account or they can create an accout with an email then use thi email to sign in.

- **Post creation and display**

* Grade: 6

* Comments: Authenticated users can create posts from their profile page. They must fill in the text fields and validate the creation of the article.

For Displaying articles across article pages. There are 2 types of articles, those from the API and others that users can create and store in a Supabase table. Once the user clicks on an article the page opens with the details of this article.


- **Comment creation and display**

* Grade: 4

* Comments: User authentificated or not can leave a comment on articles by filling the comment fields on the article page. If the user is authentificated he can modify or delete the comment that he created


- **Post modification and removal**

* Grade: 4

* Comments: User, by going to his profile page, can access to a list of articles he has created. He can then modify or delete them.

- **Search**

* Grade: 6

* Comments: The search bar perform a query to the supabase table which contains the articles list. Then depending on what the user write into the search bar, it display the results. The user can click on the article's picture to get to the page


- **Use an external API**

* Grade: 2

* Comments: We choose TheMealDB as API to enrich our website content with many recipes from different countries.

- **Resource access control**

* Grade: 6

* Comments: Our security is quite optimal. Only an authenticated user can create an article. The latter, in his profile page, can only modify, delete or view articles. On the other hand, any visitor to the site, whether authenticated or not, can leave a comment on an article.

- **Account settings**

* Grade: 3.5

* Comments: When a user logs in, his profile page gives him access to his e-mail address, his profile photo (if he has logged in with his GitHub account and linked Gravatar) and his status on the site. However, these data cannot be modified from the site. 

- **WYSIWYG integration**

* Grade: 2

* Comments: What the user requests to be displayed is well displayed in the article when it is posted.

- **Gravatar integration**

* Grade: 2

* Comments: We implemented gravatar and we displayed user's profile picture thanks to a compoment using gravatar's functions

* Task feedback: It's simple to implement and this allows you to personalize the site in your image

- **Light/dark mode**

* Grade: 2

* Comments: Our Header navbar has a night/sun button to switch between day and night mode. It remains persistent when navigating between pages. 

### Bonus Tasks

- **Rate articles**

* Grade: 2

* Comments: A user authentificated or not can leave a comment and a rate from 1 to 5 represented by stars to give a feedback to the article creator

- **Admin page**

* Grade: 4

* Comments: When an admin logs on to the site, he/she has access to an admin page that allows him/her to view the list of messages that all site visitors have sent from the "Contact Us" page. This allows the admin to see the questions and/or comments posted. The message is displayed with the sender's first name, last name and e-mail address. 

## Miscellaneous

### Course Feedback

- The web course proved to be immensely enriching. Initially, the thought of creating a sophisticated website seemed daunting. However, as the semester progressed, the various labs and sessions provided us with valuable insights and practical skills. Today, looking back, it's quite astonishing to realize the extent of what we've learned and what we're now capable of achieving. The course not only equipped us with technical know-how but also instilled a sense of confidence in our abilities to tackle complex web projects.

### Project Reuse

- We authorize the professors to use our project as an example for the next year students.
