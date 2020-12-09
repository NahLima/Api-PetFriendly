
const app = require("./src/app");

const port = process.env.PORT; // a porta 


app.listen(port, () => {
    console.log(`app está rodando na porta ${port}`);
  });