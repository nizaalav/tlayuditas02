const bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword ='un password 20.20'
  const myPasswordHashed = '$2b$10$3SNqhv82ARJ1EtbxWiB0x.uBeENBJsAiFL2uZIpgztjAhWamUSLmS'
  const isMatch = await bcrypt.compare(myPassword, myPasswordHashed)
console.log(isMatch)
}

verifyPassword()
