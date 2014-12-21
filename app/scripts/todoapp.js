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
            return (React.DOM.div(null, 
                React.DOM.h3(null, "TODO"),
                TodoList( {items:this.state.items}),
                React.DOM.form( {onSubmit:this.onSubmit}, 
                    React.DOM.input( {value:this.state.text, onChange:this.onChange}),
                    React.DOM.button(null, 'Add ' + (this.state.items.length + 1))
                )
            ));
        }
    });
});
