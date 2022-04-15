<h1 align="center">
  Twitto    
</h1>
<h4 align="center">
  "What's happening?". A Twitter-like app.
</h4>

## 1 - Intro

This app has the same fundamental features as Twitter. It implements only the UI interface and uses the localstorage to simulate responses, like a fake API.

## 2 - Features

### 2.1 - Home page
✅ The user should be able to see posts in the feed (his/her and others'), by default.

✅ The user should be able to write new posts from the homepage.


### 2.2 - User profile page
✅ The user should be able to see the following data:
- Username;
- Date joined Twitto, formatted as such: "March 25, 2021";
- Number of followers;
- Number following;
- Count of posts the user has made.

✅ The user should be able to see if he/she follows the other user or not.

✅ The user should be able to follow the other user by clicking “Follow” on their profile.

✅ The user should be able to unfollow the other user by clicking “Unfollow” on their profile.

✅ This page should be a modal over the home page.

### 2.3 - Users
✅ The user should be able to use the entire application without authenticating.

✅ The user should not be able to create/edit/delete other users. (Users must be read-only)

✅ The system should present usernames that are composed only of alphanumeric characters.

✅ The system should present usernames that are 14 characters maximum.

### 2.4 - Posts

✅ The user should be able to create posts composed only by text.

✅ The user should not be able to update or delete his/her post.

✅ The user should be able to write original posts.

✅ The user should be able to write posts that contain a maximum of 777 characters.

✅ The user should be able to see how many characters he/she has left, when writing a post.

## 3 - A New Feature

In this section I describe a situation in which a fictional Product Manager (PM) would present me a new feature:

Product Manager - "I call this new feature 'reply-to-post', (it's a lot like Twitter's. These are regular posts that use '@ mentioning' at the beginning to indicate that it is a reply directly to a post. Reply posts should only be shown in a new, secondary feed on the user profile called 'Posts and Replies' where all original posts and reply posts are shown. They should not be shown in the homepage feed.'

Below I describe what would be my questions for the new "reply-to-post" feature. For each question I wrote what are my assumptions for the PM's answers.

### 3.1 - Questions and Answers Assumptions

- How does the user start a reply-to-post?<br>
**PM Answer:** must exist a “reply” button for this.

- What is the shape and position of the “reply” button?<br>
**PM Answer:** it is a balloon icon and should be in the lower left corner of a post card.

- Where can I find this icon? Will the design team provide me or can I look for some on my own?<br>
**PM Answer:** the design team will provide.

- After clicking the button, should a new modal with a text input field pop-up or is the text input field the same used for common posts?<br>
**PM Answer:** it is a new modal.

- Should this new modal display the content of the post being replied or just the text input field?<br>
**PM Answer:** should show the content of the post being replied and just below it should have a text input field for the reply.

- Can a user, who is visiting another's profile page and seeing the “posts and replies” feed, “reply a reply” that the profile owner has made?<br>
**PM Answer:** no.

- Once the user completes replying to a post, should they be redirected to the user’s profile page in the “posts and replies” feed, or should they stay on the homepage?<br>
**PM Answer:** the user should stay on the homepage, but a small floating balloon with a message “Your post has been published” and a “View” button (the two side by side) should appear near the bottom of the page. If the user clicks on this last button he will then be redirected to the user’s profile page in the “posts and replies” feed.

- Thinking about user experience, how can a visitor of someone's user profile page who made a reply-to-post be able to identify the post that was replied to?<br>
**PM Answer:** the replied post must be displayed on the same card of the reply, but right above and with a division line below it to organize.

- Should I create a specific route for the second feed “posts and replies”?<br>
**PM Answer:** yes, and this new route should work like the others and be called “with_replies”.

### 3.2 - How I would implement
I believe the most important change that should be made to deliver this new feature is the creation of a new property for each Post object (in the ```src/mock/posts.json``` file). I would name this new property ```isAReplyTo```, which would contain the id of the post that was replied to. If ```null```, it means the post is not a reply to any post.

e.g. All posts:
```js script
[
  {
    id: 1,
    author: {
      name: 'Bumblebee',
      username: 'beeBubble'
    },
    postContent: '...',
    isAReplyTo: null
  },
  {
    id: 2,
    author: {
      name: 'Optimus Prime',
      username: 'optimusPrime84'
    },
    postContent: '...',
    isAReplyTo: null
  },
  {
    id: 3,
    author: {
      name: 'Bumblebee',
      username: 'beeBubble'
    },
    postContent: '...',
    isAReplyTo: 2
  },
]
```
That way, to retrieve the reply posts, along with their replied posts data, I would implement a ```fetchPostsAndReplies``` method in the ```src/api/posts``` module. This method would invoke a function from my fake API (```src/hooks/use-local-storage```) that would be responsible for traversing an array of posts from the profile in question (this array could be provided by an auxiliary function) and would do a search in all posts looking at the id value in the ```isAReplyTo``` property of each post (if there is any value other than null). Then, an array of posts from the profile in question, along with the data of the posts that were replied to, would be returned.

e.g. Posts and Replies from the "Bumblebee" user mentioned before: 
```js script
[
  {
    id: 3,
    postContent: '...',
    repliesTo: {
      id: 2,
      author: {
        name: 'Optimus Prime',
        username: 'optimusPrime84'
      },
      postContent: '...'
    }
  },
  {
    id: 2,
    postContent: '...'
  }
]
```

## 4 - Next Steps for Scaling

If this project grows, I believe the first part that would fail would be the post listing. The amount would be so large that the application would most likely face performance issues. A possible solution to this would be the Lazy loading approach.
Certainly Local Storage could no longer be used to save so much data and a database would be essential, as well as an API and maybe even a BFF (Backend for Frontend) server to perform operations on the data, thus removing the many client-side data processing functions.

With the growth of the product, more teams would be needed to handle the many demands that would arise. Therefore, it would be very important to implement Continuous Delivery, Continuous Integration and Continuous Deployment practices, to keep up with the market changes that the product must meet. Tools like [Jenkins](https://www.jenkins.io/) or [CircleCI](https://circleci.com/), for creating and managing pipelines, and [Docker](https://www.docker.com/), for managing containers (which, basically, contribute to a consistent code execution), would be great allies in implementing these practices.

In applications the size of Twitter, it would be extremely important to monitor the health of the applications and servers, it would help to anticipate problems that users may face when using the product. So investing in observability and monitoring tools like [New Relic](https://newrelic.com/) would be a great strategy to keep teams up to date on the state of the “gears” that keep the product running.


## 5 - Technologies

- [React JS](https://reactjs.org/)
  - [Custom Hooks](https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Styled Components](https://www.styled-components.com/)
- [React Modal](https://www.npmjs.com/package/react-modal)

## 6 - How to run

To be able to run this project you need Node (^12.0.0) and Yarn (1.22.17).

1 - Unzip the project.

2 - Enter the directory:

```
$ cd twitto
```

3 - Install the dependencies:

```
$ yarn install
```

4 - Run the application:

```
$ yarn start
```

5 - Now you can access `http://localhost:3000` in your browser.

<br>

### Linting and Format

```
yarn lint
yarn format
```

### Testing

```
yarn test
```

## 7 - License

This repository is licensed by MIT LICENSE. For more detailed information, read the LICENSE file contained in that repository.

## 8 - Author

[![Linkedin Badge](https://img.shields.io/badge/-Matheus_Machado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/matheusmachado-dev/)  
Contact me!