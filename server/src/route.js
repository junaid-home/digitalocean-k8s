const router = require("express").Router();
const $User = require("./user.model");

router.get("/names", async (_req, res) => {
  const users = await await $User.findAll({ order: [["updatedAt", "DESC"]] });

  res.json({ names: users.map((user) => user.name) });
});

router.post("/users", async (req, res) => {
  if (!req.body || !req.body.name || req.body.name.length < 1)
    return res.status(400).json({ msg: `Invalid name!` });

  const user = await $User.create(req.body);

  res.json({ user });
});

module.exports = router;
