export const confederationColors = {
  'AFC': YELLOW_COLOR,
  'CAF': BLACK_COLOR,
  'CONMEBOL': RED_COLOR,
  'CONCACAF': BLUE_COLOR,
  'OFC': CYAN_COLOR,
  'UEFA': GREEN_COLOR
}

export const generateBracketMatchHTML = (match, matchIndex) => {
  const teamA = _.get(match, '[0]', null)
  const teamB = _.get(match, '[1]', null)
  const teamAC = _.get(teamA, 'qualification.from', '')
  const teamBC = _.get(teamB, 'qualification.from', '')

  const teamAColor = confederationColors[teamAC]
  const teamBColor = confederationColors[teamBC]

  // if(teamA){
  //   var rankingStyleHTML = ""
  //   bracketStyleHTML += `background-color: ${confederationSwitch(teamA.qualification.from)}  !important`
  // }

  return `
    <div class="match py-3" data-match-index="${matchIndex}">
      <div
        class="team border-bottom"
        data-team-index="0"
        data-team-id="${teamA ? teamA.id : ''}"
      >
        <button
          class="d-flex justify-content-start px-1 py-1 btn btn-dark glow-on-hover"
          type="button"
          style="background-color: ${teamAColor}"
        >
          ${teamA ? `<img class=" bracket-flag" src="${teamA.flag}" alt="">` : ''}
          ${teamA ? `<span class="h4 px-2 my-0 align-self-center">${teamA.name}</span>` : '<span class="opacity-0">Temp</span>'}
        </button>

      </div>

      <div
        class="team border-bottom"
        data-team-index="1"
        data-team-id="${teamB ? teamB.id : ''}"
      >
        <button
          class="d-flex justify-content-start px-1 py-1 btn btn-dark glow-on-hover"
          type="button"
          style="background-color: ${teamBColor}"
        >
          ${teamB ? `<img class=" bracket-flag" src="${teamB.flag}" alt="">` : ''}
          ${teamB ? `<span class="h4 px-2 my-0 align-self-center">${teamB.name}</span>` : '<span class="opacity-0">Temp</span>'}
        </button>
      </div>
    </div>
  `
}

    // <img class="group-ranking-flag border border-white me-2" src="${teamA.flag}" alt="">
    // <span class="flex-grow-1">${teamA.id}</span>

export const generateBracketMatchesHTML = (matches) => {
  let template = ''

  matches.forEach((match, matchIndex) => {
    template += generateBracketMatchHTML(match, matchIndex)
  })

  return template
}

export const generateBracketHTML = (bracketID, bracketData) => {
  const matches = _.get(bracketData, 'matches')

  return `
    <div class="bracket col" data-bracket-id="${bracketID}">
        <p class="h3 text-center">${bracketData.title}</p>

      <div class="bracket-matches h-100 d-flex flex-column justify-content-around">
        ${generateBracketMatchesHTML(matches)}
      </div>
    </div>
  `
}

export const generateBracketsHTML = (genOrder, stages) => {
  let template = ''

  genOrder.forEach((bracketID) => {
    template += generateBracketHTML(bracketID, stages[bracketID])
  })

  return template
}

export const generateBrackets = (genOrder, stages, $brackets) => {
  $brackets.html(generateBracketsHTML(genOrder, stages))
}
