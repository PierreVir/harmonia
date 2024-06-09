const SaySomething = (req, res) => {
  console.info(req.query);

  res.send("Welcome to Wild Series !");
};

module.exports = { SaySomething };
