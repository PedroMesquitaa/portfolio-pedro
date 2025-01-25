import styles from "./App.module.css";
import { About } from "./componets/About/About";
import { Experience } from "./componets/Experience/Experience";
import { Me } from "./componets/Me/Me";
import { Navbar } from "./componets/Navbar/Navbar";
import { Projects } from "./componets/Projects/Projects";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Me />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App
