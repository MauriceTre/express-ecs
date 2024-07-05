import express from "express"

const PORT = 5050;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!! wie geht es dir?");
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});