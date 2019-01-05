var mongoose = require('../util/database');

const admin = mongoose.model('admins', {
    name: String,
    password: String,
    
});
// console.log(admin)
module.exports = {
    login: (name, password, cb) => {console.log(name), console.log(password)
        admin.find({
            name: name,
            password: password,
        }).then(resuilt => {
           
            cb(resuilt)
        })
    },
}

