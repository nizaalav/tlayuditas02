const { Strategy } = require ('passport-local')
const bcrypt = require('bcrypt')


const localStrategy = new Strategy(

     async(email, password, done) => {
          try{
          const userTest = [
               {name: 'Dara', email:'user1@mail.com', password: '$2b$10$t6Lfge/s3vbB6HJV9jhifeQ1DDMUM0cxr2La9jwxNg1NKsr4pEg/2', rol: 'admi1'},
               {name: 'Niza ', email:'admin@email.com', password: '$2b$10$t6Lfge/s3vbB6HJV9jhifeQ1DDMUM0cxr2La9jwxNg1NKsr4pEg/2', rol: 'user' },
               {name: 'Diana ', email:'user2@mail.com', password: '$2b$10$t6Lfge/s3vbB6HJV9jhifeQ1DDMUM0cxr2La9jwxNg1NKsr4pEg/2' , rol: 'user2'},

          ]

          const user = userTest[1]
          if(!user) return done(null, null)
          console.log(user)
          const isMatch = await bcrypt.compare(password, user.password)
          if(!isMatch) throw {status: 401, message: 'no autorizado', error: true}
          delete user.password
          done(null, user)
     }
          catch(error){
          done(error, false)
     }

      }
)

module.exports = localStrategy
