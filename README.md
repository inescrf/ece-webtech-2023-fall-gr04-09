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

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Project structure**

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Git usage**

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Code quality**

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Design, UX, and content**

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Home page**

* Grade: 2

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Navigation**

* Grade: 2

* Comments: We implement a navigation bar into the header. Users can naviguate through the website main pages from anywhere by using this navigation bar.

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Login and profile page**

* Grade: 4

* Comments: Users can login with their own GitHub account or they can create an accout with an email then use thi email to sign in.

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Post creation and display**

* Grade: 6

* Comments: Authenticated users can create posts from their profile page. They must fill in the text fields and validate the creation of the article.

For Displaying articles across article pages. There are 2 types of articles, those from the API and others that users can create and store in a Supabase table. Once the user clicks on an article the page opens with the details of this article.

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Comment creation and display**

* Grade: 4

* Comments: User authentificated or not can leave a comment on articles by filling the comment fields on the article page. If the user is authentificated he can modify or delete the comment that he created

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Post modification and removal**

* Grade: 4

* Comments: User, by going to his profile page, can access to a list of articles he has created. He can then modify or delete them.

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Search**

* Grade: 6

* Comments: The search bar perform a query to the supabase table which contains the articles list. Then depending on what the user write into the search bar, it display the results. The user can click on the article's picture to get to the page

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Use an external API**

* Grade: 2

* Comments: We choose TheMealDB as API to enrich our website content.

* Task feedback:

- **Resource access control**

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Account settings**

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **WYSIWYG integration**

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

- **Gravatar integration**

* Grade: 2

* Comments: We implemented gravatar and we displayed user's profile picture thanks to a compoment using gravatar's functions

* Task feedback: It's simple to implement and this allows you to personalize the site in your image

- **Light/dark mode**

* Grade: 2

* Comments: **How did you implement the task**

* Task feedback: **Facultative, how did you find the task (difficulty, pertinence...)**

### Bonus Tasks

- **Rate articles**

* Grade: 2

* Comments: A user authentificated or not can leave a comment and a rate from 1 to 5 represented by stars to give a feedback to the article creator

- ***Task title 2***

* Grade: **How many points you think you deserve**

* Comments: **How did you implement the task**

## Miscellaneous

### Course Feedback

- *Your feedback about the course, what you liked, what you disliked, what you missed...**

### Project Reuse

- We authorize the professors to use our project as an example for the next year students (facultative).
