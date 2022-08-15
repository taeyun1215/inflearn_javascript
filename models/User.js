const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const saltRounds = 10   
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minglength: 5
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    role: {
        type:Number,
        default: 0 
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function(next) {
    var user = this;

    if (user.isModified('password')) {
    // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        });
    } else {
        next();
    }
});

userSchema.methods.comparePassword = function(plainPassword, cb) {
    // plainPassword = 123123, 암호화된 비밀번호 = $2b$10$hArC1CMQ5DTgjmWhdYbI2uqe3L1VlsZHVgd87lRvRwxL/l.ywnJXe
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    console.log('user',user)
    console.log('userSchema', userSchema)
    var token =  jwt.sign(user._id.toHexString(),'secret')

    user.token = token;
    user.save(function (err, user) {
        if(err) return cb(err);
        cb(null, user);
    })
}

userSchema.methods.findByToken = function(cb) {
    var user = this;

    user._id + '' = token
    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(err, decode) {
        // 유저 아이디를 이용해서 유저를 찾은 다음에
        // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        user.findOne({"_id": decode, "token": token}, function(err, user) {
            if (err) return cb(err);
            cb(null, user);
        })
    })

}


const User = mongoose.model('User', userSchema);
 
module.exports = { User }