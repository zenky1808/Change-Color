import React from 'react';
import Reset from './Reset'
import Fonts from './Fonts'


class SizeSetting extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            fontFamily: ['Dancing Script']
        }
    }
    changeSize(value){
        this.props.onChangeSize(value)
    }

    onSettingDefault = (value) =>{
        this.props.onDefault(value)
    }

    // onSetFont = (value) => {
    //     this.props.
    // }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header">
                        Setting 
                    </div>
                    <div className="card-body">
                        <button type="button" className="btn btn-outline-success" 
                                onClick={ () => this.changeSize(-2) }>-</button>&emsp;
                        <button type="button" className="btn btn-outline-success" 
                                onClick= { () => this.changeSize(+2) }>+</button>&emsp;&emsp;&emsp;
                        <Reset onSettingDefault= { this.onSettingDefault }></Reset>
                        <Fonts onSetFont= { this.onSetFont }></Fonts>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeSetting;