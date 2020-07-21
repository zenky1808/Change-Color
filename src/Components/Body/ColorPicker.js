import React from 'react';

class ColorPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colors : ['red', 'blue','#000000', 'green', 'pink', 'aqua', 'coral', '#FFFF00',
                '#BA55D3', '#98FB98', '#808000','#D2691E', '#808080'
            ]
        }
    }

    showColor(color){
        return {
            background : color
        }
    }

    setActiveColor(color){
        this.props.onReceiveColor(color)
    }


    render() {
        const elmColors = this.state.colors.map((color, index) => {
            return <span 
                        key={ index }
                        style={ this.showColor(color) }
                        className= { this.props.color === color ? 'active-color' : ''}
                        onClick= { () => this.setActiveColor(color) }
                    ></span>
        })
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="card card-picker">
                    <div className="card-header color-picker">
                        Color Picker
                    </div>
                    <div className="card-body">
                        {elmColors}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;