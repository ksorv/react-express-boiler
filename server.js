const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  const testData = [
    { id: 1, fName: "John", lName: "Doe" },
    { id: 2, fName: "Johnson", lName: "Doeson" },
    { id: 3, fName: "Johny", lName: "Doey" }
  ];

  res.json(testData);
});

app.get("/api/running", (req, res) => {
  res.send({ connected: true });
});

const port = 5000;

app.listen(port, () => console.log(`Server started in port: ${port}`));
