import "./styles.css";

import { NotificationCenter } from "./NotificationCenter";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const types = ["success", "info", "warning", "error"];

export default function App() {
  const addNotification = () => {
    // use a random type of notification
    toast("Aqui será escrita alguma mensagem...", {
      type: types[Math.floor(Math.random() * types.length)] as TypeOptions
    });
  };

  return (
    <div className="App">
      <button onClick={addNotification}>Notificar</button>
      <hr />
      <NotificationCenter />
      <ToastContainer position="top-right" newestOnTop />
    </div>
  );
}