const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HUEh4L3fxSNysi5OBHcKFkXlJUWhVnxU7wiKy9w6FT7kPHgQRWxKyZmWI4wDYVpKZWChuY2ez8lhitGuuZNa2V400LT2vn6wP"
);

// API

// App config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Recived BOOM!!! for this amount ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listenb, command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-2d6d9/us-central1/api
