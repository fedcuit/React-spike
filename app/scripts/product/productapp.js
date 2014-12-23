/** @jsx React.DOM */
'use strict';

define([], function () {
    var ProductRow = React.createClass({displayName: 'ProductRow',
        render: function () {
            var productName = this.props.product.stocked
                ? (React.DOM.td(null, this.props.product.name)) : (React.DOM.td( {style:{color: 'red'}}, this.props.product.name));
            return (React.DOM.tr(null, 
                productName,
                React.DOM.td(null, this.props.product.price)
            ));
        }
    });

    var CategoryRow = React.createClass({displayName: 'CategoryRow',
        render: function () {
            return (React.DOM.tr(null, 
                React.DOM.th( {colspan:"2"}, this.props.product.category)
            ));
        }
    });

    var ProductTable = React.createClass({displayName: 'ProductTable',
        render: function () {
            var rows = [];
            var lastCategory = '';
            $.each(this.props.products, function (index, product) {
                if (product.category != lastCategory) {
                    lastCategory = product.category;
                    rows.push(CategoryRow( {product:product} ));
                }
                rows.push(ProductRow( {product:product} ));
            }.bind(this));
            return React.DOM.table(null, 
                React.DOM.thead(null, 
                    React.DOM.tr(null, 
                        React.DOM.th(null, "Name"),
                        React.DOM.th(null, "Price")
                    )
                ),
                React.DOM.tbody(null, 
                    rows
                )
            );
        }
    });
    var SearchBar = React.createClass({displayName: 'SearchBar',
        render: function () {
            return (React.DOM.div(null, 
                React.DOM.div(null, 
                    React.DOM.input( {type:"text", placeholder:"Search..."} )
                ),
                React.DOM.div(null, 
                    React.DOM.input( {type:"checkbox", id:"showOnlyInStock"} ),
                    React.DOM.label( {for:"showOnlyInStock"}, "Only show product in stock")
                )
            ));
        }
    });
    var FilterableProductTable = React.createClass({displayName: 'FilterableProductTable',
        getInitialState: function () {
            return {products: []};
        },
        componentDidMount: function () {
            console.log('component did mount');
            $.getJSON(this.props.url).done(function (data) {
                this.setState({products: data});
            }.bind(this));
        },
        render: function () {
            return (React.DOM.div(null, 
                SearchBar(null ),
                ProductTable( {products:this.state.products})
            ));
        }
    });
    return React.createClass({
        render: function () {
            return (React.DOM.div( {className:"productTable"}, 
                React.DOM.h2(null, "Product table"),
                FilterableProductTable( {url:this.props.url})
            ));
        }
    });
});
