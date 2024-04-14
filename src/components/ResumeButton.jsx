'use client';

import { useEffect, useRef } from 'react';

const ResumeButton = ({ sectionId }) => {
  const buttonRef = useRef(null);

  useEffect(() => {

    let buttonRefValue = null; // <-- variable to hold ref value

    const handleClick = () => {
      if (buttonRef.current) {
        buttonRefValue = buttonRef.current;
        const abstractSection = document.getElementById(sectionId);
        abstractSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (buttonRefValue) {
      buttonRefValue.addEventListener('click', handleClick);
    }

    return () => {
      if (buttonRefValue) {
        buttonRefValue.removeEventListener('click', handleClick);
      }
    };
  }, [sectionId]);

  return (
    <button
      ref={buttonRef}
      className={`flex items-center bg-transparent text-cBody border-none cursor-pointer transition duration-300 ease-in-out focus:outline-none hover:underline hover:font-bold`}
    >
      - {sectionId}
    </button>
  );
};

export default ResumeButton;