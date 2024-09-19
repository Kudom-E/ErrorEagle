import express, { Request, Response } from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Error Eagle to the World");
});

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});
