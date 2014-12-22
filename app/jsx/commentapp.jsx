/** @jsx React.DOM */
'use strict';

define(['commentlist', 'commentform'], function (CommentList, CommentForm) {
    return React.createClass({
        render: function () {
            return (<div className="commentApp">
                <h1>Comments</h1>
                <CommentList data={this.props.data}></CommentList>
                <CommentForm />
            </div>);
        }
    });
});
