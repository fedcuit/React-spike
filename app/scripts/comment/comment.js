/** @jsx React.DOM */
'use strict';

define([], function () {
    var converter = new Showdown.converter();

    return React.createClass({
        render: function () {
            var rawMarkup = converter.makeHtml(this.props.children.toString());
            return (React.DOM.div( {className:"comment"}, 
                React.DOM.h2( {className:"commentAuthor"}, this.props.author),
                React.DOM.span( {dangerouslySetInnerHTML:{__html: rawMarkup}} )
            ));
        }
    });
});
