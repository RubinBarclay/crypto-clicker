let items = [
  { 
    name:"Half smoked cigarette", 
    desc:"The nicotine makes your clicking slightly more efficient", 
    price: 0.25,
    buffs: {
      active: 2.5,
      passive: 1
    },
  },
  { 
    name:"A whole cigarette", 
    desc:"Yay, more nicotine!", 
    price: 0.50,
    buffs: {
      active: 2,
      passive: 1
    },
  },
  { 
    name:"Strange russian energy drink", 
    desc:"Contains more than just caffiene...", 
    price: 1,
    buffs: {
      active: 2.5,
      passive: 1
    },
  },
  { 
    name:"Garbage dump GPU", 
    desc:"Sold to you by a homeless guy", 
    price: 4,
    watts: 120,
    buffs: {
      active: 1.5,
      passive: 2.5
    },
  },
  { 
    name:"Early 00's CPU", 
    desc:"It was considered good 20 years ago", 
    price: 6.5,
    watts: 135,
    buffs: {
      active: 1.5,
      passive: 2
    },
  },
  { 
    name:"Dell Dimensions 8200", 
    desc:"Old but gold", 
    price: 12,
    watts: 140,
    buffs: {
      active: 2.5,
      passive: 3
    },
    level: 2,
  },
  { 
    name:"Second hand GPU upgrade", 
    desc:"Yikes, costs more than your computer", 
    price: 20,
    watts: 160,
    buffs: {
      active: 1.5,
      passive: 2
    },
  },
  { 
    name:"Craigslist gaming PC", 
    desc:"God bless craigslist", 
    price: 40,
    watts: 200,
    buffs: {
      active: 2,
      passive: 2
    },
    level: 3,
  },
  { 
    name:"Last last last gen GPU", 
    desc:"Sold to you by a homeless guy", 
    price: 60,
    watts: 260,
    buffs: {
      active: 2.5,
      passive: 2
    },
  },
  { 
    name:"Dual GPUs", 
    desc:"Two is better than one", 
    price: 60,
    watts: 320,
    buffs: {
      active: 2.5,
      passive: 2
    },
  },
  { 
    name:"Your cousins gaming PC",
    desc:"He likes you, so he cuts you a neat deal.", 
    price: 200,
    watts: 420,
    buffs: {
      active: 2.5,
      passive: 2
    },
    level: 4,
  },
  { 
    name:"Brand new GPU",
    desc:"Straight off the store shelf", 
    price: 650,
    watts: 550,
    buffs: {
      active: 2.5,
      passive: 2
    },
  },
  { 
    name:"Dual GPUs",
    desc:"So much power!", 
    price: 650,
    watts: 680,
    buffs: {
      active: 2.5,
      passive: 2
    },
  },
  { 
    name:"Designated Mining Rig",
    desc:"A money printing machine", 
    price: 1600,
    watts: 800,
    buffs: {
      active: 2.5,
      passive: 2
    },
    level: 5,
  },
]

// Give items index as keys
items.forEach(item => { item.key = items.indexOf(item) });

export default items;
