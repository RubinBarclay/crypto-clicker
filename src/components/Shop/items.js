/*
  Half smoked cigarette
    - 0.05
    - the nicotine makes your clicking slighty more efficient
  Strange russian energy drink
    - 0.1
    - Contains more than just caffiene...
  Grandma's old computer
    - 10
  Craigslist Gaming PC
  
*/
let shopItems = [
  { key: "1", 
    name:"Half smoked cigarette", 
    desc:"The nicotine makes your clicking slightly more efficient", 
    price: 0.05,
    activeBuff: 2.5,
    passiveBuff: 1,
  },
  { 
    key: "2", 
    name:"A whole cigarette", 
    desc:"Yay, more nicotine!", 
    price: 0.1,
    activeBuff: 2.5,
    passiveBuff: 1,
  },
  { 
    key: "3", 
    name:"Strange russian energy drink", 
    desc:"Contains more than just caffiene...", 
    price: 0.25,
    activeBuff: 3,
    passiveBuff: 1,
  },
  { 
    key: "4", 
    name:"Garbage dump GPU", 
    desc:"Sold to you by a homeless guy", 
    price: 1,
    watts: 120,
    activeBuff: 3.5,
    passiveBuff: 2,
  },
  { 
    key: "5", 
    name:"Early 00's CPU", 
    desc:"It was considered good 2 decades ago", 
    price: 4,
    watts: 135,
    activeBuff: 2,
    passiveBuff: 5,
    rigImage: "level2.png",
  },
  { 
    key: "6", 
    name:"Dell Dimensions 8200", 
    desc:"Old but gold", 
    price: 12,
    watts: 140,
    activeBuff: 2,
    passiveBuff: 2.5,
    level: 2,
  },
  { 
    key: "7", 
    name:"Second hand GPU upgrade", 
    desc:"Yikes, costs more than your computer", 
    price: 20,
    watts: 160,
    activeBuff: 1.5,
    passiveBuff: 2,
  },
  { 
    key: "8", 
    name:"Craigslist gaming PC", 
    desc:"God bless craigslist", 
    price: 40,
    watts: 200,
    activeBuff: 2,
    passiveBuff: 2.5,
    level: 3,
  },
  { 
    key: "9", 
    name:"Last last last gen GPU", 
    desc:"Sold to you by a homeless guy", 
    price: 60,
    watts: 240,
    activeBuff: 1.5,
    passiveBuff: 1.5,
  },
  { 
    key: "10", 
    name:"Another GPU", 
    desc:"Two is better than one", 
    price: 60,
    watts: 280,
    activeBuff: 1.5,
    passiveBuff: 1.5,
  },
  { 
    key: "11", 
    name:"Your cousins gaming PC",
    desc:"He likes you, so he cuts you a neat deal.", 
    price: 200,
    watts: 400,
    activeBuff: 3.5,
    passiveBuff: 3,
    level: 4,
  },
]

export default shopItems;