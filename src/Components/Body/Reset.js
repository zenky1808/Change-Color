import React from 'react';

class Reset extends React.Component {

    onResetDefault = () => {
        this.props.onSettingDefault(true);
    }

    render() {
        return (
            <button className="btn btn-primary" type="reset" value="Reset" onClick={ () => this.onResetDefault()}>Reset</button>
        );
    }
}

export default Reset;