/** @jsx React.DOM */
'use strict';

define([], function () {
    return React.createClass({
        render: function () {
            return (React.DOM.div( {className:"commentForm"}, 
            " Hello world, I am a comment form "
            ));
        }
    });
});
