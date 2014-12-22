/** @jsx React.DOM */
'use strict';

define(["comment/comment"], function (Comment) {
    var createComment = function (comment) {
        return Comment( {author:comment.author}, comment.text);
    };
    return React.createClass({
        render: function () {
            return (React.DOM.div( {className:"commentList"},
            this.props.data.map(createComment)
            ));
        }
    });
});
