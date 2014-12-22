/** @jsx React.DOM */
'use strict';
define([], function () {
    return React.createClass({
        todoItem: function (text) {
            return <li>{text}</li>
        },
        render: function () {
            return <ul>
                {this.props.items.map(this.todoItem)}
            </ul>
        }
    });
});
