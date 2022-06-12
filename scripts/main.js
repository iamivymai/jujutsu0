import { generate32Cards, generate32CardHTML, generate32CardStandingHTML } from './32.js'
import { generateBrackets } from './brackets.js'

// GLOBAL | Elements
const $groupings = $('#groupings')
const $brackets = $('#brackets')
const $main = $('#main')

// GLOBAL | Mapping
const GEN_BRACKETS_ORDER = [16, 8, 4, 'third', 'champion']
const STAGES_MAPPING = {
  32: {
    A1: [0, 0],
    A2: [4, 1],
    B1: [4, 0],
    B2: [0, 1],
    C1: [1, 0],
    C2: [5, 1],
    D1: [5, 0],
    D2: [1, 1],
    E1: [2, 0],
    E2: [6, 1],
    F1: [6, 0],
    F2: [2, 1],
    G1: [3, 0],
    G2: [7, 1],
    H1: [7, 0],
    H2: [3, 1]
  },
  16: {
    toStage: 8,
    mapping: {
      0: [0, 0],
      1: [0, 1],
      2: [1, 0],
      3: [1, 1],
      4: [2, 0],
      5: [2, 1],
      6: [3, 0],
      7: [3, 1]
    }
  },
  8: {
    toStage: 4,
    mapping: {
      0: [0, 0],
      1: [0, 1],
      2: [1, 0],
      3: [1, 1],
    }
  },
  4: {
    toStage: 'champion/third',
    mapping: {
      0: [0, 0],
      1: [0, 1],
    }
  }
}

// GLOBAL | Init Data
const groups = {
  A: {
    ECU: {
      id: 'ECU',
      name: 'Ecuador',
      flag: 'https://gist.githack.com/jasonbbccdd/41c44049ec44f21bf6e0ced9a9526431/raw/6b023eee8a8df0635c79931873c57c2539a26e41/flag-ecu.svg',
      association: '',
      qualification: {
        from: 'CONMEBOL',
        method: 'GROUP_FORTH'
      }
    },
    NED: {
      id: 'NED',
      name: 'Netherlands',
      flag: 'https://gist.githack.com/jasonbbccdd/248fc767a6fee7a915c113d23d3da048/raw/06d6a41ebf89fdd059a48015a1f134eba69be8be/flag-ned.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method: 'GROUP_WINNER'
      }
    },
    QAT: {
      id: 'QAT',
      name: 'Qatar',
      flag: 'https://gist.githack.com/jasonbbccdd/d6da73021b57268276676e54e5a6104e/raw/18550b53867e503e218b067583fefbb3d11bcd0a/flag-qat.svg',
      association: '',
      qualification: {
        from: 'AFC',
        method: 'HOST'
      }
    },
    SEN: {
      id: 'SEN',
      name: 'Senegal',
      flag: 'https://gist.githack.com/jasonbbccdd/32b85165769270ae5fee4ef99e60f659/raw/17ed4ddb9e50e2eb989ee7de1210b4e09c506abe/flag-sen.svg',
      association: '',
      qualification: {
        from: 'CAF',
        method: 'GROUP_WINNER'
      }
    },
  },
  B: {
    ENG: {
      id: 'ENG',
      name: 'England',
      flag: 'https://gist.githack.com/jasonbbccdd/9068fc8fed986dd27402321a90d125f3/raw/70e07c3d21183883f6ec122cf0873be2ec5d6c99/flag-eng.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method: 'GROUP_WINNER'
      }
    },
    IRN: {
      id: 'IRN',
      name: 'Iran',
      flag: 'https://gist.githack.com/jasonbbccdd/c29753d00bb8ec9f5306fa4bbabc83f7/raw/30c2f3b39ccefc94a8bdfffd86f350bf29b3c04a/flag-irn.svg',
      association: '',
      qualification: {
        from: 'AFC',
        method: 'GROUP_WINNER'
      }
    },
    USA: {
      id: 'USA',
      name: 'United States',
      flag: 'https://gist.githack.com/jasonbbccdd/8c31568776017604c23d422ded061d20/raw/871b008fd62818a589ac1f2bd0b45d701bd1370e/flag-usa.svg',
      association: '',
      qualification: {
        from: 'CONCACAF',
        method: 'GROUP_THIRD'
      }
    },
    WAL: {
      id: 'WAL',
      name: 'Wales',
      flag: 'https://gist.githack.com/jasonbbccdd/fe34404191cdcc9ed7057f9bffed7b95/raw/f44cb055cffef2ad98ff69de771c54a58bf0f548/flag-wal.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method: 'PLAYOFF'
      }
    },
  },
  C: {
    ARG: {
      id: 'ARG',
      name: 'Argentina',
      flag: 'https://gist.githack.com/jasonbbccdd/b207486fcf8a5dee3837f1b32884d621/raw/7ffa4440ad9e9a934fa26e9bcbb69d57219d73a8/flag-arg.svg',
      association: '',
      qualification: {
        from: 'CONMEBOL',
        method: 'GROUP_SECOND'
      }
    },
    KSA: {
      id: 'KSA',
      name: 'Saudi Arabia',
      flag: 'https://gist.githack.com/jasonbbccdd/3a232d7a6a4ff51b01eb07e381773603/raw/931a3616e5a58617923506ed189aebf31c911bf8/flag-ksa.svg',
      association: '',
      qualification: {
        from: 'AFC',
        method: 'GROUP_WINNER'
      }
    },
    MEX: {
      id: 'MEX',
      name: 'Mexico',
      flag: 'https://gist.githack.com/jasonbbccdd/19fdd860587e1333247f1bae63c1bf31/raw/a5fbbed322a537691912212009a135376005686b/flag-mex.svg',
      association: '',
      qualification: {
        from: 'CONCACAF',
        method: 'GROUP_SECOND'
      }
    },
    POL: {
      id: 'POL',
      name: 'Poland',
      flag: 'https://gist.githack.com/jasonbbccdd/1bb09af1d1d48c6d3b635a51f28bf578/raw/28bbaca25ff1ee7b5163cb579e8ef8ee6a4ef1cd/flag-pol.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method: 'PLAYOFF'
      }
    },
  },
  D: {
    DEN: {
      id: 'DEN',
      name: 'Denmark',
      flag: 'https://gist.githack.com/jasonbbccdd/1ae01550c1f539012597a38912fce4bd/raw/d38afa8eb4664f2dc4f92c99aff1875d8cdcb094/flag-den.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method: 'GROUP_WINNER'
      }
    },
    FRA: {
      id: 'FRA',
      name: 'France',
      flag: 'https://gist.githack.com/jasonbbccdd/6bbfd8395cfc0e7a3c8c8d8d59d4bf00/raw/3e7012f3290a068c9cbc353e4f1c592ccf0716c4/flag-fra.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method: 'GROUP_WINNER'
      }
    },
    PER: {
      id: 'PER',
      name: 'Peru',
      flag: 'https://gist.githack.com/jasonbbccdd/5050fb171dddc7a43873d729a72d1e80/raw/fec567eb5c173a48b1e1f5337cc1224002e2fa40/flag-per.svg',
      association: '',
      qualification: {
        from: 'CONMEBOL',
        method: 'INTER_CONTINENTAL_PLAYOFF'
      }
    },
    TUN: {
      id: 'TUN',
      name: 'Tunisia',
      flag: 'https://gist.githack.com/jasonbbccdd/98f850144a8db364354c1df669061d31/raw/0f49c8462a8d5c320a2a7fea2e7ba62b4e2aea7b/flag-tun.svg',
      association: '',
      qualification: {
        from: 'CAF',
        method: 'GROUP_WINNER'
      }
    },
  },
  E: {
    ESP: {
      id: 'ESP',
      name: 'Spain',
      flag: 'https://gist.githack.com/jasonbbccdd/40b893697cd8060b624b019b0ce905ce/raw/24020c058190c51d0af9b3cebf50acc84acefc28/flag-esp.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method: 'GROUP_WINNER',
      }
    },
    GER: {
      id: 'GER',
      name: 'Germany',
      flag: 'https://gist.githack.com/jasonbbccdd/696ab1089d4cd2e82f687372bb17ecbd/raw/cd4109924fb41a12c56614b07b2a190d4d96f8e1/flag-ger.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method:'GROUP_WINNER'
      }
    },
    JPY: {
      id: 'JPY',
      name: 'Japan',
      flag: 'https://gist.githack.com/jasonbbccdd/88f5af9f1fd012c3fe552255d032a384/raw/5a615242101aacb64d6a693dcba11241b46da794/flag-jpy.svg',
      association: '',
      qualification: {
        from: 'AFC',
        method:'GROUP_SECOND'
      }
    },
    NZL: {
      id: 'NZL',
      name: 'New Zealand',
      flag: 'https://gist.githack.com/jasonbbccdd/b135b48caf69cc16684747f95541bcbb/raw/9bb752284c07ab4b149b1114b54d40c6c1dacab3/flag-nzl.svg',
      association: '',
      qualification: {
        from: 'OFC',
        method:'INTER_CONTINENTAL_PLAYOFF'
      }
    }
  },
  F: {
    BEL: {
      id: 'BEL',
      name: 'Belgium',
      flag: 'https://gist.githack.com/jasonbbccdd/a7cc1dbe390dbd44f5ef4757c69841b0/raw/fef8ec9620f7e28407e3a9fa2fdb8337b064390c/flag-bel.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method: 'GROUP_WINNER',
      }
    },
    CAN: {
      id: 'CAN',
      name: 'Canada',
      flag: 'https://gist.githack.com/jasonbbccdd/5fb718fd443d71a2d665354e3c6a4b07/raw/debab4bb1bc0ccd73f1506a714aa13b8cc4a92ae/flag-can.svg',
      association: '',
      qualification: {
        from: 'CONCACAF',
        method:'GROUP_WINNER'
      }
    },
    CRO: {
      id: 'CRO',
      name: 'Croatia',
      flag: 'https://gist.githack.com/jasonbbccdd/9d280953f22ef30dcc5ddf0bba84b2e9/raw/a9a774a6227bec1005e85faa396ef1da5f16898c/flag-cro.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method:'GROUP_WINNER'
      }
    },
    MAR: {
      id: 'MAR',
      name: 'Morocco',
      flag: 'https://gist.githack.com/jasonbbccdd/f0095ba3218c3aabe3799c513da30574/raw/024e363a3387b3b08f65df4b2c72419bdd26fd87/flag-mar.svg',
      association: '',
      qualification: {
        from: 'CAF',
        method:'GROUP_WINNER'
      }
    }
  },
  G: {
    BRA: {
      id: 'BRA',
      name: 'Brazil',
      flag: 'https://gist.githack.com/jasonbbccdd/22436cf9638206344c54cf807dacfd83/raw/adbc9e182e3129fe6f7fccb604cc72a56d8a093c/flag-bra.svg',
      association: '',
      qualification: {
        from: 'CONMEBOL',
        method: 'GROUP_WINNER',
      }
    },
    CMR: {
      id: 'CMR',
      name: 'Cameroon',
      flag: 'https://gist.githack.com/jasonbbccdd/8d18697bddea538db32316029d518ddd/raw/24f1e6563a9f71b839d54038c30b16252ecfec5e/flag-cmr.svg',
      association: '',
      qualification: {
        from: 'CAF',
        method:'GROUP_WINNER'
      }
    },
    SRB: {
      id: 'SRB',
      name: 'Serbia',
      flag: 'https://gist.githack.com/jasonbbccdd/1ebd57de5f089247db9fd7e23b4addc2/raw/396881c13bfee84079f93e93fb5cb01268084c49/flag-srb.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method:'GROUP_WINNER'
      }
    },
    SUI: {
      id: 'SUI',
      name: 'Switzerland',
      flag: 'https://gist.githack.com/jasonbbccdd/9cee789fd367abb7d4bcec333c48aeab/raw/7045002e1941ce3ca6c873ae455e7cadb99a2241/flag-sui.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method:'GROUP_WINNER'
      }
    }
  },
  H: {
    GHA: {
      id: 'GHA',
      name: 'Ghana',
      flag: 'https://gist.githack.com/jasonbbccdd/8026941b2d8f248ec635b5aed0e86dc8/raw/a33fb5caddefb5d92d109491f2f45ad9c83dc0f9/flag-gha.svg',
      association: '',
      qualification: {
        from: 'CAF',
        method: 'GROUP_WINNER',
      }
    },
    KOR: {
      id: 'KOR',
      name: 'Korea',
      flag: 'https://gist.githack.com/jasonbbccdd/a0b23b39bf051b671fa4c5694dcf7786/raw/be3a94fbdb1d8ce5611eab5b8f9af300d4613b23/flag-kor.svg',
      association: '',
      qualification: {
        from: 'AFC',
        method:'GROUP_SECOND'
      }
    },
    POR: {
      id: 'POR',
      name: 'Portugal',
      flag: 'https://gist.githack.com/jasonbbccdd/7bc47e95a76b686e22aec03a289fe2e6/raw/a499f84180624890a7bae43bfda71da8deac7c98/flag-por.svg',
      association: '',
      qualification: {
        from: 'UEFA',
        method:'GROUP_WINNER'
      }
    },
    URU: {
      id: 'URU',
      name: 'Urugary',
      flag: 'https://gist.githack.com/jasonbbccdd/3a7b0dadd85fba3d58cac5a66edcd70f/raw/7ad7872cc72ccf4fe965f3de001836d991935fda/flag-uru.svg',
      association: '',
      qualification: {
        from: 'CONMEBOL',
        method:'GROUP_THIRD'
      }
    }
  }
}
// GLOBAL | Main Data
let stages = {
  32: {},
  16: {
    title: 'Round of 16',
    matches: Array(8).fill(null).map(() => Array(2).fill(null))
  },
  8: {
    title: 'Quarter Finals',
    matches: Array(4).fill(null).map(() => Array(2).fill(null))
  },
  4: {
    title: 'Semi Finals',
    matches: Array(2).fill(null).map(() => Array(2).fill(null))
  },
  third: {
    title: 'Third Place',
    matches: Array(1).fill(null).map(() => Array(2).fill(null))
  },
  champion: {
    title: 'Final',
    matches: Array(1).fill(null).map(() => Array(2).fill(null))
  },
}

let thirdWinner = null
let championWinner = null

// stages[16].matches[0][0] = groups.A.Egypt
// stages[16].matches[0][1] = groups.B.Iran
// stages[16].matches[1][0] = groups.C.Denmark
// stages[16].matches[1][1] = groups.D.Argentina
// stages[16].matches[2][0] = groups.E.Brazil
// stages[16].matches[2][1] = groups.F.Germany
// stages[16].matches[3][0] = groups.G.Belgium
// stages[16].matches[3][1] = groups.H.Colombia
// stages[16].matches[4][0] = groups.A.Russia
// stages[16].matches[4][1] = groups.B.Spain
// stages[16].matches[5][0] = groups.C.France
// stages[16].matches[5][1] = groups.D.Croatia
// stages[16].matches[6][0] = groups.E.Switzerland
// stages[16].matches[6][1] = groups.F.Mexico
// stages[16].matches[7][0] = groups.G.England
// stages[16].matches[7][1] = groups.H.Japan

const bind32 = () => {
  $main.on('click', '.group-team', (e) => {
    const $elem = $(e.currentTarget)

    if (!$elem.hasClass('disabled')) {
      $elem.parent().find('.selected').removeClass('selected')
      $elem.addClass('selected')
    }
  })

  $main.on('click', '.group-standing', (e) => {
    const $elem = $(e.currentTarget)
    const $group = $elem.parents('.group')
    const $selected = $group.find('.selected')

    const groupID = $group.data('group-id')
    const teamID = $selected.data('team-id')
    const groupStandingIndex = $elem.data('group-standing-id')

    const confederationSwitch = (confederation) => ({
      'AFC': YELLOW_COLOR,
      'CAF': BLACK_COLOR,
      'CONMEBOL': RED_COLOR,
      'CONCACAF': BLUE_COLOR,
      'OFC': CYAN_COLOR,
      'UEFA': GREEN_COLOR
    })[confederation]

    const isStandingTaken = _.get(stages, `32.${groupID}[${groupStandingIndex}]`, null)

    if (!isStandingTaken && $selected.length > 0) {
      const teamData = groups[groupID][teamID]

      _.set(stages, `32.${groupID}[${groupStandingIndex}]`, teamData)
      $elem.html(generate32CardStandingHTML(groupStandingIndex+1,teamData))

      console.log($elem)
      console.log(teamData.qualification.from)

/
      var rankingStyleHTML = ""

      if (teamData.qualification.from === 'AFC') {
        rankingStyleHTML = `color: black !important ;`
      }

      console.log('before:', rankingStyleHTML)

      rankingStyleHTML += `background-color: ${confederationSwitch(teamData.qualification.from)}  !important`

      console.log('after:', rankingStyleHTML)

      $elem.attr('style', rankingStyleHTML)
      $selected.removeClass('selected').addClass('disabled')
      // $selected.addClass('glow-on-hover')
      console.dir($selected)

      if (groupStandingIndex === 0 || groupStandingIndex === 1) {
        const stagesMatchPosition = STAGES_MAPPING[32][`${groupID}${groupStandingIndex + 1}`]
        const matchesIndex = stagesMatchPosition[0]
        const teamIndex = stagesMatchPosition[1]


        _.set(stages, `16.matches[${matchesIndex}][${teamIndex}]`, teamData)
        generateBrackets(GEN_BRACKETS_ORDER, stages, $brackets)
      }
    }
  })

  $main.on('click', '.reset-btn', (e) => {
    const $elem = $(e.currentTarget)
    const $group = $elem.parents('.group')

    const groupID = $group.data('group-id')

    const groupFTeam = _.get(stages, `32.${groupID}[0]`, null)
    const groupSTeam = _.get(stages, `32.${groupID}[1]`, null)

    // reset brackets
    GEN_BRACKETS_ORDER.forEach((bracketID) => {
      stages[bracketID].matches = stages[bracketID].matches.map((match) => {
        return match.map((team) => {
          const condition1 = groupFTeam && team?.id === groupFTeam.id
          const condition2 = groupSTeam && team?.id === groupSTeam.id

          if (condition1 || condition2) {
            return null
          }

          return team
        })
      })
    })
    generateBrackets(GEN_BRACKETS_ORDER, stages, $brackets)

    // reset 32
    _.set(stages, `32.${groupID}`, [])
    $group.replaceWith(generate32CardHTML(groupID, groups[groupID]))
  })
}

const bindBrackets = () => {
  $brackets.on('click', '.team', (e) => {
    const $elem = $(e.currentTarget)
    const $match = $elem.parents('.match')
    const $bracket = $elem.parents('.bracket')

    const teamIndex = $elem.data('team-index')
    const matchIndex = $match.data('match-index')
    const bracketID = $bracket.data('bracket-id')

    const winningTeam = _.get(stages, `${bracketID}.matches[${matchIndex}][${teamIndex}]`)
    const losingTeam = _.get(stages, `${bracketID}.matches[${matchIndex}][${teamIndex === 0 ? 1 : 0}]`)

    if (winningTeam && losingTeam) {
      if (bracketID !== 'champion' && bracketID !== 'third') {
        const stageMapping = _.get(STAGES_MAPPING, `${bracketID}`)
        const toStage = stageMapping.toStage
        const [toMatchIndex, toTeamIndex] = _.get(stageMapping, `mapping[${matchIndex}]`)

        const bracketOrderIndex = GEN_BRACKETS_ORDER.indexOf(bracketID)
        GEN_BRACKETS_ORDER.slice(bracketOrderIndex + 1).forEach((otherBracketID) => {
          stages[otherBracketID].matches = stages[otherBracketID].matches.map((match) => {
            return match.map((team) => {
              if (team?.id && team?.id === losingTeam?.id) {
                return winningTeam // ! replace subsequent stage with winning team
                // return null // ! reset subsequent stages
              }

              return team
            })
          })
        })

        if (toStage === 'champion/third') {
          _.set(stages, `third.matches[${toMatchIndex}][${toTeamIndex}]`, losingTeam)
          _.set(stages, `champion.matches[${toMatchIndex}][${toTeamIndex}]`, winningTeam)
        } else {
          _.set(stages, `${toStage}.matches[${toMatchIndex}][${toTeamIndex}]`, winningTeam)
        }

        generateBrackets(GEN_BRACKETS_ORDER, stages, $brackets)
      } else {
        if (bracketID === 'champion') {
          championWinner = winningTeam
          $(`[data-bracket-id=${bracketID}] [data-team-id=${winningTeam.id}]`).addClass('text-success')
        } else {
          thirdWinner = winningTeam
          $(`[data-bracket-id=${bracketID}][data-team-id=${winningTeam.id}]`).addClass('text-success')
        }
      }
    }
  })
}

const init = function() {
  generate32Cards(groups, $groupings)
  bind32()

  generateBrackets(GEN_BRACKETS_ORDER, stages, $brackets)
  bindBrackets()
}

init()
