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
        render: function () {
            return (React.DOM.div( {className:"commentApp"}, 
                React.DOM.h1(null, "Comments"),
                CommentList( {data:this.state.data}),
                CommentForm(null )
            ));
        }
    });
});
