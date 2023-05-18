const body = document.querySelector('.expandcard');
const projects = document.getElementById('projects');
const popUp = document.createElement('section');
const showButton = document.getElementsByClassName('popBtn');

const projectInfo = [
  {
    id: 0,
    header: 'Multi-Post Stories Gain+Glory',
    popupPhoto: 'Imgs/Recent works/1.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 1,
    header: 'Multi-Post Stories',
    popupPhoto: 'Imgs/Recent works/2.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    header: 'Multi-Post Stories Gain+Glory',
    popupPhoto: 'Imgs/Recent works/3.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    header: 'Multi-Post Stories',
    popupPhoto: 'Imgs/Recent works/4.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    header: 'Multi-Post Stories',
    popupPhoto: 'Imgs/Recent works/5.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 5,
    header: 'Multi-Post Stories',
    popupPhoto: 'Imgs/Recent works/6.jpg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
];

for (let i = 0; i < projectInfo.length; i += 1) {
  const card = document.createElement('div'); // to generate a new card for each project
  card.classList.add('card-body');
  let toolsHtml = '';
  for (let j = 0; j < projectInfo[i].tools.length; j += 1) {
    toolsHtml += `<li>${projectInfo[i].tools[j]}</li>`;
  }

  card.innerHTML = `

  <div class="card-main">
   <div class="card-box">
    <div class="card-img">
      <img src="${projectInfo[i].popupPhoto}" />
    </div>
    <div>
      <h2 class="card-header">${projectInfo[i].header}</h2>
      <div class="card-content">
        
        <ul class="tools">
          ${toolsHtml}
        </ul>
        <div class="card-btn">
        <button class="popBtn show">See project</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  `;

  projects.appendChild(card);
}

for (let i = 0; i < showButton.length; i += 1) {
  showButton[i].addEventListener('click', () => {
    body.style.display = 'block';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    let toolsHtml = '';
    for (let j = 0; j < projectInfo[i].tools.length; j += 1) {
      toolsHtml += `<li>${projectInfo[i].tools[j]}</li>`;
    }

    popUp.innerHTML = `
        <section id="modal-section">
        <div class="modal-body">
        <i id="modal-close" class="uil uil-multiply"><img src="Imgs/popup close button.svg"></i>
        <img class="image-img" src="${projectInfo[i].popupPhoto}" />       
          <div class="modal-title">
          <div class="modal-combine-desktop">
          <div class="desktop-button">
            <h2 class="card-header-popup">${projectInfo[i].header}</h2>
                 <div class="desktop-button-wrap">
                      <button class="modal-button live">
                        See live
                        <img class="svg" src="Imgs/see live icon.svg" alt="Live Icon" />
                      </button>
                      <button class="modal-button source">
                        See source
                      <span>
                      <img class="svg" src="Imgs/Vector.svg" alt="Github Icon" />
                      </span>
                      </button>
                  </div>
                    </div>
                    </div>
          </div>
            <ul class="tools-mobile">
              ${toolsHtml}
            </ul>
            <div class="card-p">
              <p>${projectInfo[i].content}</p>
                  </div>
                  <div class="modal-combine">
                    <button class="modal-button live">
                      See live
                      <img class="svg" src="Imgs/see live icon.svg" alt="Live Icon" />
                    </button>
                    <a href="https://github.com/Rifat8080/Portfolio-site">
                    <button class="modal-button source">
                      See source
                      <span>
                      <img class="svg" src="Imgs/Vector.svg" alt="Github Icon" />
                      </span>
                      </button>
                      </a>
                   </div>
              </div>
            </div>
          </div>
          </section>
        `;
    if (window.matchMedia('(min-width: 364px)').matches) {
      const modalCombineDesktop = popUp.querySelector('.modal-combine-desktop');
      modalCombineDesktop.style.display = 'none';
    }
    if (window.matchMedia('(min-width:768px)').matches) {
      const modalCombineDesktop = popUp.querySelector('.modal-combine-desktop');
      modalCombineDesktop.style.display = 'block';
    }
    body.appendChild(popUp);
  });
}
body.addEventListener('click', () => {
  body.style.display = 'none';
  popUp.remove();
});