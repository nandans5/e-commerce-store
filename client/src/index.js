import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const container = document.getElementById("root");
const root = createRoot(container);

const stripePromise = loadStripe(
  "pk_test_51MW2YfDs9R8AEhDAKf1BZqoBcL3EZ7A7W9m4hqYzu0ZEfiikgDBWepvDPRAVZJj2ejBoWmzyshfbn0XSJcZ5pjRX00n8TihPhV"
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
