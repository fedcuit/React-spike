/** @jsx React.DOM */
'use strict';
define([], function () {
    return React.createClass({
        todoItem: function (text) {
            return React.DOM.li(null, text)
        },
        render: function () {
            return React.DOM.ul(null, 
                this.props.items.map(this.todoItem)
            )
        }
    });
});
