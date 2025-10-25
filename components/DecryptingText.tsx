"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-+=[]{}|;:,.<>?";

interface DecryptingTextProps {
  targetText: string;
  speed?: number;
}

const DecryptingText: React.FC<DecryptingTextProps> = ({
  targetText ,
  speed = 8,
}) => {
  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    let animationFrameId: number;
    let iteration = 0;
    let isMounted = true;

    const animationSpeed = Math.max(1, speed);

    const scramble = () => {
      if (!isMounted) return;

      const newText = targetText
        .split("")
        .map((char: string, index: number) => {
          if (iteration / animationSpeed > index) {
            return targetText[index];
          }
          if (char === " ") return " ";
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setCurrentText(newText);

      if (iteration < targetText.length * animationSpeed) {
        iteration += 1;
        animationFrameId = requestAnimationFrame(scramble);
      } else {
        setCurrentText(targetText);
      }
    };

    scramble();

    return () => {
      isMounted = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [targetText, speed]);

  return (
    <motion.p
      className="text-2xl md:text-4xl lg:text-5xl font-bold text-left wrap-break-word z-10 gradient font-Rev"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {currentText}
    </motion.p>
  );
};

const DecryptingView: React.FC = () => {
  const demoLines = "Capture what matters -- Briefly";
  const demoLines2 = "";

  return (
    <div className={`font-Rev  flex flex-col text-left p-4 gap-2 overflow-hidden relative mt-8 max-w-2xl  text-5xl font-medium md:text-6xl lg:mt-16`}>
      <div className="w-full max-w-4xl z-10 space-y-2 text-left ">
        <DecryptingText targetText={demoLines} speed={5}  />
        {/* <DecryptingText targetText={demoLines2} speed={5} /> */}
      </div>
      {/* className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16" */}
    </div>
  );
};

export default DecryptingView;