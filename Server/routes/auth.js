const express = require('express')
const { register, login } = require('../contoller/user')
const mapUser = require('../helpers/mapUser')

const router = express.Router({ mergeParams: true })


/* Авторизация и регистрация */
router.post("/register", async (req, res) => {
    try {
      const { user, token } = await register(req.body.login, req.body.password);
      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .send({ error: null, user: mapUser(user) });
    } catch (e) {
      res.send({ error: "Похоже такой пользователь уже существует" });
    }
  });
  
  router.post("/login", async (req, res) => {
    try {
      const { user, token } = await login(req.body.login, req.body.password);
      res.cookie("token", token, { httpOnly: true }).send({
        error: null,
        user: mapUser(user),
      });
    } catch (e) {
      res.send({ error: "Проверьте учетные данные" });
    }
  });
  
  router.post("/logout", (req, res) => {
    res.cookie("token", "", { httpOnly: true }).send({});
  });

  module.exports = router