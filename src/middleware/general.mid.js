// import * as actions from '../actions/general.act';
// import * as Functions from '../common/functions/functions';

// const axios = require('axios');

export default store => next => action => {
    if (action.type == 'API') {

    }
    return next(action)
}