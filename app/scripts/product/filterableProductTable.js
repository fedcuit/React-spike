/** @jsx React.DOM */
'use strict';

define([], function () {
    return React.createClass({
        render: function () {
            return (React.DOM.div( {className:"filterableProductTable"}, 
                SearchBar(null ),
                ProductTable(null )
            ));
        }
    });
});
