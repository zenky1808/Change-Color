import React from 'react';
import './style.css';
import ColorPicker from './ColorPicker';
import Result from './Result';
import SizeSetting from './SizeSetting';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'black',
            fontSize: 15,
            fontFamily: 'Arial'
        }
        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onDefault = this.onDefault.bind(this)
    }
    
    onSetColor(params){
        this.setState({
            color: params
        })
    }

    onChangeSize(value){
        this.setState({
            fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 64)
            ? this.state.fontSize + value : this.state.fontSize
        })
    }

    onDefault(defaults){
        if(defaults){
            this.setState({
                color: 'black',
                fontSize: 15
            })
        }
    }

    onChangeFont(value){
        this.setState({
            fontFamily: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <ColorPicker color= { this.state.color } onReceiveColor={ this.onSetColor }/>
                    <SizeSetting fontSize={ this.state.fontSize} onChangeSize= { this.onChangeSize }
                                 onDefault={ this.onDefault }/>
                    <Result color={ this.state.color } fontSize={ this.state.fontSize }/>
                </div>
            </div>
        );
    }
}

export default Main;