/* eslint-disable no-console */
import app from './app';

app.listen(process.env.port || 3333);
console.log('Server up and running');
