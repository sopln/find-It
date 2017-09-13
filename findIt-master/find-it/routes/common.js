express = require('express');
creds = require('../config/credentials');
mongo_url = creds.mongo_url;
api_key = creds.api_key;

//mongoose setup
mongoose = require('mongoose');
mongoose.connect(mongo_url);
Users = require('../models/User'); //setup models

