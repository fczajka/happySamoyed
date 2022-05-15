import { motion } from "framer-motion";
import React from "react";

const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Animation = ({ children }) => {
    return (
        <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7 }}
        >
            {children}
        </motion.div>
    );
};

export default Animation;
