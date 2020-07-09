let express = require("express");
let router = express.Router();
let nodemailer = require("nodemailer");
let cors = require("cors");
let compression = require("compression");
const path = require("path");
const env = require("dotenv");

env.config({ path: path.join(__dirname, ".env") });

let transport = {
  host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let subject = req.body.subject;
  let content = `<h1>${name}</h1> <p>You can contact me here ${email}</p> <p>${subject}</p>  `;

  let mail = {
    from: email,
    to: "Ramanathanannes47@gmail.com", // Change to email address that you want to receive messages on
    subject: subject,
    html: content,
  };

  transporter.sendMail(mail, (err, data) => {
    console.log(err, data);
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT || 3002);

app.use(express.static(path.join(__dirname, "clientside/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "clientside/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "clientside/build/index.html")));
  });
} else {
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "clientside/public/index.html")));
  });
}
console.log("outside", process.env.PORT);
