const employee = require('./employee');

class Engineer extends employee {
    constructor(github) {
        this.github = github;
   }
   getGithub( ){
       return this.github;
   }
   getRole( ){
       return Engineer;
   }
}
    
module.exports = Engineer;