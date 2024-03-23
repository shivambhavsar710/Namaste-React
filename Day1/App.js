const heading = React.createElement("h1",{},"Namaste React");

const heading2 = React.createElement("h1",{},"Learning Day-1");

const container = React.createElement("div",{
    id:"container"
},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);