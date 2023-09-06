const app = require("./app");
require("dotenv").config();

const port = process.send.PORT || 3333;

app.listen(port, () => console.log(`http://localhost:${port}`));
