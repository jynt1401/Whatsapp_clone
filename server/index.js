const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { header } = require("express-validator");
const auth = require("./Routes/auth");
const user = require("./Routes/user");
const convo = require("./Routes/Convo");
const Status = require("./Routes/Status");
const app = express();
const fileUpload = require("express-fileupload");

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    
    origin: "https://whatsapp-clone-weld.vercel.app/",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    
    origin: "https://whatsapp-clone-weld.vercel.app/",
    credentials: true,
  })
);

//------------socket-----------//


//------------socket-----------//

//---------------mongoose connection----------------//

const Connection_url =
  "mongodb+srv://jayantbelwanshi1401:8458923788@cluster0.c3lyk9v.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3001;

mongoose
  .connect(Connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen(PORT, () => console.log(`runnging ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set("strictQuery", true);
mongoose.set("strictQuery", true);

//---------------mongoose connection----------------//

//here are routes for backend calls

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://whatsapp-clone-weld.vercel.app/"
  );
  res.header(
    "Access-Control-Allow-Origin",
    "Origin,X-Requested-With,Content-Type,Accept",
    "Access-Control-Allow-Methods: GET, DELETE, HEAD, OPTIONS, POST"
  );
  next();
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(express.json());
app.use("/googleauth", auth);
app.use("/users", user);
app.use("/convo", convo);
app.use("/status", Status);
