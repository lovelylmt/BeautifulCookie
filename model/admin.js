var mongoose = require('../util/database');
const admin = mongoose.model('admin', { name: String, password: String});
module.exports = {

    admin: (name, password, cb) => {
       
        admin.find({
            name: name,
            password: password
        }).then(resuilt => {
            cb(resuilt)
        })
    },



}

