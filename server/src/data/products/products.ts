export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wheel Spinner',
    price: 5.99,
    description: 'A wheel fidget spinner that spins wheels',
    image: 'http://localhost:8081/fidget-1.jpg',
    longDescription:
      'Our Wheel Spinner is fun, functional, and maybe just a little bit strange. It allows you to spin your wheels with ease-- making it great for stress relief or just entertainment. This fidget spinner is handcrafted using brass and then plated in gold or rose gold to ensure the finest quality spinning action, making it the best way to get your wheels moving.',
  },
  {
    id: 2,
    name: 'Solid Rainbow',
    price: 8.99,
    description: 'A solid steel of rainbow fidget spinning goodness.',
    image: 'http://localhost:8081/fidget-2.jpg',
    longDescription:
      'The Solid Rainbow fidget spinner is a hit. Its full metal body is made from a single piece of steel that takes hours to cut and machine. The center body has been treated with an electroplated natural copper finish that will tarnish over time as it touches your skin, just as the copper toys from the 70s did. The rainbow finish on the outer ring can be customized using various methods, including leaving it raw to see the natural finish on the stainless steel or applying a colored powder coat finish.',
  },
  {
    id: 3,
    name: 'Dragon Spinner',
    price: 7.99,
    description: 'A winged dragon of a spinner.',
    image: 'http://localhost:8081/fidget-3.jpg',
    longDescription:
      'The Dragon Spinner is a new take on an ancient toy. Made of durable polycarbonate, it is strong enough to withstand the force generated by its razor-sharp spinning capabilities. It also features our signature edition design to make it one-of-a-kind — and one that you and your friends will love. What better way to relieve stress and anxiety than with a simple fidget spinner?',
  },
  {
    id: 5,
    name: 'Rainbow Flames',
    price: 7.99,
    description: 'Flaming rainbow fun for all ages.',
    image: 'http://localhost:8081/fidget-5.jpg',
    longDescription:
      'Rainbow Flames are small (1.5″ in diameter or approx. 46mm) fidget spinner toys. They are fun for people of all ages, including adults and kids. Kids love to play with Rainbow Flames because they are easy to spin and they come in assorted colors, like blue, green, red, white, purple and yellow possible combinations. Rainbow Flames fidget spinners are great for killing time; perfect for daydreaming, calming nerves, focusing attention & relaxing; better than nail biting & knuckle cracking. Rainbow Flames fidget spinners can be successfully incorporated into therapy sessions as fidget toys',
  },
  {
    id: 6,
    name: 'Jammin Spinner',
    price: 6.99,
    description: 'Jammin this rainbow inspired spinner is so much fun!',
    image: 'http://localhost:8081/fidget-6.jpg',
    longDescription:
      'Built with a 3v high-speed motor, this fidget spinner is sure to be a crowd pleaser. From the center axis to the buttons on each of the three caps, enough space was left between the pieces for a kinetic chain reaction -- creating a hypnotizing, spinning flowchart. The customizable caps give you 11 unique options to choose from. Our "Jammin" spinner comes in a stylish white box with a velvet lining and includes our standard 90 day manufacturer\'s warranty.',
  },
  {
    id: 7,
    name: 'Goldy-spinner',
    price: 8.99,
    description: 'So golden, so spinny! Classic and beautiful.',
    image: 'http://localhost:8081/fidget-7.jpg',
    longDescription:
      'This is the solid stainless steel fidget spinner that is perfect for any gold lover. It is build with 6 Fidget Spinner components giving it 6 super-sized bearings for maximum glide and endless spin time. A perfect combination of gold, steel & infinity.',
  },
  {
    id: 8,
    name: 'Golden pointers',
    price: 7.99,
    description: 'Beautiful pointed golden spinner with jade highlights.',
    image: 'http://localhost:8081/fidget-8.jpg',
    longDescription:
      "This unique fidget spinner has a jade highlight and is great for all ages. Great for anxiety, focusing, adhd, autism, quitting bad habits, staying awake and also helps with reducing stress and panic attacks. This product is designed in the USA and made from high quality materials. The weight and feel are perfect in the hands. It's not too light or to heavy allowing for long term use without causing fatigue in the hands. High Performance Gyroscopes With Smooth Rotation",
  },
  {
    id: 9,
    name: 'Rainbow Hearts',
    price: 8.99,
    description: "So much love in a spinner, it's all rainbows and hearts.",
    image: 'http://localhost:8081/fidget-9.jpg',
    longDescription:
      "Fidgeting is a human impulse. That's why we created the Rainbow Hearts: a fun and colorful fidget toy that brings together two of our most popular sleeves in one object. Rainbow Hearts is precision-machined in San Francisco, with a brushed stainless steel clicker, and clear acrylic rainbow colored hearts. And with all the customization that we offer, it will be truly unique!",
  },
  {
    id: 10,
    name: 'Gold and Silver Gears',
    price: 9.99,
    description: 'Sleek and beautiful, this spinner is so fast.',
    image: 'http://localhost:8081/fidget-10.jpg',
    longDescription:
      "The Gold and Silver Gears Fidget Spinner, by Gear Beast, is a steal of a deal on a super flashy fidget spinner. The body spins on high-quality stainless steel bearings, while the center piece is made from brass. It comes in a variety of colors, so no matter your style you're sure to find a fidget spinner you'll fall in love with.",
  },
  {
    id: 11,
    name: 'Gears Within Gears',
    price: 12.99,
    description:
      'So many gears and so little time. You will be endlessly fascinated by this spinner.',
    image: 'http://localhost:8081/fidget-11.jpg',
    longDescription:
      "Did you know that a standard gear train has 3 gears? It is true! And, we've given you all three in this delightful fidget spinner. Spin away and watch your mind be blown away by the seemingly endless and rapid movement of these three little clockwork wheels.",
  },
];

export default products;