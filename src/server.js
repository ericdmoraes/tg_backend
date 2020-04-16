/* eslint-disable no-console */
import app from './app';

app.listen(process.env.PORT || 3333);
console.log(`Server up and running ${process.env.PORT || 3333}`);
