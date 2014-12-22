/** @jsx React.DOM */
'use strict';

define(["comment"], function (Comment) {
    var createComment = function (comment) {
        return <Comment author={comment.author}>{comment.text}</Comment>;
    };
    return React.createClass({
        render: function () {
            return (<div className="commentList">
            {this.props.data.map(createComment)}
            </div>);
        }
    });
});
