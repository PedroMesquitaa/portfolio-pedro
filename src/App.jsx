import styles from "./App.module.css";
import { About } from "./componets/About/About";
import { Contact } from "./componets/Contact/Contact";
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
      <Contact />
    </div>
  );
}

export default App
