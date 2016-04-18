'use strict';

var _ = require('underscore');

module.exports = function(content, file, conf){
    fis.util.merge(_.templateSettings, conf);
    return _.template(content.replace(/\r\n/g, '\n'), {
        variable: 'data'
    }).source;
};