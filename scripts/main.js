// GLOBAL | Elements
const $groupings = $('#groupings')
const $main = $('#main')

// GLOBAL | Init Data
const groups = [
  {
    name: 'A',
    countries: [
      { name: 'Egypt', flag: 'https://i.imgur.com/OnE6Nlh.gif' },
      { name: 'Russia', flag: 'https://i.imgur.com/8oXSxrY.gif' },
      { name: 'Saudi', flag: 'https://i.imgur.com/p8sxiFR.gif' },
      { name: 'Urugary', flag: 'https://i.imgur.com/Zjamxtq.gif' }
    ],
  }, {
    name: 'B',
    countries: [
      { name: 'Iran', flag: 'https://i.imgur.com/Tt2WbQc.gif' },
      { name: 'Morocco', flag: 'https://i.imgur.com/eKiIZ8I.gif' },
      { name: 'Portugal', flag: 'https://i.imgur.com/hzPGbTJ.gif' },
      { name: 'Spain', flag: 'https://i.imgur.com/0LaBDTf.gif' }
    ]
  }, {
    name: 'C',
    countries: [
      { name: 'Australia', flag: 'https://i.imgur.com/Ty3X9FM.gif' },
      { name: 'Denmark', flag: 'https://i.imgur.com/hj7RGT2.gif' },
      { name: 'Peru', flag: 'https://i.imgur.com/ALDOycv.gif' },
      { name: 'France', flag: 'https://i.imgur.com/qVjpSum.gif' },
    ]
  }, {
    name: 'D',
    countries: [
      { name: 'Argentina', flag: 'https://i.imgur.com/wOqyuW9.gif' },
      { name: 'Croatia', flag: 'https://i.imgur.com/PH9jUN0.gif' },
      { name: 'Iceland', flag: 'https://i.imgur.com/khtRIp4.gif' },
      { name: 'Nigeria', flag: 'https://i.imgur.com/Umqr7bz.gif' }
    ]
  }, {
    name: 'E',
    countries: [
      { name: 'Brazil', flag: 'https://i.imgur.com/lnOsyel.gif' },
      { name: 'Costa Rica', flag: 'https://i.imgur.com/h466S8Q.gif' },
      { name: 'Serbia', flag: 'https://i.imgur.com/OsOobI6.gif' },
      { name: 'Switzerland', flag: 'https://i.imgur.com/oAHsrp0.gif' }
    ]
  }, {
    name: 'F',
    countries: [
      { name: 'Germany', flag: 'https://i.imgur.com/tYdPs3u.gif' },
      { name: 'Mexico', flag: 'https://i.imgur.com/sA7fLA3.gif' },
      { name: 'South Korea', flag: 'https://i.imgur.com/6B6RBlM.gif' },
      { name: 'Sweden', flag: 'https://i.imgur.com/FbDhOhA.gif' }
    ]
  }, {
    name: 'G',
    countries: [
      { name: 'Belgium', flag: 'https://i.imgur.com/z5uctb6.gif' },
      { name: 'England', flag: 'https://i.imgur.com/veDCYW1.gif' },
      { name: 'Panama', flag: 'https://i.imgur.com/ABMAejX.gif' },
      { name: 'Tunisia', flag: 'https://i.imgur.com/Q9DOGji.gif' }
    ]
  }, {
    name: 'H',
    countries: [
      { name: 'Colombia', flag: 'https://i.imgur.com/91LLAO1.gif' },
      { name: 'Japan', flag: 'https://i.imgur.com/wolmADo.gif' },
      { name: 'Poland', flag: 'https://i.imgur.com/I79vh9o.gif' },
      { name: 'Senegal', flag: 'https://i.imgur.com/amBHaD8.gif' },
    ]
  },
]

// GROUP | Generate New Group
const generateGroup = (groupIndex, group, countries) => {
  return `
    <div id="group${group}" class="group col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
      <div class="card bg-transparent border-white">
        <div class="card-body position-relative">
          <h5 class="card-title text-center mb-3">Group ${group}</h5>
          <button class="reset-btn btn btn-danger position-absolute end-0 top-0 mt-2 me-3" data-group-index="${groupIndex}">Reset</button>

          <ul class="list-group border-top-0 mb-3">
            <button type="button" class="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center">
              <span class="me-2">1st</span>
            </button>
            <button type="button" class="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center">
              <span class="me-2">2nd</span>
            </button>
            <button type="button" class="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center">
              <span class="me-2">3rd</span>
            </button>
            <button type="button" class="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center">
              <span class="me-2">4th</span>
            </button>
          </ul>

          <div class="d-flex flex-row justify-content-between align-items-center">
            <div class="group-country col text-center" data-group-index="${groupIndex}" data-country-index="0">
              <img class="round-flag rounded-circle border border-white mx-auto" src="${countries[0].flag}" alt="">
              <div>${countries[0].name}</div>
            </div>
            <div class="group-country col text-center" data-group-index="${groupIndex}" data-country-index="1">
              <img class="round-flag rounded-circle border border-white mx-auto" src="${countries[1].flag}" alt="">
              <div>${countries[1].name}</div>
            </div>
            <div class="group-country col text-center" data-group-index="${groupIndex}" data-country-index="2">
              <img class="round-flag rounded-circle border border-white mx-auto" src="${countries[2].flag}" alt="">
              <div>${countries[2].name}</div>
            </div>
            <div class="group-country col text-center" data-group-index="${groupIndex}" data-country-index="3">
              <img class="round-flag rounded-circle border border-white mx-auto" src="${countries[3].flag}" alt="">
              <div>${countries[3].name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

const generateGroupStanding = (country) => {
  return `
    <img class="round-flag rounded-circle border border-white me-2" src="${country.flag}" alt="">
    <span class="flex-grow-1">${country.name}</span>
  `
}

const init = function() {
  groups.forEach((group, i) => {
    $groupings.append(generateGroup(i, group.name, group.countries))
  })

  $main.on('click', '.group-country', (e) => {
    const $elem = $(e.target)
    const $parent = $elem.parent()

    if (!$elem.hasClass('disabled')) {
      $parent.find('.selected').removeClass('selected')
      $elem.addClass('selected')
    }
  })

  $main.on('click', '.group-standing', (e) => {
    const $elem = $(e.target)
    const $group = $elem.parents('.group')
    const $selected = $group.find('.selected')

    if ($selected.length > 0) {
      const groupIndex = $selected.data('group-index')
      const countryIndex = $selected.data('country-index')
      const country = groups[groupIndex].countries[countryIndex]
      $elem.append(generateGroupStanding(country))

      $selected.removeClass('selected').addClass('disabled')
    }
  })

  $main.on('click', '.reset-btn', (e) => {
    const $elem = $(e.target)
    const $group = $elem.parents('.group')

    const groupIndex = $elem.data('group-index')

    $group.replaceWith(generateGroup(groupIndex, groups[groupIndex].name, groups[groupIndex].countries))
  })
}

init()


// <button id="scroll">scroll</button>
// $('#scroll').on('click', () => {
//   window.scrollTo(0, $('#main').offset().top - 120)
// })
