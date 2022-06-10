const GROUP_A = "A"
const GROUP_B = "B"
const GROUP_C = "C"
const GROUP_D = 'D'
const GROUP_E = 'E'
const GROUP_F = 'F'
const GROUP_G = 'G'
const GROUP_H = 'H'

const A = 0
const B = 4*1
const C = 4*2
const D = 4*3
const E = 4*4
const F = 4*5
const G = 4*6
const H = 4*7

const LATEST_WORLD_CUP = 2022

const AFC       = '#fafe00'
const CAF       = '#454545'
const CONMEBOL  = '#ff0044'
const CONCACAF  = '#0f4bff'
const OFC       = "00ddff"
const UEFA      = "#00ff00"

const HOST          = 'H'
const GROUP_WINNER  = '1'
const GROUP_SECOND  = '2'
const GROUP_THIRD   = '3'
const GROUP_FORTH   = '4'
const PLAYOFF       = 'P'
const INTER_CONTINENTAL_PLAYOFF = 'ICP'


let urlSvgFlagMap = [
  // World Cup Logo for all years
  [
    'https://gist.githack.com/jasonbbccdd/81fac1a23b8e88394cff8937b82e259f/raw/d9cb1c862ac1cb3686a71dd3443cf1dabf6c7424/nav-brand-world-cup-2022.svg',
    'https://gist.githack.com/jasonbbccdd/a6f0a68ab215b9b7d0d4ca25f6e101cc/raw/dead2fd64de01910433fe4c027932263cd1f9839/nav-brand-world-cup-2018.svg',
    'https://gist.githack.com/jasonbbccdd/852a6d648df9aa4b72ccd4b344131503/raw/5abac6a0ef915afb227e87c7b30e5ca6caed7928/nav-brand-world-cup-2014.svg',
    'https://gist.githack.com/jasonbbccdd/f9f1fd854fbb56c486ddb9271e6037f5/raw/193cb4e0b9b46878f1ef361905aa3fe9d365c44a/nav-brand-world-cup-2010.svg',
    'https://gist.githack.com/jasonbbccdd/2514cd20cbf34b06b49d250c7848f010/raw/3e7299b2927ca22c441782b7d32321f247fbd1e1/nav-brand-world-cup-2006.svg',
    'https://gist.githack.com/jasonbbccdd/911daf1360d3bd82f19f7798ba08b210/raw/9039282b7a0915d04c2d74ebdfc9df787c8effda/nav-brand-world-cup-2002.svg',
    'https://gist.githack.com/jasonbbccdd/3ef94116a2d3b91559ed5a94df55327c/raw/2e5f723d5dc64c741c5600dd614892d4e76fe2f1/nav-brand-world-cup-1998.svg'
  ],

  // Group A for all years
  [
    'https://gist.githack.com/jasonbbccdd/41c44049ec44f21bf6e0ced9a9526431/raw/6b023eee8a8df0635c79931873c57c2539a26e41/flag-ecu.svg',
    'https://gist.githack.com/jasonbbccdd/3907d0d4a4dcb5a4ec74b945c9a710e4/raw/9c421869ccaa215a1e1f00979aa0f0bb1be94a74/flag-egy.svg'

  ],
  [
    'https://gist.githack.com/jasonbbccdd/248fc767a6fee7a915c113d23d3da048/raw/06d6a41ebf89fdd059a48015a1f134eba69be8be/flag-ned.svg',
    'https://gist.githack.com/jasonbbccdd/78554094c179ae5a19c9b3438fbdec25/raw/b9500a4d47db8fb736d8550763481f8796359e18/flag-rus.svg'

  ],
  [
    'https://gist.githack.com/jasonbbccdd/d6da73021b57268276676e54e5a6104e/raw/18550b53867e503e218b067583fefbb3d11bcd0a/flag-qat.svg',
    'https://gist.githack.com/jasonbbccdd/3a232d7a6a4ff51b01eb07e381773603/raw/931a3616e5a58617923506ed189aebf31c911bf8/flag-ksa.svg'

  ],
  [
    'https://gist.githack.com/jasonbbccdd/32b85165769270ae5fee4ef99e60f659/raw/17ed4ddb9e50e2eb989ee7de1210b4e09c506abe/flag-sen.svg',
    'https://gist.githack.com/jasonbbccdd/3a7b0dadd85fba3d58cac5a66edcd70f/raw/7ad7872cc72ccf4fe965f3de001836d991935fda/flag-uru.svg'
  ],

  // Group B for all years
  [
    'https://gist.githack.com/jasonbbccdd/9068fc8fed986dd27402321a90d125f3/raw/70e07c3d21183883f6ec122cf0873be2ec5d6c99/flag-eng.svg',
    'https://gist.githack.com/jasonbbccdd/c29753d00bb8ec9f5306fa4bbabc83f7/raw/30c2f3b39ccefc94a8bdfffd86f350bf29b3c04a/flag-irn.svg'

  ],
  [
    'https://gist.githack.com/jasonbbccdd/c29753d00bb8ec9f5306fa4bbabc83f7/raw/30c2f3b39ccefc94a8bdfffd86f350bf29b3c04a/flag-irn.svg',
    'https://gist.githack.com/jasonbbccdd/f0095ba3218c3aabe3799c513da30574/raw/024e363a3387b3b08f65df4b2c72419bdd26fd87/flag-mar.svg'

  ],
  [
    'https://gist.githack.com/jasonbbccdd/8c31568776017604c23d422ded061d20/raw/871b008fd62818a589ac1f2bd0b45d701bd1370e/flag-usa.svg',
    'https://gist.githack.com/jasonbbccdd/7bc47e95a76b686e22aec03a289fe2e6/raw/a499f84180624890a7bae43bfda71da8deac7c98/flag-por.svg'

  ],
  [
    'https://gist.githack.com/jasonbbccdd/fe34404191cdcc9ed7057f9bffed7b95/raw/f44cb055cffef2ad98ff69de771c54a58bf0f548/flag-wal.svg',
    'https://gist.githack.com/jasonbbccdd/40b893697cd8060b624b019b0ce905ce/raw/24020c058190c51d0af9b3cebf50acc84acefc28/flag-esp.svg'

  ],

  // Group C for all years
  [
    'https://gist.githack.com/jasonbbccdd/b207486fcf8a5dee3837f1b32884d621/raw/7ffa4440ad9e9a934fa26e9bcbb69d57219d73a8/flag-arg.svg',
    'https://gist.githack.com/jasonbbccdd/b408be2f2cff65723e1f94e7534bd1ae/raw/8548673148b9835fc9d028e9461814a7427de26f/flag-aus.svg'

  ],
  [
    'https://gist.githack.com/jasonbbccdd/3a232d7a6a4ff51b01eb07e381773603/raw/931a3616e5a58617923506ed189aebf31c911bf8/flag-ksa.svg',
    'https://gist.githack.com/jasonbbccdd/1ae01550c1f539012597a38912fce4bd/raw/d38afa8eb4664f2dc4f92c99aff1875d8cdcb094/flag-den.svg'

  ],
  [
    'https://gist.githack.com/jasonbbccdd/19fdd860587e1333247f1bae63c1bf31/raw/a5fbbed322a537691912212009a135376005686b/flag-mex.svg',
    'https://gist.githack.com/jasonbbccdd/6bbfd8395cfc0e7a3c8c8d8d59d4bf00/raw/3e7012f3290a068c9cbc353e4f1c592ccf0716c4/flag-fra.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/1bb09af1d1d48c6d3b635a51f28bf578/raw/28bbaca25ff1ee7b5163cb579e8ef8ee6a4ef1cd/flag-pol.svg',
   'https://gist.githack.com/jasonbbccdd/5050fb171dddc7a43873d729a72d1e80/raw/fec567eb5c173a48b1e1f5337cc1224002e2fa40/flag-per.svg'
  ],

  // Group D for all years
  ['https://gist.githack.com/jasonbbccdd/1ae01550c1f539012597a38912fce4bd/raw/d38afa8eb4664f2dc4f92c99aff1875d8cdcb094/flag-den.svg',
  'https://gist.githack.com/jasonbbccdd/b207486fcf8a5dee3837f1b32884d621/raw/7ffa4440ad9e9a934fa26e9bcbb69d57219d73a8/flag-arg.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/6bbfd8395cfc0e7a3c8c8d8d59d4bf00/raw/3e7012f3290a068c9cbc353e4f1c592ccf0716c4/flag-fra.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/5050fb171dddc7a43873d729a72d1e80/raw/fec567eb5c173a48b1e1f5337cc1224002e2fa40/flag-per.svg',
  'https://gist.githack.com/jasonbbccdd/3f43adfda7a6f29eeba3deda48823a87/raw/4ba33ff2f0499bcff1f48a4cc095cc3b0c551efa/flag-isl.svg'
  ],
  ['https://gist.githack.com/jasonbbccdd/98f850144a8db364354c1df669061d31/raw/0f49c8462a8d5c320a2a7fea2e7ba62b4e2aea7b/flag-tun.svg',
  'https://gist.githack.com/jasonbbccdd/944e2ddbabcbe7acfd9b0c983e9f9c85/raw/a15144313280199e4fd248fcd5c390ddeafbd6bf/flag-nga.svg'
  ],

  // Group E for all years
  ['https://gist.githack.com/jasonbbccdd/73ef7ec302922c6718d7b93103b52b21/raw/b0dc5015b5abd4009ffb61abb9745c453d82f765/flag-crc.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/40b893697cd8060b624b019b0ce905ce/raw/24020c058190c51d0af9b3cebf50acc84acefc28/flag-esp.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/696ab1089d4cd2e82f687372bb17ecbd/raw/cd4109924fb41a12c56614b07b2a190d4d96f8e1/flag-ger.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/88f5af9f1fd012c3fe552255d032a384/raw/5a615242101aacb64d6a693dcba11241b46da794/flag-jpy.svg'

  ],

  // Group F for all years
  ['https://gist.githack.com/jasonbbccdd/a7cc1dbe390dbd44f5ef4757c69841b0/raw/fef8ec9620f7e28407e3a9fa2fdb8337b064390c/flag-bel.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/5fb718fd443d71a2d665354e3c6a4b07/raw/debab4bb1bc0ccd73f1506a714aa13b8cc4a92ae/flag-can.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/9d280953f22ef30dcc5ddf0bba84b2e9/raw/a9a774a6227bec1005e85faa396ef1da5f16898c/flag-cro.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/f0095ba3218c3aabe3799c513da30574/raw/024e363a3387b3b08f65df4b2c72419bdd26fd87/flag-mar.svg'

  ],

  // Group G for all years
  ['https://gist.githack.com/jasonbbccdd/22436cf9638206344c54cf807dacfd83/raw/adbc9e182e3129fe6f7fccb604cc72a56d8a093c/flag-bra.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/8d18697bddea538db32316029d518ddd/raw/24f1e6563a9f71b839d54038c30b16252ecfec5e/flag-cmr.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/1ebd57de5f089247db9fd7e23b4addc2/raw/396881c13bfee84079f93e93fb5cb01268084c49/flag-srb.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/9cee789fd367abb7d4bcec333c48aeab/raw/7045002e1941ce3ca6c873ae455e7cadb99a2241/flag-sui.svg'

  ],

  // Group H for all years
  ['https://gist.githack.com/jasonbbccdd/8026941b2d8f248ec635b5aed0e86dc8/raw/a33fb5caddefb5d92d109491f2f45ad9c83dc0f9/flag-gha.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/a0b23b39bf051b671fa4c5694dcf7786/raw/be3a94fbdb1d8ce5611eab5b8f9af300d4613b23/flag-kor.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/7bc47e95a76b686e22aec03a289fe2e6/raw/a499f84180624890a7bae43bfda71da8deac7c98/flag-por.svg'

  ],
  ['https://gist.githack.com/jasonbbccdd/3a7b0dadd85fba3d58cac5a66edcd70f/raw/7ad7872cc72ccf4fe965f3de001836d991935fda/flag-uru.svg'

  ]
]
const data = {
  32: {
    A: {
      1: null,
      2: null,
      3: null,
      4: null
    },
    B: {},
    C: {},
    D: {},
    E: {},
    F: {},
    G: {},
    H: {}
  },
  16: {

  },
  8: {

  },
  4: {

  },
  2: {

  },
  1: {

  }
}

const teams2022 = {
  ECU: {
    id: 'ECU',
    name: 'Ecuador',
    url: {
      svgFlag: urlSvgFlagMap[A+1][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_A,
    qualification: {
      confederation: CONMEBOL,
      method: GROUP_FORTH
    }
  },
  NED: {
    id: 'NED',
    name: 'Netherland',
    url: {
      svgFlag: urlSvgFlagMap[A+2][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_A,
    qualification: {
      confederation: UEFA,
      method: GROUP_WINNER
    }
  },
  QAT: {
    id: 'QAT',
    name: 'Qatar',
    url: {
      svgFlag: urlSvgFlagMap[A+3][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_A,
    qualification: {
      confederation: AFC,
      method: HOST
    }
  },
  SEN: {
    id: 'SEN',
    name: 'Senegal',
    url: {
      svgFlag: urlSvgFlagMap[A+4][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_A,
    qualification: {
      confederation: CAF,
      method: GROUP_WINNER
    }
  },
  ENG: {
    id: 'ENG',
    name: 'England',
    url: {
      svgFlag: urlSvgFlagMap[B+1][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_B,
    qualification: {
      confederation: UEFA,
      method: GROUP_WINNER
    }
  },
  IRN: {
    id: 'IRN',
    name: 'Iran',
    url: {
      svgFlag: urlSvgFlagMap[B+2][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_B,
    qualification: {
      confederation: AFC,
      method: GROUP_WINNER
    }
  },
  USA: {
    id: 'USA',
    name: 'United States',
    url: {
      svgFlag: urlSvgFlagMap[B+3][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_B,
    qualification: {
      confederation: CONCACAF,
      method: GROUP_THIRD
    }
  },
  WAL: {
    id: 'WAL',
    name: 'Wales',
    url: {
      svgFlag: urlSvgFlagMap[B+4][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_B,
    qualification: {
      confederation: UEFA,
      method: PLAYOFF
 }
 },
  ARG: {
    id: 'ARG',
    name: 'Argentina',
    url: {
      svgFlag: urlSvgFlagMap[C+1][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_C,
      qualification: {
      confederation: CONMEBOL,
      method: GROUP_SECOND
    }
  },
  KSA: {
    id: 'KSA',
    name: 'Saudi Arabia',
    url: {
      svgFlag: urlSvgFlagMap[C+2][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_C,
      qualification: {
      confederation: AFC,
      method: GROUP_WINNER
    }
  },
  MEX: {
    id: 'MEX',
    name: 'Mexico',
    url: {
      svgFlag: urlSvgFlagMap[C+3][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_C,
    qualification: {
      confederation: CONCACAF,
      method: GROUP_SECOND
}
  },
  POL: {
    id: 'POL',
    name: 'Poland',
    url: {
      svgFlag: urlSvgFlagMap[C+4][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: GROUP_C,
      qualification: {
        confederation: UEFA,
        method: PLAYOFF
}
  },
  DEN: {
    id: 'DEN',
    name: 'Denmark',
    url: {
      svgFlag: urlSvgFlagMap[D+1][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'D',
    qualification: {
      confederation: UEFA
      method:
    }
  },
  FRA: {
    id: 'FRA',
    name: 'France'
    url: {
      svgFlag: urlSvgFlagMap[D+2][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'D',
, qualification: {
  confederation:
  method:
}
  },
  PER: {
    id: 'PER',
    name: 'Peru'
    url: {
      svgFlag: urlSvgFlagMap[D+3][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'D',
  , qualification: {
    confederation:
    method:
  }
},
  TUN: {
    id: 'TUN',
    name: 'Tunisia',
    url: {
      svgFlag: urlSvgFlagMap[D+4][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'D',
    qualification: {
      confederation:
      method:
    }
  },
  CRC: {
    id: 'CRC',
    name: 'Costa Ri,
    url: {
      svgFlag: urlSvgFlagMap[E+1][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'E',
    ca' qualification: {
      confederation:
      method:
    }
  },
  ESP: {
    id: 'ESP',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[E+2][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'E',
  },  qualification: {
    confederation:
    method:
  }
 ,
  GER: {
    id: 'GER',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[E+3][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'E',
  },  qualification: {
    confederation:
    method:
  }
 ,
  JPY: {
    id: 'JPY',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[E+4][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'E',
  },  qualification: {
    confederation:
    method:
  }
 ,
  BEL: {
    id: 'BEL',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[F+1][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'F',
  },  qualification: {
    confederation:
    method:
  }
 ,
  CAN: {
    id: 'CAN',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[F+2][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'F',
  },  qualification: {
    confederation:
    method:
  }
 ,
  CRO: {
    id: 'CRO',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[F+3][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'F',
  },  qualification: {
    confederation:
    method:
  }
 ,
  MAR: {
    id: 'MAR',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[F+4][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'F',
  },  qualification: {
    confederation:
    method:
  }
 ,
  BRA: {
    id: 'BRA',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[G+1][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'G',
  },  qualification: {
    confederation:
    method:
  }
 ,
  CMR: {
    id: 'CMR',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[G+2][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'G',
  },  qualification: {
    confederation:
    method:
  }
 ,
  SRB: {
    id: 'SRB',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[G+3][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'G',
  },  qualification: {
    confederation:
    method:
  }
 ,
  SUI: {
    id: 'SUI',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[G+4][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'G',
  },  qualification: {
    confederation:
    method:
  }
 ,
  GHA: {
    id: 'GHA',
    name: ''
    url: {
      svgFlag: urlSvgFlagMap[H+1][(LATEST_WORLD_CUP-2022)/4],
      svgAssociation: ''
    },
    group: 'G',
  },  qualification: {
    confederation:
    method:
  }
},


const grouping = {}

Object.keys(countries).forEach((countryCode) => {
  const countryData = countries[countryCode]
  const countryGroup = countryData.group
  if (grouping[countryGroup]) {
    grouping[countryGroup].push(countryData)
  } else {
    grouping[countryGroup] = [countryData]
  }
})
