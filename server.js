const connection = require("./service/dbConnect");
const app = require("./app");
const PORT = process.env.PORT || 3000;

connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT} port`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
