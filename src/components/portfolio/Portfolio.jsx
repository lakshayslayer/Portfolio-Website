import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Damn Delicious",
    img: "./DamnDelicious.png",
    // <img src="/facebook.png" alt="" />
    desc: "Designed and developed a recipe website allowing users to search for recipes, view recipe pages, and submit their own recipes. Developed a recipe submission feature that allowed users to enter recipe details and upload photos, which were then saved in a database for easy access and viewing by other users.",
    link: "https://damndeliciousbas.onrender.com/",
  },
  {
    id: 2,
    title: "Konnect",
    img: "./konnect4.png",
    desc: "Developed a dynamic chat application designed to bring friends and family closer together. Integrated Firebase to facilitate real-time communication, improving user interaction and connectivity.Implemented a secure user authentication system.",
    link: "https://chating-app-one.vercel.app/",
  },
  {
    id: 3,
    title: "Tomorrow News",
    img: "./news1.png",
    desc: " A web application developed in NodeJS platform to keep you updated with the latest news. Features: Easy search using keywords and filters according to your interests , fast update due to integration with NewsAPI.",
    link: "https://tomorrownewss.onrender.com/",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>Website</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
