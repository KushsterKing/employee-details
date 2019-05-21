import mongoose from "mongoose";

import Employee from './Employee'

import constants from '../constants'

mongoose.connect(constants.mongoURL, {useNewUrlParser: true});

export {Employee}