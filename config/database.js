const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sanalessa:sanalessapw@cluster0.smqdx.mongodb.net/mytinerary?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log("Database connected") )
.catch(error => console.log(error))
