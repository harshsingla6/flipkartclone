const express = require ('express');
const app = express();
const mongoose = require('mongoose')
//mongodb+srv://root:<password>@cluster0.kwpcp.mongodb.net/<dbname>?retryWrites=true&w=majority



PORT = 2000

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');

mongoose.connect('mongodb+srv://root:harsh1998@cluster0.kwpcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndexe: true})
 .then(()=>{
   console.log('mongodb connected')
 })


app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api',categoryRoutes)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
