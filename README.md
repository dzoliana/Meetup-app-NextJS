# Meetup-app

## Project summary

- Meetup-app is a web application that represents an exercise in learning NextJS.
- The focus is on creating new meetups, sending them to some backend and saving them in the database.
- Creeating a connection between the frontend part of the application and the MongoDB database via an API route, which contributes to the functionality of the real backend. The displayed password is for example only, the real one has been changed.

## About Next

- NextJS is defined as "React framework for production applications".
  - Framework: Because there are many possibilities, clear rules.
  - React: It's a framework for React, because it builds on React, improves it. You still write React code and build React components
  - Production: It's a production framework because it adds all those missing features that you usually have to add to React apps to really get them ready for production and solve common problems.
- Next.js is a framework built on top of React.js, specifically designed for server-rendered React applications.
- This framework emphasizes performance and the importance of static content optimization.

### Server-side Rendering (SSR) in React:

- server-side rendering (SSR) refers to the preparation of page content on the server instead of the client
- with classic React, there are problems with initial loading and the visual effect of "flickering" (loading state)
  - React is a client side JS library and rendering of html happens on the client side
  - The Html code that is sent from the server to the client when the user visits the page is quite empty
  - Because fetching happens when the JS code is executed on the client
- Difficulties with search engine optimization (SEO) due to an empty HTML page.
- The need to pre-render pages on the server, especially when retrieving data.
  - If that page was pre-rendered on the server, if that data retrieval could somehow be done on the server, when the request hits that server, then the finished page would be served to our users.
  - Then users would not have a loading state and the browser would see the content of our page.
- React has built-in features for SSR, but with additional configuration.
- NextJS automatically applies SSR to pages without additional user setup.

#### Why Next?

- Single page app (SPA) is an application that is not served from a new HTML page every time new content needs to be displayed, but is dynamically generated by JavaScript manipulating the DOM.
- Because there is no need to load a new HTML page every time something needs to be changed.
- Search engine optimization (SEO) is the activity of optimizing your website in order to get more organic traffic from search engines.
- The problem with SEO in SPA is that search engines cannot properly index the application, which is different from server-side applications. The SPA only serves the initial HTML file, so search engines can't index the content because in a single page application you have JavaScript generating new HTML every time something changes.
- Although SPAs have many other advantages such as performance, time and bandwidth savings, better responsiveness on mobile devices, increased performance on slower internet connections, etc.
- With server-side rendered applications, especially with Next.js, you can create an efficient application and have good SEO at the same time.

### Simplified routing with file based routing:

- Definition of routing as the illusion of multiple pages while scrolling through the application.
- In traditional React, routing is set up using React Router.

- Disadvantages of the traditional approach:

  - Need for additional code to set routes.
  - Storing page components in separate folders, representing a single route and reflecting the route structure.

- File-based routing in NextJS:
  - NextJS eliminates setting routes in code.
  - Defining pages and routes using files and folders in a special "pages" folder.
  - Reducing the writing of additional code and increasing transparency.
  - Conceptual similarity with the basics of web development through the structuring of folders and files.
  - NextJS supports advanced features such as nested routes and dynamic parameters

### Build fulstack apps

- NextJS makes it easy to add backend code to a React project.
- The goal is to build a full stack React project with frontend and backend part.
- Enables the integration of stand-alone backend code that can work with the file system or access the database.
- NextJS makes it easy to add your own backend API using NodeJS code.
- Provides the possibility of implementing authentication and similar functionalities.
- Advantages of using NextJS for full stack projects:
  - in one project we have both frontend and backend
  - Reducing the need to build a separate REST API project.
  - Connecting React UI and backend API code in one project.

## Getting started

_React + Next_

The React app dev server is started via "npm run dev".

## Page Link

The page is deployed via [Vercel](https://vercel.com/ "Vercel"):

- [meetup-app](https://meetup-app-next-qdlx4y4gs-anas-projects-c631fda7.vercel.app/ "Vercel")
