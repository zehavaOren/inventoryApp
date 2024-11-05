const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/ProductRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
