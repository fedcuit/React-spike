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
            return (<div className="commentApp">
                <h1>Comments</h1>
                <CommentList data={this.state.data}></CommentList>
                <CommentForm />
            </div>);
        }
    });
});
