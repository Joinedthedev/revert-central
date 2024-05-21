type CardProps = {
  title: string;
  imageSrc: string;
  text: string;
  sendSomewhere: string;
};

export const featureCards: CardProps[] = [
  {
    title: "Pillars of Islam",
    imageSrc: "https://www.islamfort.info/wp-content/uploads/2020/11/PILLER-OF-ISLAM-IMAGE.jpg",
    text: "Learn about the foundations of your religion",
    sendSomewhere: "/",
  },

  {
    title: "Pillars of Iman",
    imageSrc: "https://images.adsttc.com/media/images/64cb/98a1/4b88/3f34/2c35/c489/large_jpg/colors-in-islamic-architecture_1.jpg?1691064540",
    text: "Learn what your faith should consist of as a Muslim.",
    sendSomewhere: "/",
  },

  {
    title: "Our Prophet",
    imageSrc: "https://a0.anyrgb.com/pngimg/194/602/five-pillars-of-islam-jewish-symbolism-hamsa-star-and-crescent-symbols-of-islam-religious-symbol-mosque-quran-ramadan-allah.png",
    text: "Learn about the greatest man to ever walk the face of the planet Earth",
    sendSomewhere: "/",
  },

  {
    title: "Community",
    imageSrc: "https://www.un.org/sites/un2.un.org/files/2021/02/unfss-community.jpg",
    text: "Join our community of reverts all across the world!",
    sendSomewhere: "/",
  },
];
