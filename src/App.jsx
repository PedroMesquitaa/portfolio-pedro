import styles from "./App.module.css";
import { About } from "./componets/About/About";
import { Me } from "./componets/Me/Me";
import { Navbar } from "./componets/Navbar/Navbar";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Me />
      <About />
    </div>
  );
}

export default App
