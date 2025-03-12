import { motion } from "framer-motion";
import "./style/bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.css";
import "./style/bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/js/bootstrap.bundle.js";
import "./style/theme.css";


function App() {

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="container my-5"
    >
    <h2 className="text-center">Titre de la Section</h2>
    <p className="text-muted">Ce texte apparaît progressivement au scroll.</p>
    </motion.div>
  );
}


export default App
