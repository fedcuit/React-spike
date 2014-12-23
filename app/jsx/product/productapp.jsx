/** @jsx React.DOM */
'use strict';

define([], function () {
    var ProductRow = React.createClass({
        render: function () {
            var productName = this.props.product.stocked
                ? (<td>{this.props.product.name}</td>) : (<td style={{color: 'red'}}>{this.props.product.name}</td>);
            return (<tr>
                {productName}
                <td>{this.props.product.price}</td>
            </tr>);
        }
    });

    var CategoryRow = React.createClass({
        render: function () {
            return (<tr>
                <th colspan="2">{this.props.product.category}</th>
            </tr>);
        }
    });

    var ProductTable = React.createClass({
        render: function () {
            var rows = [];
            var lastCategory = '';
            $.each(this.props.products, function (index, product) {
                if (product.category != lastCategory) {
                    lastCategory = product.category;
                    rows.push(<CategoryRow product={product} />);
                }
                rows.push(<ProductRow product={product} />);
            }.bind(this));
            return <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>;
        }
    });
    var SearchBar = React.createClass({
        render: function () {
            return (<div>
                <div>
                    <input type="text" placeholder="Search..." />
                </div>
                <div>
                    <input type="checkbox" id="showOnlyInStock" />
                    <label for="showOnlyInStock">Only show product in stock</label>
                </div>
            </div>);
        }
    });
    var FilterableProductTable = React.createClass({
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
            return (<div>
                <SearchBar />
                <ProductTable products={this.state.products}/>
            </div>);
        }
    });
    return React.createClass({
        render: function () {
            return (<div className="productTable">
                <h2>Product table</h2>
                <FilterableProductTable url={this.props.url}/>
            </div>);
        }
    });
});
