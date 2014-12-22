/** @jsx React.DOM */
'use strict';

define([], function () {
    return React.createClass({
        getInitialState: function () {
            return {timeElapsed: 0};
        },
        increase: function () {
            this.setState({timeElapsed: this.state.timeElapsed + 1});
        },
        componentDidMount: function () {
            this.interval = setInterval(this.increase, 1000);
        },
        componentWillUnmount: function () {
            clearInterval(this.interval);
        },
        render: function () {
            return React.DOM.div(null, 
                React.DOM.h2(null, "Timer"),
                React.DOM.div(null, this.state.timeElapsed, " seconds elapsed")
            )
        }
    });
});
