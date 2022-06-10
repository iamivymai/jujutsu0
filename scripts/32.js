// GROUP | Generate New Group
export const generate32CardStandingHTML = (teamData) => {
  return `
    <img class="round-flag rounded-circle border border-white me-2" src="${teamData.flag}" alt="">
    <span class="flex-grow-1">${teamData.name}</span>
  `
}

export const generate32CardTeamHTML = (teamData) => {
  return `
    <div class="group-team col text-center" data-team-id="${teamData.id}">
      <img class="round-flag rounded-circle border border-white mx-auto" src="${teamData.flag}" alt="">
      <div>${teamData.name}</div>
    </div>
  `
}

export const generate32CardTeamsHTML = (groupData) => {
  let template = ''

  Object.keys(groupData).forEach((teamID) => {
    template += generate32CardTeamHTML(groupData[teamID])
  })

  return template
}

export const generate32CardHTML = (groupID, groupData) => {
  return `
    <div id="group-${groupID}" class="group col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3" data-group-id=${groupID}>
      <div class="card bg-transparent border-white">
        <div class="card-body position-relative">
          <h5 class="card-title text-center mb-3">Group ${groupID}</h5>
          <button class="reset-btn btn btn-danger position-absolute end-0 top-0 mt-2 me-3">Reset</button>

          <ul class="list-group border-top-0 mb-3">
            <button
              type="button"
              class="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center"
              data-group-standing-id="0"
            >
              <span class="me-2">1st</span>
            </button>

            <button
              type="button"
              class="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center"
              data-group-standing-id="1"
            >
              <span class="me-2">2nd</span>
            </button>

            <button
              type="button"
              class="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center"
              data-group-standing-id="2"
            >
              <span class="me-2">3rd</span>
            </button>

            <button
              type="button"
              class="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center"
              data-group-standing-id="3"
            >
              <span class="me-2">4th</span>
            </button>
          </ul>

          <div class="d-flex flex-row justify-content-between align-items-center">
            ${generate32CardTeamsHTML(groupData)}
          </div>
        </div>
      </div>
    </div>
  `
}

export const generate32CardsHTML = (groups) => {
  let template = ''

  Object.keys(groups).forEach((groupID) => {
    template += generate32CardHTML(groupID, groups[groupID])
  })

  return template
}

export const generate32Cards = (groups, $groupings) => {
  $groupings.append(generate32CardsHTML(groups))
}
