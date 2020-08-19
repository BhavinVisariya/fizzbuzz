const express = require('express');
const cors = require('cors');

const mainRoutes = require('./routes/main');

const app = express();

app.use(cors()); // We can set headers manually if dont want to use cors package

app.use('/api', mainRoutes);

app.use((err, req, res, next) => {
  return res.json({ error: err.message });
});

app.listen(4000);
