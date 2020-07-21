import React from 'react';

class Result extends React.Component {
    setStyle(){
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 result">
                <p>Color: { this.props.color} - Font Size: { this.props.fontSize}px</p>
                <div className="text-content" style={ this.setStyle() }>
                    Setting text color
                </div>
            </div>
        );
    }
}

export default Result;