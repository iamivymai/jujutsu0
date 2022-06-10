import { generate32Cards, generate32CardHTML, generate32CardStandingHTML } from './32.js'
import { generateBrackets } from './brackets.js'

// GLOBAL | Elements
const $groupings = $('#groupings')
const $brackets = $('#brackets')
const $main = $('#main')

// GLOBAL | Mapping
const GEN_BRACKETS_ORDER = [16, 8, 4, 'third', 'champion']
const TOURNAMENT_MAPPING = {
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
    Egypt: {
      id: 'Egypt',
      name: 'Egypt',
      flag: 'https://i.imgur.com/OnE6Nlh.gif'
    },
    Russia: {
      id: 'Russia',
      name: 'Russia',
      flag: 'https://i.imgur.com/8oXSxrY.gif'
    },
    Saudi: {
      id: 'Saudi',
      name: 'Saudi',
      flag: 'https://i.imgur.com/p8sxiFR.gif'
    },
    Urugary: {
      id: 'Urugary',
      name: 'Urugary',
      flag: 'https://i.imgur.com/Zjamxtq.gif'
    },
  },
  B: {
    Iran: {
      id: 'Iran',
      name: 'Iran',
      flag: 'https://i.imgur.com/Tt2WbQc.gif'
    },
    Morocco: {
      id: 'Morocco',
      name: 'Morocco',
      flag: 'https://i.imgur.com/eKiIZ8I.gif'
    },
    Portugal: {
      id: 'Portugal',
      name: 'Portugal',
      flag: 'https://i.imgur.com/hzPGbTJ.gif'
    },
    Spain: {
      id: 'Spain',
      name: 'Spain',
      flag: 'https://i.imgur.com/0LaBDTf.gif'
    },
  },
  C: {
    Australia: {
      id: 'Australia',
      name: 'Australia',
      flag: 'https://i.imgur.com/Ty3X9FM.gif'
    },
    Denmark: {
      id: 'Denmark',
      name: 'Denmark',
      flag: 'https://i.imgur.com/hj7RGT2.gif'
    },
    Peru: {
      id: 'Peru',
      name: 'Peru',
      flag: 'https://i.imgur.com/ALDOycv.gif'
    },
    France: {
      id: 'France',
      name: 'France',
      flag: 'https://i.imgur.com/qVjpSum.gif'
    },
  },
  D: {
    Argentina: {
      id: 'Argentina',
      name: 'Argentina',
      flag: 'https://i.imgur.com/wOqyuW9.gif'
    },
    Croatia: {
      id: 'Croatia',
      name: 'Croatia',
      flag: 'https://i.imgur.com/PH9jUN0.gif'
    },
    Iceland: {
      id: 'Iceland',
      name: 'Iceland',
      flag: 'https://i.imgur.com/khtRIp4.gif'
    },
    Nigeria: {
      id: 'Nigeria',
      name: 'Nigeria',
      flag: 'https://i.imgur.com/Umqr7bz.gif'
    },
  },
  E: {
    Brazil: {
      id: 'Brazil',
      name: 'Brazil',
      flag: 'https://i.imgur.com/lnOsyel.gif'
    },
    Costa: {
      id: 'Costa',
      name: 'Costa',
      flag: 'https://i.imgur.com/h466S8Q.gif'
    },
    Serbia: {
      id: 'Serbia',
      name: 'Serbia',
      flag: 'https://i.imgur.com/OsOobI6.gif'
    },
    Switzerland: {
      id: 'Switzerland',
      name: 'Switzerland',
      flag: 'https://i.imgur.com/oAHsrp0.gif'
    },
  },
  F: {
    Germany: {
      id: 'Germany',
      name: 'Germany',
      flag: 'https://i.imgur.com/tYdPs3u.gif'
    },
    Mexico: {
      id: 'Mexico',
      name: 'Mexico',
      flag: 'https://i.imgur.com/sA7fLA3.gif'
    },
    Korea: {
      id: 'Korea',
      name: 'Korea',
      flag: 'https://i.imgur.com/6B6RBlM.gif'
    },
    Sweden: {
      id: 'Sweden',
      name: 'Sweden',
      flag: 'https://i.imgur.com/FbDhOhA.gif'
    },
  },
  G: {
    Belgium: {
      id: 'Belgium',
      name: 'Belgium',
      flag: 'https://i.imgur.com/z5uctb6.gif'
    },
    England: {
      id: 'England',
      name: 'England',
      flag: 'https://i.imgur.com/veDCYW1.gif'
    },
    Panama: {
      id: 'Panama',
      name: 'Panama',
      flag: 'https://i.imgur.com/ABMAejX.gif'
    },
    Tunisia: {
      id: 'Tunisia',
      name: 'Tunisia',
      flag: 'https://i.imgur.com/Q9DOGji.gif'
    },
  },
  H: {
    Colombia: {
      id: 'Colombia',
      name: 'Colombia',
      flag: 'https://i.imgur.com/91LLAO1.gif'
    },
    Japan: {
      id: 'Japan',
      name: 'Japan',
      flag: 'https://i.imgur.com/wolmADo.gif'
    },
    Poland: {
      id: 'Poland',
      name: 'Poland',
      flag: 'https://i.imgur.com/I79vh9o.gif'
    },
    Senegal: {
      id: 'Senegal',
      name: 'Senegal',
      flag: 'https://i.imgur.com/amBHaD8.gif'
    },
  },
}

// GLOBAL | Main Data
let tournament = {
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

tournament[16].matches[0][0] = groups.A.Egypt
tournament[16].matches[0][1] = groups.B.Iran
tournament[16].matches[1][0] = groups.C.Denmark
tournament[16].matches[1][1] = groups.D.Argentina
tournament[16].matches[2][0] = groups.E.Brazil
tournament[16].matches[2][1] = groups.F.Germany
tournament[16].matches[3][0] = groups.G.Belgium
tournament[16].matches[3][1] = groups.H.Colombia
tournament[16].matches[4][0] = groups.A.Russia
tournament[16].matches[4][1] = groups.B.Spain
tournament[16].matches[5][0] = groups.C.France
tournament[16].matches[5][1] = groups.D.Croatia
tournament[16].matches[6][0] = groups.E.Switzerland
tournament[16].matches[6][1] = groups.F.Mexico
tournament[16].matches[7][0] = groups.G.England
tournament[16].matches[7][1] = groups.H.Japan

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

    const isStandingTaken = _.get(tournament, `32.${groupID}[${groupStandingIndex}]`, null)

    if (!isStandingTaken && $selected.length > 0) {
      const teamData = groups[groupID][teamID]

      _.set(tournament, `32.${groupID}[${groupStandingIndex}]`, teamData)
      $elem.html(generate32CardStandingHTML(teamData))
      $selected.removeClass('selected').addClass('disabled')

      if (groupStandingIndex === 0 || groupStandingIndex === 1) {
        const tournamentMatchPosition = TOURNAMENT_MAPPING[32][`${groupID}${groupStandingIndex + 1}`]
        const matchesIndex = tournamentMatchPosition[0]
        const teamIndex = tournamentMatchPosition[1]

        _.set(tournament, `16.matches[${matchesIndex}][${teamIndex}]`, teamData)
        generateBrackets(GEN_BRACKETS_ORDER, tournament, $brackets)
      }
    }
  })

  $main.on('click', '.reset-btn', (e) => {
    const $elem = $(e.currentTarget)
    const $group = $elem.parents('.group')

    const groupID = $group.data('group-id')

    const groupFTeam = _.get(tournament, `32.${groupID}[0]`, null)
    const groupSTeam = _.get(tournament, `32.${groupID}[1]`, null)

    // reset brackets
    GEN_BRACKETS_ORDER.forEach((bracketID) => {
      tournament[bracketID].matches = tournament[bracketID].matches.map((match) => {
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
    generateBrackets(GEN_BRACKETS_ORDER, tournament, $brackets)

    // reset 32
    _.set(tournament, `32.${groupID}`, [])
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

    const winningTeam = _.get(tournament, `${bracketID}.matches[${matchIndex}][${teamIndex}]`)
    const losingTeam = _.get(tournament, `${bracketID}.matches[${matchIndex}][${teamIndex === 0 ? 1 : 0}]`)

    if (winningTeam && losingTeam) {
      if (bracketID !== 'champion' && bracketID !== 'third') {
        const stageMapping = _.get(TOURNAMENT_MAPPING, `${bracketID}`)
        const toStage = stageMapping.toStage
        const [toMatchIndex, toTeamIndex] = _.get(stageMapping, `mapping[${matchIndex}]`)

        const bracketOrderIndex = GEN_BRACKETS_ORDER.indexOf(bracketID)
        GEN_BRACKETS_ORDER.slice(bracketOrderIndex + 1).forEach((otherBracketID) => {
          tournament[otherBracketID].matches = tournament[otherBracketID].matches.map((match) => {
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
          _.set(tournament, `third.matches[${toMatchIndex}][${toTeamIndex}]`, losingTeam)
          _.set(tournament, `champion.matches[${toMatchIndex}][${toTeamIndex}]`, winningTeam)
        } else {
          _.set(tournament, `${toStage}.matches[${toMatchIndex}][${toTeamIndex}]`, winningTeam)
        }

        generateBrackets(GEN_BRACKETS_ORDER, tournament, $brackets)
      } else {
        if (bracketID === 'champion') {
          championWinner = winningTeam
          $(`[data-bracket-id=${bracketID}] [data-team-id=${winningTeam.id}]`).addClass('text-success')
        } else {
          thirdWinner = winningTeam
          $(`[data-bracket-id=${bracketID}] [data-team-id=${winningTeam.id}]`).addClass('text-success')
        }
      }
    }
  })
}

const init = function() {
  generate32Cards(groups, $groupings)
  bind32()

  generateBrackets(GEN_BRACKETS_ORDER, tournament, $brackets)
  bindBrackets()
}

init()
