import React from 'react';

class Fonts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            font: ['Dancing Script', 'Shadows Into Light', 'Modak']
        }
        this.onChangeFont = this.onChangeFont.bind(this)
    }

    onChangeFont(value){
        // this.props.value
    }

    render() {
        return (
            <div className="form-row align-items-center">
                <div className="col-auto my-1">
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Font-Family</label>
                    <select className="custom-select mr-sm-2"
                            
                    >
                        <option value="DEFAULT">Choose...</option>
                        <option value={1}>Dancing Script</option>
                        <option value={2}>Shadows Into Light</option>
                        <option value={3}>Modak</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Fonts;