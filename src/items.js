let items = [
  { 
    name: "Half smoked cigarette", 
    desc: "The nicotine makes your clicking slightly more efficient", 
    price: 0.25,
    buffs: {
      active: 2.5,
      passive: 1
    },
    levelReq: 1,
  },
  { 
    name: "A whole cigarette", 
    desc: "Yay, more nicotine!", 
    price: 0.50,
    buffs: {
      active: 2,
      passive: 1
    },
    levelReq: 1,
  },
  { 
    name: "Strange russian energy drink", 
    desc: "Contains more than just caffiene...", 
    price: 1,
    buffs: {
      active: 2.5,
      passive: 1
    },
    levelReq: 1,
  },
  { 
    name: "Garbage dump GPU", 
    desc: "Sold to you by a homeless guy", 
    price: 4,
    watts: 120,
    buffs: {
      active: 1.5,
      passive: 2
    },
    levelReq: 1,
  },
  { 
    name: "Early 00's CPU", 
    desc: "It was considered good 20 years ago", 
    price: 6,
    watts: 135,
    buffs: {
      active: 1.5,
      passive: 2
    },
    levelReq: 1,
  },
  { 
    name: "Ritalin® 30mg", 
    desc: "Need. More. Clicks...", 
    price: 10,
    buffs: {
      active: 1.5,
      passive: 1
    },
    levelReq: 1,
  },
  { 
    name: "Dell Dimensions 8200", 
    desc: "About time for a upgrade", 
    price: 18,
    watts: 150,
    buffs: {
      active: 2,
      passive: 2.5
    },
    levelReq: 1,
    levelUp: 2,
  },
  { 
    name: "8 year old GPU", 
    desc: "Yikes, costs more than your computer", 
    price: 32,
    watts: 165,
    buffs: {
      active: 1.5,
      passive: 1.5
    },
    levelReq: 2,
  },
  { 
    name: "Handfull of Adderall", 
    desc: "The Ritalin is wearing off, need something stronger", 
    price: 50,
    buffs: {
      active: 1.5,
      passive: 1
    },
    levelReq: 1,
  },
  { 
    name: "Craigslist gaming PC", 
    desc: "God bless craigslist", 
    price: 80,
    watts: 200,
    buffs: {
      active: 1.5,
      passive: 2.5 
    },
    levelReq: 2,
    levelUp: 3,
  },
  { 
    name: "Last last last gen GPU", 
    desc: "Not new, nor old. Aged?", 
    price: 85,
    watts: 280,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 3,
  },
  { 
    name: "Dual GPUs", 
    desc: "Two is better than one", 
    price: 85,
    watts: 360,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 3,
  },
  { 
    name: "1g of white", 
    desc: "You're not proud of it, but you need those clicks", 
    price: 100,
    buffs: {
      active: 1.5,
      passive: 1
    },
    levelReq: 3,
  },
  { 
    name: "Your cousins gaming PC",
    desc: "He likes you, so he cuts you a neat deal", 
    price: 300,
    watts: 550,
    buffs: {
      active: 1.25,
      passive: 2.5
    },
    levelReq: 3,
    levelUp: 4,
  },
  { 
    name: "Last gen GPU",
    desc: "Straight off the store shelf", 
    price: 480,
    watts: 650,
    buffs: {
      active: 1.125,
      passive: 2
    },
    levelReq: 4,
  },
  { 
    name: "Dual GPUs",
    desc: "So much power!", 
    price: 480,
    watts: 750,
    buffs: {
      active: 1.125,
      passive: 2
    },
    levelReq: 4,
  },
  { 
    name: "A very large bag of ice",
    desc: "It's crystal meth. Sleep is for the weak", 
    price: 800,
    buffs: {
      active: 1.5,
      passive: 1
    },
    levelReq: 4,
  },
  { 
    name: "Designated Mining Rig",
    desc: "A money printing machine", 
    price: 1600,
    watts: 1200,
    buffs: {
      active: 1.5,
      passive: 2.5
    },
    levelReq: 4,
    levelUp: 5,
  },
  { 
    name: "Next gen GPU",
    desc: "You just gotta have it", 
    price: 1050,
    watts: 1600,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 5,
  },
  { 
    name: "Next gen GPU",
    desc: "Another one", 
    price: 1050,
    watts: 1600,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 5,
  },
  { 
    name: "Next gen GPU",
    desc: "Another 'nother one", 
    price: 1050,
    watts: 1600,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 5,
  },
  { 
    name: "Next gen GPU",
    desc: "Another 'nother 'nother one", 
    price: 1050,
    watts: 1600,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 5,
  },
  { 
    name: "Solar panels",
    desc: "Gotta do something about that electricity bill", 
    price: 3800,
    watts: 2000,
    buffs: {
      active: 1,
      passive: 1
    },
    levelReq: 5,
  },
  { 
    name: "Mining Rig v2",
    desc: "Up the operation a bit", 
    price: 6200,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 5,
    levelUp: 6,
  },
  { 
    name: "Yet another GPU",
    desc: "Gotta fill up those slots", 
    price: 1050,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 6,
  },
  { 
    name: "Yet another GPU",
    desc: "One more can't hurt", 
    price: 1050,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 6,
  },
  { 
    name: "MiningRig v3",
    desc: "Yeah now we're talking business", 
    price: 10000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 6,
    levelUp: 7,
  },
  { 
    name: "A pair of new GPUs",
    desc: "Hey you've got money to spend", 
    price: 2100,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 7,
  },
  { 
    name: "A pair of new GPUs",
    desc: "Admit it, you like spending money", 
    price: 2100,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 7,
  },
  { 
    name: "A pair of new GPUs",
    desc: "Mmmmm money in the making", 
    price: 2100,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 7,
  },
  { 
    name: "A pair of new GPUs",
    desc: "Can't get enough of these things", 
    price: 2100,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 7,
  },
  { 
    name: "ASIC Miner Setup",
    desc: "Now you're in real deep", 
    price: 15000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 7,
    levelUp: 8,
  },
  { 
    name: "Another ASIC",
    desc: "If you're gonna do this you better do it right", 
    price: 8000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 8,
  },
  { 
    name: "Double up on ASIC power",
    desc: "Double you're machine count", 
    price: 16000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 8,
  },
  { 
    name: "Backyard wind turbine",
    desc: "Gotta counter that electricity bill", 
    price: 20000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 8,
  },
  { 
    name: "Double up on double ASIC power",
    desc: "Can't stop. Won't stop.", 
    price: 32000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 8,
  },
  { 
    name: "Crypto Mining Farm",
    desc: "It has more ASIC slots than you can count", 
    price: 100000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 8,
    levelUp: 9,
  },
  { 
    name: "Shopping cart full of ASICs",
    desc: "There's at least 20 in here", 
    price: 185000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 9,
  },
  { 
    name: "2 shopping carts full of ASICs",
    desc: "SO MANY MACHINES!", 
    price: 370000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 9,
  },
  { 
    name: "A couple more wind turbines",
    desc: "Go green right?", 
    price: 200000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 9,
  },
  { 
    name: "A hydropower dam",
    desc: "The river next to you're house is getting a makeover", 
    price: 1500000,
    watts: 2000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 9,
  },
  { 
    name: "A quantum computer",
    desc: "Ready to become a god?", 
    price: 10000000,
    watts: 25000,
    buffs: {
      active: 1.25,
      passive: 2
    },
    levelReq: 9,
    levelUp: 10,
  },
]

// Give items index as keys
items.forEach(item => { item.key = items.indexOf(item) });

export default items;
