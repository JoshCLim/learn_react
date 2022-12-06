# 1. React Intro

## What is React?

React is a JavaScript framework used to build dynamic web applications.
It is better than vanilla JS especially for large web projects, and helps to reduce spaghetti code etc.

## Creating a React project

Ensure that you have `npm` and `node` installed.

Run the following command in the terminal to create the boilerplate for a React app in `<directory>`:

```bash
npx create-react-app <directory>
```

e.g. "`npx create-react-app .`" will spawn the boilerplate code for a React app in the current directory.

## Understanding the boilerplate code

The files and directories in the project are:

- `node_modules/` contains all `node` dependencies that the project uses
- `public/` -- the folder that the client will see
- `src/` -- source code (where most stuff happens)
- `.gitignore` -- for use with git
- `package.json` -- contains metadata about project and dependencies used
- `package-lock.json` -- contains more information about versions of dependencies used

Inside the `public/` folder, there is a single `index.html` file where React will render the whole website. The `index.js` file in the `src/` folder uses the following code to 'send' all the code into the `#root div` in `index.html`.

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
