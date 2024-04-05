import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      const scrollPercentage =
        (scrollTop / (scrollHeight - windowHeight)) * 100;

      setIsVisible(scrollPercentage > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed bottom-24 right-5 flex items-end justify-start cursor-pointer"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <BsArrowUpCircle color="gold" size={24} />
      </motion.div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-24 right-5 flex items-end justify-start cursor-pointer"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: "flex" }}
          >
            <BsArrowUpCircle color="gold" size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
