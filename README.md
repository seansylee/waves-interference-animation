# Waves Simulator

This wave simulator built on React depicts an animation of a single source in simple harmonic motion.

The current working version can be viewed [here](https://elegant-hoover-109acc.netlify.com/)

## Getting Started

This project is built using JavaScript to be a web application, more specifically using a JavaScript library called React.
To begin contributing to the project, you will need to install this project and several other dependencies, and understand some basic documentation details for React itself. 
So let's get into it!

### Clone this Repository!

First you will need to clone this repository by using the command below in your terminal/bash (or you can manually install the zip folder and extract it yourself) 

```
$ git clone git@github.com:ntolich/waves-simulator.git
```

### Installing

To run this application you will need to install its dependancies using the node package manager (npm).
You may also use other package managers like `yarn`.

The node package manager will also need to be instlled separately through the Node.js website. 
The information regarding this will be find on the official website [here](https://nodejs.org/en/)

_Note that we will not need to understand node, or any of its details in order to begin on our project so that information will be omitted, simply installing it and having it exist will be more than enough. However if you are curious, its documentation is available in the website provided above._

Now that we have the node package manager we can run the following commands within our project directory.

```
$ npm install
```

You are now ready to code! To view the current working version in action run the following command:

```
$ npm run start
```

And enjoy our wave simulation! 〰️😊〰️

## Before diving into the code

It is strongly advised that you have a general understanding of the document object models `HTML` of the browser before programming in React. 

Worry not, HTML is a very simple mark-up language, which displays the contents of each element in instructed order.

A simple guideline can be found [here](https://www.w3schools.com/html/html_intro.asp).

Additionally, I would **highly** recommend a visit to the React JS home page and scanning the standard documentation, that can be found [here](https://reactjs.org/). 

### Our current version with React

There are several functions which are given to us by React that we are utilizing. 
These are specifically the `render()`, and `componentDidMount()` functions. 

#### render()

The `render()` function is rather self-explanatory, whatever HTML elements _(They are actually fake ones within react that look like HTML called `JSX` but they essentially behave the same)_ are specified within this function is injected and rendered directly to our browser. 

This rendering feature is at the core of our animation as the changes in the rendering is what displays to us to be animations. This render function must be called at the provided location of our application, and when running our application it is the last thing that React will trigger once everything else has already been set. 

#### componentDidMount()

The `componentDidMount()` is the function that React will run when this application has completed its first time loading. 

This concept might come not as intuitive as the simple render function but a simple way to think about this function is to treat it as an `initialize` function. 

This is the first function that React will run in our visible code when all the other unseen background programs have completed their process, and conveniently this is where we can perform our initialization of the arrays and etc. 

### React state

Finally the most important aspect of React programming: **state**. 

The state is where React will maintain its ‘state’ more specifically the global variables that determine the current ‘state’ of our applications. We are given the freedom to decide what can be maintained in here. I.e. the array which stores all our displacements, amplitude, etc. 


The most crucial thing to note is that any changes to the state will trigger the re-render, signaling React to render our application again accordingly to our updated state. This is how our animation is made possible. As this very feature triggers React to render the new state of our wave, after each calculation affecting the state.

## Deployment

_Currently under works, will be done soon!_

## Authors

* **Nikolai Tolich**
* **Sean Lee** 

2019


