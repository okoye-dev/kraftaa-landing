import { useRef, useState } from "react";
import { motion } from "framer-motion";

// import Image from "next/image";
// import circleBg from "@/assets/images/circle.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const slideInLeft = {
  hidden: { x: -25, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
};

export const HowItWorks = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.offsetWidth * index;
    scrollContainerRef.current.scrollTo({
      left: index > 0 ? scrollAmount + 15 : scrollAmount,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const itemWidth = scrollContainerRef.current.offsetWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const cards = [
    {
      title: "For Client",
      steps: [
        "Sign up as Client",
        "Search for artisan near you",
        "Get the quality service from home or anywhere",
      ],
    },
    {
      title: "For Artisan",
      steps: [
        "Sign up as Artisan",
        "Properly set up your profile so clients can find you",
        "Get paid when you finish your job",
      ],
    },
  ];

  return (
    <div className="relative z-40 overflow-hidden px-4 sm:px-10 md:px-12">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="z-50 my-16 flex flex-col rounded-[50px] border-green-dark bg-green-light py-16"
      >
        <motion.p
          variants={fadeInUp}
          className="text-center text-2xl font-bold text-darkblue sm:text-3xl md:text-5xl"
        >
          How Kraftaa works
        </motion.p>

        {/* Mobile Carousel */}
        <motion.div
          variants={fadeInUp}
          className="relative mt-[30px] px-3 md:hidden"
        >
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex gap-3 overflow-x-auto scroll-smooth"
            onScroll={handleScroll}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={index === 0 ? slideInLeft : slideInRight}
                className="w-full flex-none snap-center"
              >
                <motion.div className="relative mx-[5%] w-[90%] overflow-hidden rounded-[40px] bg-darkblue p-2 pb-14 md:rounded-[50px]">
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-[50px] bg-white py-4 text-center text-xl font-semibold text-darkblue md:py-6 md:text-2xl"
                  >
                    {card.title}
                  </motion.p>

                  <motion.ol
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 list-none space-y-4 p-4 text-xs font-normal text-white"
                  >
                    {card.steps.map((step, stepIndex) => (
                      <motion.li
                        key={stepIndex}
                        variants={fadeInUp}
                        className="relative flex items-start px-4"
                      >
                        <motion.span className="absolute -left-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-light text-darkblue md:h-6 md:w-6">
                          {stepIndex + 1}
                        </motion.span>
                        {step}
                      </motion.li>
                    ))}
                  </motion.ol>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
            {cards.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                whileTap={{ scale: 0.9 }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-white"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop Layout */}
        <div className="z-50 mt-14 hidden w-full justify-center gap-5 px-8 md:flex lg:gap-[5vw]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={index === 0 ? slideInLeft : slideInRight}
              className="rounded-[50px] bg-darkblue pb-14 pt-2 lg:max-w-[28rem]"
            >
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`mx-2 rounded-[50px] bg-white py-6 text-center text-2xl font-semibold text-darkblue ${
                  index === 0 ? "md:text-ink" : ""
                }`}
              >
                {card.title}
              </motion.p>

              <motion.ol
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="ml-12 mt-5 list-none space-y-5 pl-4 pr-8 font-normal text-white lg:mt-8 lg:text-lg"
              >
                {card.steps.map((step, stepIndex) => (
                  <motion.li
                    key={stepIndex}
                    variants={fadeInUp}
                    className="relative flex items-start"
                  >
                    <motion.span className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-green-light text-darkblue">
                      {stepIndex + 1}
                    </motion.span>
                    {step}
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center md:mt-16"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="rounded-[100px] bg-darkblue px-10 py-3 font-semibold text-white duration-300 hover:bg-purple hover:px-12 hover:py-4 md:text-xl"
          >
            Get started
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Circles */}
      {/* <Image
        src={circleBg}
        alt=""
        className="absolute -left-[20vw] bottom-[20rem] z-20 w-[50vw] md:w-[70vw] lg:w-[40vw]"
      />
      <Image
        src={circleBg}
        alt=""
        className="absolute -right-[20vw] bottom-0 z-50 w-[40vw] md:-bottom-[5vw] md:w-[70vw] lg:w-[40vw]"
      /> */}
    </div>
  );
};
