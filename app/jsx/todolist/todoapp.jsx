/** @jsx React.DOM */
'use strict';
define(["todolist"], function (TodoList) {
    return React.createClass({
        getInitialState: function () {
            return {items: [], text: ""};
        },
        onChange: function (e) {
            this.setState({text: e.target.value});
        },
        onSubmit: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var updatedItems = this.state.items.concat([this.state.text]);
            this.setState({
                items: updatedItems,
                text: ''
            });
        },
        render: function () {
            return (<div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.text} onChange={this.onChange}></input>
                    <button>{'Add ' + (this.state.items.length + 1)}</button>
                </form>
            </div>);
        }
    });
});
