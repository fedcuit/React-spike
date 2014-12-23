React Spike
===========

Learn React step by step

* `npm install & bower install` to install all dependencies and components
* `grunt serve` to start server and watching for file change
* Be careful when you use static json files, the content of it must follow JSON standard (keys are in double quotes, values cannot be executable)

##Examples Included:
* Todo list
* Comment app
* A timer
* A product table

##Brief Introduction and Tips

React is all about modular, composable components. For our comment box example, we'll have the following component structure.
`React.render()` instantiates the root component, starts the framework, and injects the markup into a raw DOM element, provided as the second argument.

---
####Props
Data passed from parent to children components is called **props**, short for properties.
Using props we will be able to read the data passed to it from the parent component. (*Just like attrs in Angular directive and attribute in JSP tag*)

We access named attributes passed to the component as keys on `this.props` and any nested elements as `this.props.children`.
props are immutable: they are passed from the parent and are "owned" by the parent.

---
####State
To implement interactions, we introduce mutable state to the component. `this.state` is private to the component and can be changed by calling `this.setState()`. When the state is updated, the component re-renders itself.

`getInitialState()` executes exactly once during the lifecycle of the component and sets up the initial state of the component.

`componentDidMount()` is a method called automatically by React when a component is rendered. 
> all methods that used `this.state`, `this.props`, `this.refs` to be decleared inside `createClass({})`
> getInitialState() returns the intialized `state` object，not like in Angular `init()` assign value to `scope`

---
####Events
React attaches event handlers to components using a **camelCase naming convention**. We attach an onSubmit handler to the form that clears the form fields when the form is submitted with valid input.

``` jsx
onSubmit={handleSubmit}
```

> not only this.state.XXX, this.props.xxx in JSX needs to be surrounded with braces, event handle also needs to.

####Refs
We use the `ref` attribute to assign a name to a child component and `this.refs` to reference the component. We can call `getDOMNode()` on a component to get the native browser DOM element.

``` jsx
this.refs.author.getDOMNode().value = '';
this.refs.text.getDOMNode().value = '';
```

> use method `getDOMNode()`, not property access `DOMNode`

---
####Callback

If child component want to change the state of parent component, it has to be done with pass callback function from parent to child component.

---
#### JSX
* If a variable is defined using `React.createClass()`, then we can use it a `tag` in other JSX code. `CategoryRow` in below example:

``` jsx
var CategoryRow = React.createClass({
    render: function () {
        return (<tr>
            <th colspan="2">{this.props.product.category}</th>
        </tr>);
    }
});

///
rows.push(<CategoryRow product={product} />);
```

* If a variable is defined using JSX literal, then it's treated as a `JSX expression`.  `productName` in below example:

``` jsx
var productName = this.props.product.stocked
                ? (<td>{this.props.product.name}</td>) : (<td style={{color: 'red'}}>{this.props.product.name}</td>);
return (<tr>
    {productName}
    <td>{this.props.product.price}</td>
</tr>);
```
