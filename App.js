const app = React.createElement("div", { id: "parent" }, 
React.createElement("div", { id: "child" }, 
[React.createElement("h1", {}, "This is h1 tag!"), React.createElement("h1", {}, "This is h1 tag 2!")]
))

//const heading = React.createElement("h1", { id: "heading" }, "Hello World from React1!");
console.log(app)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(app)