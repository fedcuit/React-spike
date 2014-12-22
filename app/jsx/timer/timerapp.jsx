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
            return <div>
                <h2>Timer</h2>
                <div>{this.state.timeElapsed} seconds elapsed</div>
            </div>
        }
    });
});
