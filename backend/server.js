const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const groupRoutes = require('./routes/groups');

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB Atlas using your user and password
mongoose.connect(
  'mongodb://sohan_kr:Coffee18@ac-l6dd7mu-shard-00-00.e65f6zu.mongodb.net:27017,ac-l6dd7mu-shard-00-01.e65f6zu.mongodb.net:27017,ac-l6dd7mu-shard-00-02.e65f6zu.mongodb.net:27017/study-group-finder?ssl=true&replicaSet=atlas-11kjni-shard-0&authSource=admin&retryWrites=true&w=majority'
)
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
