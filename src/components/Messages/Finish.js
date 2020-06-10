import React from 'react';

import {connect} from 'react-redux';

const Finish = props => {
    return (
        <div>
            <h1>You solved it!</h1>
            <button>Play again</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(null,mapDispatchToProps)(Finish);
