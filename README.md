React Spike
===========

Learn React step by step

* `npm install & bower install` to install all dependencies and components
* `grunt serve` to start server and watching for file change

##Examples in this small app:
* A simple todo list
* A simple comment app(list and add comments)

##A brief introduction and tips

React is all about modular, composable components. For our comment box example, we'll have the following component structure.

`React.render()` instantiates the root component, starts the framework, and injects the markup into a raw DOM element, provided as the second argument.

---
Data passed from parent to children components is called **props**, short for properties.

Using props we will be able to read the data passed to it from the parent component. (Just like attrs in Angular directive and attribute in JSP tag)

We access named attributes passed to the component as keys on `this.props` and any nested elements as `this.props.children`.

props are immutable: they are passed from the parent and are "owned" by the parent.

To implement interactions, we introduce mutable state to the component. this.state is private to the component and can be changed by calling `this.setState()`. When the state is updated, the component re-renders itself.

`getInitialState()` executes exactly once during the lifecycle of the component and sets up the initial state of the component.
(注意，getInitialState() 需要 return 初始的state 对象，而不像是AngularJS 那样在init() 里面对 scope 赋值)

`componentDidMount()` is a method called automatically by React when a component is rendered. 

---
####Events

React attaches event handlers to components using a camelCase naming convention. We attach an onSubmit handler to the form that clears the form fields when the form is submitted with valid input.

``` jsx
onSubmit={handleSubmit}
```

需要注意的地方是，前面已经出现的React表达式 this.state.XXX, this.props.xxx 需要使用 {} 包起来，绑定事件处理时也需要{}！！！

####Refs

We use the `ref` attribute to assign a name to a child component and `this.refs` to reference the component. We can call `getDOMNode()` on a component to get the native browser DOM element.

``` jsx
this.refs.author.getDOMNode().value = '';
this.refs.text.getDOMNode().value = '';
```

（注意，访问component对应的 DOM 不是直接使用 DOMNode, 而是调用方法 getDOMNode())

---
####Callback

If child component want to change the state of parent component, it has to be done with pass callback function from parent to child component.

---
所有使用了 this.state, this.props, this.refs的函数都需要定义在 createClass({}) 中，定义在其外的方法访问不到这些东西。
