// CREATE NEW CARD
function createCard() {
  let memberList = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    memberList += `
      <div id="card-container" class="col-4 flex-wrap">
        <div id="card" class="text-white mb-3 d-flex">
          <img id="contact-image" src="${member.img}" alt="${member.name}" class="img-fluid" width="35%">
          <div class="card-body ps-3 pt-3">
            <h5 id="full-name">${member.name}</h5>
            <p id="role">${member.role}</p>
            <p id="contact">${member.email}</p>
          </div>
        </div>
      </div>
    `;
  }
  cardsContainerElm.innerHTML = memberList;
}