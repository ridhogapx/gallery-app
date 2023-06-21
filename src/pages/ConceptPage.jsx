import { motion } from "framer-motion"

const ConceptPage = () => {
    return (
        <motion.main className="mx-5" initial={{x: -20, opacity:0}} animate={{x: 0, opacity: 1}} transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99]}}>
            <h2 className="pt-12">Concept Page</h2>
        </motion.main>
    )
}

export default ConceptPage