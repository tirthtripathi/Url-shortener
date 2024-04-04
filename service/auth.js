const jwt = require("jsonwebtoken");
const secret = "Tirth@&56$Tripathi"

function setUser(user) {
  return jwt.sign({
    _id : user._id,
    email : user._email
  }, secret);
}

function getUser(token) {
  if(!token) return null;
  try{
  return jwt.verify(token, secret);
  }catch(error){
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
