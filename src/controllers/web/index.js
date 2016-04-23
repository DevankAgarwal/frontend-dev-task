/**
 * @author: Ashwin
 */
module.exports = function(router) {

    var path = require('path');

    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Front-End Challenge' });
    });

    /**
     * Since we've not registered an HTML view renderer, this should be used to get the absolute file path.
     * PS: extension is part of the filename
     *
     * @param fileName
     * @private
     */
    var _getViewPath = function(fileName) {
        return path.resolve(__dirname + '/../../views/web/' + fileName);
    };
};
