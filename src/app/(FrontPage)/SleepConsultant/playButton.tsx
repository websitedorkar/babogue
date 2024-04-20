import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import PlayIcon from './img/play.svg';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PlayButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Play Button */}
      <Button variant={'ghost'} className='wave--animation p-0 h-[65px] w-[65px] max-w-[65px] lg:h-[90px] lg:w-[90px] lg:max-w-[90px] absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2' onClick={togglePopup}>
        <Image src={PlayIcon} alt="Play" />
      </Button>

      {/* POPUP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed top-0 start-0 w-full flex justify-center z-20 items-center min-h-screen'
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="bg-black w-full h-full absolute bg-opacity-50"
              onClick={togglePopup}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="relative bg-white w-full max-w-[60rem] lg:min-h-[60vh] m-3"
            >
              <div className="pb-[56.25%]">
                <iframe className='absolute h-full w-full' width="560" height="315" src="https://www.youtube.com/embed/muDpH2Ty2tg?si=0BQvS79QIiPd5IDF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PlayButton;
