type TabNames = 'introduce' | 'professor'

interface TabContent {
  title: string
  content: string
}

const IntroduceTabHero = [
  {
    image: './images/first.jpg',
    title: '컴퓨터는 4차 산업혁명의 핵심!',
    content: `오늘날 컴퓨터, 소프트웨어가 모든 분야에 응용이 되어 4차 산업혁명을 이끌고 있다. 모바일, 스마트 시스템,가상현실, 증강현실, 컴퓨터 그래픽/비젼, 게임, 인공지능분야 및 해양IT분야 등에 컴퓨터 시스템과 소프트웨어가 응용되고 있다.
    다양한 형태의 정보 서비스 및 소프트웨어의 응용에 대한 이해를 위해서는 그 인프라를 이루는 컴퓨터의 각 요소기술에 대한 이해가 필수적이다.`,
  },
  {
    image: './images/second.jpg',
    title: '컴퓨터, 소프트웨어 전문가 양성을 목표',
    content: `컴퓨터공학과는 이러한 컴퓨터시스템에 대한 심층 교육과 함께 이를 바탕으로 한 다양한 컴퓨터 응용기술 및 소프트웨어개발 능력, 소프트웨어 응용능력을 배양하는데 역점을 두고 있다.
    구체적으로는 국가 IT 발전의 핵심기술인 소프트웨어 프로그래밍, 인공지능, 데이터베이스, 컴퓨터시스템 운영 및 관리, 컴퓨터통신, 클라우드 컴퓨팅,빅데이터, 컴퓨터 그래픽/컴퓨터 비젼, 증강현실 등의 기술에 관한 전문기술을 습득할 수 있도록 교과과정이 구성되어 있어 국가 IT기술의 중추적 분야에서 활동할 경쟁력 있는 컴퓨터, 소프트웨어 전문가 양성을 목표로 한다.`,
  },
  {
    image: './images/third.jpg',
    title: '컴퓨터공학인을 양성한다.',
    content: `컴퓨터, 소프트웨어 이론 및 실기를 각종 산업분야에 어떻게 응용하는지를 가르쳐주고, IT 혁명의 추세에 대응할 수 있는 인재를 양성하고자 한다.
    저학년때 컴퓨터의 기초부터 시작하여 고학년때 고급 IT 기술을 익히기까지 체계적인 교과과정으로 자기의 미래를 스스로 만들어가는 컴퓨터공학인을 양성한다.`,
  },
]

const Professors = [
  {
    name: '석현태',
    position: '교수/ 컴퓨터공학과 책임교수',
    image: './images/professors/seok-hyun-tae.jpg',
    lab: 'UIT관 U309호',
    phone: '320-1733',
    email: 'sht@dongseo.ac.kr',
  },
  {
    name: '이병국',
    position: '교수/ 엠비언트인텔리전스연구소장',
    image: './images/professors/lee-byung-kook.jpg',
    lab: 'UIT관 U207호',
    phone: '320-1727',
    email: 'lbg@dongseo.ac.kr',
  },
  {
    name: '양황규',
    position: '교수',
    image: './images/professors/yang-hwang-kyu.jpg',
    lab: 'UIT관 U206호',
    phone: '320-1725',
    email: 'hkyang88@dongseo.ac.kr',
  },
  {
    name: '박수현',
    position: '교수',
    image: './images/professors/park-soo-hyun.jpg',
    lab: 'UIT관 U707호',
    phone: '320-1723',
    email: 'subak@dongseo.ac.kr',
  },
  {
    name: '강대기',
    position: '교수/일반대학원 주임교수',
    image: './images/professors/kang-dae-gi.jpg',
    lab: 'UIT관 U706호',
    phone: '320-1724',
    email: 'dkkang@dongseo.ac.kr',
  },
  {
    name: '임효택',
    position: '교수',
    image: './images/professors/lim-hyo-taek.jpg',
    lab: 'UIT관 U304호',
    phone: '320-1718',
    email: 'htlim@dongseo.ac.kr',
  },
  {
    name: '김남우',
    position: '조교수',
    image: './images/professors/kim-nam-woo.jpg',
    lab: '뉴밀레니엄관 1020호',
    phone: '051-320-4219',
    email: 'nwkim@dongseo.ac.kr',
  },
  {
    name: '망갈센 (Mangsal Sain)',
    position: '교수',
    image: './images/professors/mangal-sain.jpg',
    lab: 'NM1019',
    phone: '010-2859-1344',
    email: 'mangalsain1@gmail.com',
  },
]

const Tabs: Record<TabNames, TabContent> = {
  introduce: {
    title: '학과소개',
    content: `
    <div class="notice">
      <div class="left">
        <span class="title">
          소프트웨어융합대학<br>
          컴퓨터공학과
        </span>
        <br>
        동서대학교 컴퓨터공학과를 소개합니다.
      </div>
      <div class="right">
        <img src="./images/aiinfo_01.jpg"/>
      </div>
    </div>

    <div class="introduction">
      ${IntroduceTabHero.map(
        v => `<div class="hero">
        <img src="${v.image}"/>
        <div class="right">
          <span class="title">${v.title}</span>
          <br>
          <span class="text">${v.content}</span>
        </div>
      </div>`
      )}
    </div>
    `,
  },
  professor: {
    title: '교수소개',
    content: `
    <div class="professors">
      ${Professors.map(
        v => `<div class="professor">
        <div class="left">
          <img src="${v.image}"/>
        </div>
        <div class="right">
          <p class="name">${v.name}</p>
          <table>
            <tr>
              <td>직위</td>
              <td>${v.position}</td>
            </tr>
            <tr>
              <td>연구실</td>
              <td>${v.lab}</td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>${v.phone}</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>${v.email}</td>
            </tr>
          </table>
        </div>
      </div>`
      ).join('')}
    </div>
  `,
  },
}

let currentTab = 'introduce'

function CreateTabButton (id: string, name: string, isActive?: boolean) {
  const button = document.createElement('button')
  button.className = 'tab-button'
  button.innerHTML = `${name}`
  button.dataset.active = `${isActive}`

  button.onclick = ev => {
    console.log(ev)

    currentTab = id
    app()
  }

  return button
}

function RenderTabs (currentTab: string) {
  const tabs = document.querySelector('.tabs')

  if (!tabs) {
    return
  }

  tabs.innerHTML = ``

  for (const tabId of Object.keys(Tabs)) {
    const button = CreateTabButton(
      tabId,
      Tabs[tabId as TabNames].title,
      tabId === currentTab
    )
    tabs.appendChild(button)
  }
}

function RenderTabName (currentTab: string) {
  const tabName = document.querySelector('.navigation .name')

  console.log(tabName)

  if (!tabName) {
    return
  }

  tabName.innerHTML = `${Tabs[currentTab as TabNames].title}`
}

function RenderContents (currentTab: string) {
  const content = document.querySelector('.content')

  if (!content) {
    return
  }

  content.innerHTML = ``

  const tab = Tabs[currentTab as TabNames]

  content.innerHTML = `<h1>${tab.title}</h1>${tab.content}`
}

function app () {
  RenderTabs(currentTab)
  RenderTabName(currentTab)
  RenderContents(currentTab)
}

document.addEventListener('DOMContentLoaded', app)
