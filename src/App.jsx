import styles from "./App.module.css";
import { Me } from "./componets/Me/Me";
import { Navbar } from "./componets/Navbar/Navbar";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Me />
    </div>
  );
}

export default App
