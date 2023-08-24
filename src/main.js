import chalk from 'chalk';

import dotenv from "dotenv";
import express from "express";
import cors from "cors";

// Routes
import storyRoute from "./routes/router.story.js";
import mapRoute from "./routes/router.map.js";
import itemRoute from "./routes/router.item.js";

dotenv.config();
var corsOptions = {
  origin: '*',
}

const app = new express();

app.use(cors(corsOptions));
app.use(express.json());


app.use('/story', storyRoute);
app.use('/map', mapRoute);
app.use('/item', itemRoute);
app.use('/sprites', express.static('images'))
app.use('/health', (req, res) => {
  console.log('Server Status: ', chalk.green('Good'));
  res.send('Running');
});

app.listen(process.env.PORT, () => {
  console.log(chalk.blue(`Running on port: ${process.env.PORT}`));
});