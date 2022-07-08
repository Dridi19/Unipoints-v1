const router = require('express').Router();
var session = require('express-session');
let User = require('../models/user.model');
var bcrypt = require('bcrypt');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  var find = req.params.id
  User.findOne({"_id":find})
    
    .then(user => res.json(user.points))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/addpoints').post(async (req, res) => {
  var find =  req.body.id;
  var pointstoadd = req.body.points;
  let user = await User.findOne({"_id":find})
  user.points = user.points + parseInt(pointstoadd);
  user.save()
  .then(() => res.json('Points added!'))
  .catch(err => res.
  status(400).json('Error: ' + err));



})

 

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const emiladress = req.body.emiladress;
  const isclient = false || req.body.isclient;
  const points = 0;
  const newUser = new User({username,password,emiladress,isclient,points});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.
    status(400).json('Error: ' + err));
});
router.route('/login').post(async(req, res, next) =>{
    let email = req.body.emiladress ;
    let password =  req.body.password;
    if(!email || !password){
        return next (console.log('Please enter email and password'), 400);
    }
    let user = await User.findOne({"emiladress":email})  
    if(user){
      res.json(user)
    }
    return next (console.log('Please enter a valid email and password'), 400);
    const passwordmatch =  await bcrypt.compare(password, user.password)  
    if (passwordmatch) { 
    res.json(user)}
    return next (console.log('Please enter a valid email and password'), 400);
  });
module.exports = router;