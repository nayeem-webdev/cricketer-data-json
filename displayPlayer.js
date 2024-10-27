const Players = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/Data/SortByNameAsc.json"
    );
    const data = await res.json();
    DisplayPlayers(data);
  } catch {
    console.log(error);
  }
};
Players();

const LoadDataSortFilter = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    DisplayPlayers(data);
  } catch {
    console.log(error);
  }
};

const DisplayPlayers = (players) => {
  const playerContainer = document.getElementById("playerContainer");
  playerContainer.innerHTML = "";
  players.forEach((player, idx) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            class="w-full object-cover"
            src=${player.image}
            alt="Player Image"
          />
          <div class="p-4">
          
            <p class="text-lg font-bold mb-2">Player SL: ${idx + 1}</p>
            <h2 class="text-xl font-bold mb-2">${player.name}</h2>
            <p class="text-md text-gray-600"><strong>Player ID:</strong> ${
              player.playerId
            }</p>
            <p class="text-md text-gray-600">
              <strong>Name ID:</strong> ${player.playerNameID}
            </p>
            <p class="text-md text-gray-600">
              <strong>Position ID:</strong> ${player.PlayerPositionId}
            </p>
            <p class="text-md text-gray-600">
              <strong>Country:</strong> ${player.country}
            </p>
            <p class="text-md text-gray-600"><strong>Role:</strong> ${
              player.role
            }</p>
            <p class="text-md text-gray-600">
              <strong>Batting Type:</strong> ${player.battingType}
            </p>
            <p class="text-md text-gray-600">
              <strong>Bowling Type:</strong> ${player.bowlingType}
            </p>
            <p class="text-md text-gray-600">
              <strong>Price:</strong> ${player.biddingPrice}
            </p>
          </div>
        </div>`;

    playerContainer.appendChild(div);
  });
};
