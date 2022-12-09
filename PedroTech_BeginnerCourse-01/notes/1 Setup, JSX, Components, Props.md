# 1 React Intro

## 1.1 What is React?

React is a JavaScript framework used to build dynamic web applications.
It is better than vanilla JS especially for large web projects, and helps to reduce spaghetti code etc.

## 1.2 Creating a React project

Ensure that you have `npm` and `node` installed.

Run the following command in the terminal to create the boilerplate for a React app in `<directory>`:

```bash
npx create-react-app <directory>
```

e.g. "`npx create-react-app .`" will spawn the boilerplate code for a React app in the current directory.

## 1.3 Understanding the boilerplate code

The files and directories in the project are:

- `node_modules/` contains all `node` dependencies that the project uses
- `public/` -- the folder that the client will see
  - `index.html` -- file where React will render the whole website; this file contains a div with the id `#root` where all the body code is placed
- `src/` -- source code (where most stuff happens)
  - `index.js` -- sends code into the `#root div` file in `index.html`
- `.gitignore` -- for use with git - lists files to never track
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

# 2 JSX

Consider the `App.js` file. It contains what appears to be a function `App()` that returns what appears to be HTML code. This is **NOT** HTML -- it is a syntax presented by React called **_JSX_**. JSX includes features of both HTML and JavaScript.

This 'merging' of JavaScript and HTML makes interacting with the DOM easier -- e.g. setting HTML content based on the value of a variable. We can also set the value of a variable to some HTML.

In order to use JavaScript between two HTML tags, we must place our JavaScript code in curly braces.

```jsx
function App() {
  const name = "Josh";
  const welcomeMessage = <p>Welcome to the website!</p>;
  const welcomeQuestion = <p>How would you like to start your day, {name}?</p>;
  return (
    <div className="App">
      <h1>Welcome, {name}</h1>
      {welcomeMessage}
      {welcomeQuestion}
    </div>
  );
}
```

# 3 Components & Props

A **_Component_** is a function that returns some JSX (e.g. the `App()` function above). We can pass in arguments to a component, which are called **_props_** in the form of a JavaScript object.

```jsx
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
};
```

In order to render components, treat the components as HTML tags and the props as HTML attributes.

```jsx
return (
  <div>
    <User name="Josh" age={18} email="j@gmail.com" />
    <User name="Jeff" age={5} email="je@gmail.com" />
    <User name="Jeremy" age={35} email="y@gmail.com" />
  </div>
);
```

Every component name must start with a capital letter. Additionally, separate components are usually stored in separate files, which then must be imported / exported between files.

```jsx
export const User = () => {...}
...
import { User } from "./User"
```

# 4 CSS & Styles

In order to add CSS to the website, write code in a CSS file and import it in the `component.js` file. Styles can be applied to each component using the `className` HTML attribute.

```jsx
import "./App.css";

...

return (
  <div className="App">
    ...
  </div>
);
```

## 4.1 CSS modules

We can also use CSS modules by saving our CSS with the `.module.css` file extension, and importing the file using

```jsx
import styles from "./App.module.css";
```

This imports an object called `styles` where the keys are the different class names in the CSS module. Using `className={styles.className}` is equivalent to `className="className"`.

```jsx
return (
  <div className={styles.App}>
    <h1 className={styles.name}> Josh </h1>
  </div>
);
```

## 4.2 Inline styles

We can also set styles via the inline `style` attribute. We can set the attribute to an object containing various CSS properties and their corresponding values. Note that in JSX, since we are dealing with objects, we use camelCase rather than hyphens (e.g. `backgroundColor` instead of `background-color`), commas rather than semicolons and put values in quotes (e.g. `color: "red"` instead of `color: red`).

```jsx
return (
  <div>
    <h1 style={{ color: "red", backgroundColor: "green" }}>Josh</h1>
  </div>
);
```

# 5 Conditional Operations: Ternary Operator

remember the ternary operator a shorthand 'if-else statement' used as follows

```js
(condition) ? value if true : value if false;
```

we can also use the double ampersand `&&` as a shorthand 'if statement'

```js
(condition) && value if true;
```

## 5.1 Example Use

The following code corresponds to a component that:

1. shows a welcome message if `age` is >= 18 and forbidden otherwise
2. sets the subtitle text to green if `isGreen` is true, and red otherwise
3. shows the 'Click Me' button if `isGreen` is true

```jsx
function App() {
  const age = 17;
  const isGreen = false;
  return (
    <div className="App">
      {age >= 18 ? <h1> Welcome! </h1> : <h1> Forbidden </h1>}
      <h2 style={{ color: isGreen ? "green" : "red" }}> subs </h2>

      {isGreen && <button> Click Me </button>}
    </div>
  );
}
```

# 6 Arrays

Working with lists / arrays in React is very common (e.g. showing a large amount of data with unknown size). Using the JavaScript array methods `forEach`, `map`, `filter`, etc. is essential.

The `map` array method is useful to map data to HTML code. In React, the callback function passed into `map` must have at least both the value and key as arguments.

```jsx
const names = ["Josh", "Harry", "Zeus"];

return (
  <div className="App">
    {names.map((value, key) => {
      return <p key={key}> {value} </p>;
    })}
  </div>
);
```

# 7 React States: the `useState` hook

States allow React to re-render the UI in response to changes in the value of a variable. To use states, we must import the `useState` function from the React library.

```jsx
import { useState } from "react";
```

The useState function returns an array with length 2, and takes the initial value of the variable:

1. `array[0]` = variable that we want React to 'watch'
2. `array[1]` = function to update the value of the variable'

By convention, for a variableName, the function will be called `setVariableName`.

```jsx
const [age, setAge] = useState(0);
```

The `setVariable` function can either take

1. a value to set the variable to
2. a callback function to perform an operation on the current value of the variable

_note_: React will not actually update the value of the state until the component re-renders. If you want to do something when a state changes, then consider using the `useEffect` hook.

## 7.1 Example Uses

The following code automatically updates the paragraph with whatever is written in the input field.

```jsx
const [inputValue, setInputValue] = useState("");

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

return (
  <div className="App">
    <input type="text" onChange={handleInputChange} />
    <p>{inputValue}</p>
  </div>
);
```

The following code toggles between showing a message.

```jsx
const [showText, setShowText] = useState(true);

return (
  <div className="App">
    <button
      onClick={() => {
        setShowText(!showText);
      }}
    >
      Show/Hide
    </button>
    {showText && <h1> TEXT TO TOGGLE </h1>}
  </div>
);
```

# 8 Lifecycle

The React **_component lifecycle_** describes what happens to React components over the course of their 'lifespan' and consists of three stages:

1. mounting -- the component appears on the UI
2. updating -- the component is changed (due to different props or state change etc.)
3. unmounting -- the component disappears from the UI

A component will completely disappear from the HTML code if it is not shown.

# 9 the `useEffect` hook

The `useEffect` hook takes in a callback function that is run when the component is mounted, whenever a prop changes, whenever a state changes.

```jsx
import { useEffect } from "react";
...
function App() {
  useEffect(() => {
    // do stuff on component mounting and if any states or props change
  });

  return <div>HI</div>
}
```

We can also pass in an array as the second parameter that specifies which states to watch. If the array is empty, the function will only be called on mounting.

```jsx
import { useState, useEffect } from "react";
...
function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    // do stuff on component mounting and if 'text' state changes
  }, [text]);

  return <div>HI</div>
}
```

The callback function passed in can also return a function, which will be called when the component is unmounted. This is especially useful to abort operations such as fetch requests that might be called in main function.

```jsx
function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);
}
```

## 9.1 [aside] React.StrictMode

When our app is placed between `<React.StrictMode>` tags, React will enforce stricter rules. For each component, it will quickly mount, then unmount, then mount the component to test whether it correctly does this without any memory leaks etc.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

# 10 React Router DOM

What if we want multiple pages on our website? React loads everything into one `.html` file, so we need a way to render different pages in our website.

We can import from the `react-router-dom` library and use `<Router>`, `<Routes>` and `<Route />` tags. The `<Route />` tag needs a `path` (website url path) and `element` (component that will be rendered on this page).

Depending on the url you are currently on, React will update all the HTML between the `<Routes>` tags to correspond to that particular page. We can therefore also put code outside those tags that will exist on every page (e.g. a navbar).

Additionally, using the `<Link>` tag can allow the creation of a link to a different route.

The `*` path will be rendered if the user is on a url that otherwise is undefined.

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <p>THIS IS THE NAVBAR</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotExists />} />
        </Routes>
        <footer>THIS IS THE FOOTER</footer>
      </Router>
    </div>
  );
}
```

# 11 State Management: context API

We may want our 'child' and 'grandchild' components to have access to states or functions created in the parent component. While it is possible to pass these down via props, it is must better to use contexts instead.

In the parent component, use the `createContext` function to bundle all states and data to pass to other components.

```jsx
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        {/* all components inside these tags will have access to the username state and setUsername function */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
```

In the child component, use the `useContext` hook to use the data in the imported context.

```jsx
import { useContext } from "react";
import { AppContext } from "./App";

function Home() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <p>username is {username} </p>
    </div>
  );
}
```

Using contexts helps to avoid **_prop drilling_** where props are passed down deeply into many layers of components without being used in the intermediary components.

# 12 React Query

Previously, we have used the `fetch` API to get data from an API. However, this is not the best practice for React -- using the `useEffect` prop to fetch data is dangerous.

An alternative is `react-query`, installed using

```bash
npm install @tanstack/react-query
```

Import react query in the 'highest level' component that will be fetching data from any API (e.g. the parent component).

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // do not refetch data upon window focus by default
      },
    },
  });

  return (
    <div className="App">
      <QueryClient.Provider>
        <p>... components / routes etc</p>
      </QueryClient.Provider>
    </div>
  );
}
```

Use the `useQuery` hook to fetch data from an API.

```jsx
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function Home() {
  const {
    data: catData,
    isLoading,
    isError,
    refetch: catRefetch,
  } = useQuery(["cat"], () => {
    Axiox.get(url).then((res) => res.data);
  });

  if (isError) {
    return <p> Sorry, there was an error </p>;
  }

  if (isLoading) {
    return <p> Loading... </p>;
  }

  return (
    <div className="Home">
      <p>Fact is {catData?.fact}</p>
      <button onClick={catRefetch}> Update Data </button>
    </div>
  );
}
```

# 13 React Forms

For this, we will be using three dependencies: `react-hook-form`, `yup` and `@hookform/resolvers/yup`.

```bash
npm install react-hook-form yup @hook-form/resolvers
```

## 13.1 Example Form

```jsx
import { useForm } from "react-hook-form"; // to handle form submission
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; // to handle form validation (checking that inputs are valid)

function Form() {
  const schema = yup.object().shape({
    // what should our expected input look like, with the error messages if a criteria fails
    fullName: yup.string().required("please enter your full name"),
    email: yup.string().email("invalid email").required("please enter an email"),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(6).max(20).required(),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords don't match")
      .required(),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema);
  });


  const onSubmit = (data) => {
    console.table(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("passwordConfirm")}
      />
      <input type="submit" />
    </form>
  );
}
```

# 14 Custom Hooks

A **_hook_** is a function that abstract a lot of logic in React.

Properties of hooks:

1. they are all functions
2. they start with a lowercase 'use'
3. only can be called inside a React component
4. cannot be called inside other functions -- must be in the 'highest level' of a component

## 14.1 Example: creating a `useToggle()` hook

```jsx
import { useState } from "react";

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
}

export { useToggle };
```

## 14.2 Example: creating a `useGetCat()` hook

```jsx
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
  } = useQuery(["cat"], async () => {
    return Axios.get(url).then((res) => res.data);
  });

  const refetchData = () => {
    alert("data refetched");
    refetch();
  };

  return { data, refetchData, isCatLoading };
};
```

# 15 Typesafety: `typescript`

Specifying the types of props and other data help us to avoid our websites crashing due to type issues.

Our solution: `typescript`.

```
npx create-react-app <directory> --template typescript
```

Files with components use the `.tsx` file extension, every other TypeScript file can use a `.ts` extension.

Create an `interface` to defined object types.

```tsx
interface Person {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country?: string; // optional field
}
```

Specify the type of a state from `useState`.

```tsx
const [name, setName] = useState<string>("");
```

Use an `enum` to create a type of value that can only be a certain number of limited options.

```tsx
enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}
const c: Country = Country.Brazil;
```

Specify the return type of a function.

```tsx
const getAge = (name: string): number => {
  return 99;
};
```

# 16 Redux Toolkit

Similar to the State Management (context API) section.

```
npm install @reduxjs/toolkit react-redux
```

## 16.1 Example

inside `store.ts`

```tsx
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({});
```

inside `App.tsx`

```tsx
import { Provider } from "react-redux";

function App() {}
```
