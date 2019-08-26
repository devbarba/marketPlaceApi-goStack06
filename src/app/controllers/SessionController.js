const User = require('../models/User')

class SessionController {
  async store (req, res) {
    const { email, password } = req.body

    // Busca usuário no banco
    const user = await User.findOne({ email })

    // Se usuário não existe
    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    // Se senha for inválida
    if (!await user.compareHash(password)) {
      return res.status(400).json({ error: 'Invalid password' })
    }

    // Se usuário existe retorna seus dados e um token para posterior validação
    return res.json({ user, token: User.generateToken(user) })
  }
}

module.exports = new SessionController()
