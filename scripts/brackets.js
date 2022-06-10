export const generateBracketMatchHTML = (match, matchIndex) => {
  const teamA = _.get(match, '[0]', null)
  const teamB = _.get(match, '[1]', null)

  return `
    <div class="match py-3" data-match-index="${matchIndex}">
      <div
        class="team border-bottom"
        data-team-index="0"
        data-team-id="${teamA ? teamA.id : ''}"
      >
        ${teamA ? teamA.name : '<span class="opacity-0">Temp</span>'}
      </div>

      <div
        class="team border-bottom"
        data-team-index="1"
        data-team-id="${teamB ? teamB.id : ''}"
      >
        ${teamB ? teamB.name : '<span class="opacity-0">Temp</span>'}
      </div>
    </div>
  `
}

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
      <h3>${bracketData.title}</h3>

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
