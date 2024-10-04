const express = require('express');
const client = require('prom-client');
const app = express();
const port = 4000;

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });
app.get('/', (req, res) => {
  res.send('Hello from GET');
});

app.get('/user', (req, res) => {
  res.send('Hello from User');
});

app.get('/test', (req, res) => {
  res.send('Hello from Test');
});

app.get('/metrics', async (req, res) => {
  res.setHeader('content-type', client.register.contentType);
  const metrics = await client.register.metrics();
  res.send(metrics);
});

app.listen(port, () => {
  console.log('Application is running on port: 3000');
});
