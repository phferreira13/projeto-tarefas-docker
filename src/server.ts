import app from './app';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;

const dbUser = process.env.MONGO_USERNAME || 'app-tarefas';
const dbPassword = process.env.MONGO_PASSWORD || 'tarefas123';
const dbName = process.env.MONGO_DATABASE || 'app_tarefas';

const mongoConnection = `mongodb://${dbUser}:${dbPassword}@mongo:27017/${dbName}`;

mongoose.connect(mongoConnection)
.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
    console.log(mongoConnection);    
    console.log(error);
});