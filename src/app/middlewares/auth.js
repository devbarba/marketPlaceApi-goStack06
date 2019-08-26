const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const { promisify } = require('util'
)
module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  // Se header não existe
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  // Remoção da palavra bearer e pegando somente o TOKEN em si
  const [, token] = authHeader.split(' ')

  // Verifica se token é válido ou não
  try {
    // Passando jwt.verify como 1º parâmetro e como 2º parâmetro token e secret
    // Utilizaremos o promisify para transformar o método verify em uma promise
    // para poder utilizar o await, pois ela usa callback como retorno
    // Retorna uma var chamada decoded contendo um nojeto com id do usuário
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    // Toda rota que for utilizar o req a partir deste middleware tera a info
    // de qual id do usuário que está fazendo esta requisição
    req.userId = decoded.id

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
