/** @jsx React.DOM */
'use strict';

define(['commentlist', 'commentform'], function (CommentList, CommentForm) {
    return React.createClass({
        getInitialState: function () {
            return {data: []};
        },
        componentDidMount: function () {
            $.getJSON(this.props.url)
                .done(function (data) {
                    this.setState({data: data});
                }.bind(this));
        },
        handleCommentSubmit: function (comment) {
            this.setState({data: this.state.data.concat([comment])});
        },
        render: function () {
            return (React.DOM.div( {className:"commentApp"}, 
                React.DOM.h1(null, "Comments"),
                CommentList( {data:this.state.data} ),
                CommentForm( {onCommemtSubmit:this.handleCommentSubmit} )
            ));
        }
    });
});
