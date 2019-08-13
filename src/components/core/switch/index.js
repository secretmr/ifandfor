import React from 'react';
import PropTypes from 'prop-types';
import "./stylesheet.css";
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: props.state
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.state !== nextProps.state) {
            this.setState({
                switch: nextProps.state
            });
        }
    }
    render() {
        const { value, getFunc } = this.props;
        return <div
            className="switch"
            onClick={() => {
                this.setState({
                    switch: !this.state.switch
                }, () => {
                    getFunc(this.state.switch);
                });
            }}
            style={{
                backgroundColor: this.state.switch ? "orange" : "#161616"
            }}
        >
            <span
                className="switchValue"
                style={{
                    color: this.state.switch ? "#161616" : "orange"
                }}
            >
                {this.state.switch ? value[1] : value[0]}
            </span>
            <div
                className="switchIndicator"
                style={{
                    marginLeft: this.state.switch ? "12px" : "0px",
                    backgroundColor: this.state.switch ? "#161616" : "orange"
                }}
            >
            </div>
        </div>
    }
}
Switch.propTypes = {
    state: PropTypes.bool
}
Switch.defaultProps = {
    state: false
}
export default Switch;