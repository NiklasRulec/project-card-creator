// ! ++++++++++ BASIC ++++++++++

const gallery = document.querySelector(".gallery");

// ! ++++++++++ CARD ++++++++++

const newCardFunction = () => {
  let playerName = document.querySelector(".player-name").value;
  let playerSurName = document.querySelector(".player-surname").value;
  let playerClub = document.querySelector(".player-club").value;
  let playerPosition = document.querySelector(".player-position").value;
  let playerImage = document.querySelector(".player-image").value;

  function Card(
    playerName,
    playerSurName,
    playerClub,
    playerPosition,
    playerImage
  ) {
    this.playerName = playerName;
    this.playerSurName = playerSurName;
    this.playerClub = playerClub;
    this.playerPosition = playerPosition;
    this.playerImage = playerImage;

    this.newCard = function () {
      console.log(
        `Der Spieler heißt ${this.playerName} ${this.playerSurName}. Er spielt beim Verein ${this.playerClub} auf der Position ${this.playerPosition}. Sein Bild : ${this.playerImage}`
      );
    };
  }
  const newPlayer = new Card(
    playerName,
    playerSurName,
    playerClub,
    playerPosition,
    playerImage
  );
  newPlayer.newCard();
  console.log(newPlayer);

  //   ! Neue Karte
  let newElement = document.createElement("div");
  newElement.classList.add("card-design");
  //   ! Spieler Bild
  let newElementImage = document.createElement("img");
  newElementImage.src = playerImage;
  newElement.appendChild(newElementImage);
  //   ! Spieler Name
  let newElementNameh2 = document.createElement("h2");
  let newElementName = document.createTextNode(
    "Name : " + playerName + " " + playerSurName
  );
  newElementNameh2.appendChild(newElementName);
  newElement.appendChild(newElementNameh2);
  //   ! Spieler Club
  let newElementClubh2 = document.createElement("h2");
  let newElementClub = document.createTextNode("Club : " + playerClub);
  newElementClubh2.appendChild(newElementClub);
  newElement.appendChild(newElementClubh2);
  //   ! Spieler Position
  let newElementPositionh2 = document.createElement("h2");
  let newElementPosition = document.createTextNode(
    "Position : " + playerPosition
  );
  newElementPositionh2.appendChild(newElementPosition);
  newElement.appendChild(newElementPositionh2);

  //   ! Neue Karte zur Gallery hinzufügen
  gallery.appendChild(newElement);
};
