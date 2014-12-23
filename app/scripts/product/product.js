/** @jsx React.DOM */
'use strict';

define([], function () {
    return React.createClass({
        render: function () {
            return (React.DOM.div( {className:"productTable"}, 
                React.DOM.h2(null, "Product table")
            ));
        }
    });
});
