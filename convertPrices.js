// Assume this is your initial array with player data
const players = [
  {
    playerId: "sa8sdk45",
    playerNameID: "kagiso_rabada_sa",
    PlayerPositionId: "bowler_sa_1",
    name: "Kagiso Rabada",
    country: "South Africa",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/kagiso_rabada_sa.jpeg",
    role: "Bowler",
    battingType: "Right-hand bat",
    bowlingType: "Right-arm fast",
    biddingPrice: "$1,500,000",
  },
  {
    playerId: "sa93kljd2",
    playerNameID: "quinton_de_kock_sa",
    PlayerPositionId: "wk_batsman_sa_1",
    name: "Quinton de Kock",
    country: "South Africa",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/quinton_de_kock_sa.jpeg",
    role: "Wicketkeeper-batsman",
    battingType: "Left-hand bat",
    bowlingType: "N/A",
    biddingPrice: "$1,600,000",
  },
  {
    playerId: "sa4kljd88",
    playerNameID: "faf_du_plessis_sa",
    PlayerPositionId: "batsman_sa_1",
    name: "Faf du Plessis",
    country: "South Africa",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/faf_du_plessis_sa.jpeg",
    role: "Batsman",
    battingType: "Right-hand bat",
    bowlingType: "N/A",
    biddingPrice: "$1,800,000",
  },
  {
    playerId: "sa23kldjd",
    playerNameID: "david_miller_sa",
    PlayerPositionId: "batsman_sa_2",
    name: "David Miller",
    country: "South Africa",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/david_miller_sa.jpeg",
    role: "Batsman",
    battingType: "Left-hand bat",
    bowlingType: "N/A",
    biddingPrice: "$1,200,000",
  },
  {
    playerId: "sa12kljd5",
    playerNameID: "anrich_nortje_sa",
    PlayerPositionId: "bowler_sa_2",
    name: "Anrich Nortje",
    country: "South Africa",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/anrich_nortje_sa.jpeg",
    role: "Bowler",
    battingType: "Right-hand bat",
    bowlingType: "Right-arm fast",
    biddingPrice: "$1,300,000",
  },
  {
    playerId: "nz93skldf",
    playerNameID: "kane_williamson_nz",
    PlayerPositionId: "batsman_nz_1",
    name: "Kane Williamson",
    country: "New Zealand",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/kane_williamson_nz.jpeg",
    role: "Batsman",
    battingType: "Right-hand bat",
    bowlingType: "Right-arm offbreak",
    biddingPrice: "$1,700,000",
  },
  {
    playerId: "nz6skld99",
    playerNameID: "trent_boult_nz",
    PlayerPositionId: "bowler_nz_1",
    name: "Trent Boult",
    country: "New Zealand",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/trent_boult_nz.jpeg",
    role: "Bowler",
    battingType: "Right-hand bat",
    bowlingType: "Left-arm fast",
    biddingPrice: "$1,300,000",
  },
  {
    playerId: "nz7sdkdl4",
    playerNameID: "lockie_ferguson_nz",
    PlayerPositionId: "bowler_nz_2",
    name: "Lockie Ferguson",
    country: "New Zealand",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/lockie_ferguson_nz.jpeg",
    role: "Bowler",
    battingType: "Right-hand bat",
    bowlingType: "Right-arm fast",
    biddingPrice: "$1,100,000",
  },
  {
    playerId: "nz8sdkdk3",
    playerNameID: "martin_guptill_nz",
    PlayerPositionId: "batsman_nz_2",
    name: "Martin Guptill",
    country: "New Zealand",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/martin_guptill_nz.jpeg",
    role: "Batsman",
    battingType: "Right-hand bat",
    bowlingType: "N/A",
    biddingPrice: "$900,000",
  },
  {
    playerId: "nz93skdjf",
    playerNameID: "tim_southee_nz",
    PlayerPositionId: "bowler_nz_3",
    name: "Tim Southee",
    country: "New Zealand",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/tim_southee_nz.jpeg",
    role: "Bowler",
    battingType: "Right-hand bat",
    bowlingType: "Right-arm medium-fast",
    biddingPrice: "$1,400,000",
  },
  {
    playerId: "eng9sdjkd1",
    playerNameID: "ben_stokes_eng",
    PlayerPositionId: "all_rounder_eng_1",
    name: "Ben Stokes",
    country: "England",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/ben_stokes_eng.jpeg",
    role: "All-rounder",
    battingType: "Left-hand bat",
    bowlingType: "Right-arm fast-medium",
    biddingPrice: "$2,300,000",
  },
  {
    playerId: "eng84sldkd",
    playerNameID: "jos_buttler_eng",
    PlayerPositionId: "wk_batsman_eng_1",
    name: "Jos Buttler",
    country: "England",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/jos_buttler_eng.jpeg",
    role: "Wicketkeeper-batsman",
    battingType: "Right-hand bat",
    bowlingType: "N/A",
    biddingPrice: "$1,800,000",
  },
  {
    playerId: "eng5skld09",
    playerNameID: "jofra_archer_eng",
    PlayerPositionId: "bowler_eng_1",
    name: "Jofra Archer",
    country: "England",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/jofra_archer_eng.jpeg",
    role: "Bowler",
    battingType: "Right-hand bat",
    bowlingType: "Right-arm fast",
    biddingPrice: "$1,600,000",
  },
  {
    playerId: "eng8ksjd93",
    playerNameID: "joe_root_eng",
    PlayerPositionId: "batsman_eng_1",
    name: "Joe Root",
    country: "England",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/joe_root_eng.jpeg",
    role: "Batsman",
    battingType: "Right-hand bat",
    bowlingType: "Right-arm offbreak",
    biddingPrice: "$2,000,000",
  },
  {
    playerId: "eng65lskd20",
    playerNameID: "jonny_bairstow_eng",
    PlayerPositionId: "wk_batsman_eng_2",
    name: "Jonny Bairstow",
    country: "England",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/jonny_bairstow_eng.jpeg",
    role: "Wicketkeeper-batsman",
    battingType: "Right-hand bat",
    bowlingType: "N/A",
    biddingPrice: "$1,500,000",
  },
  {
    playerId: "ind93skdkf",
    playerNameID: "virat_kohli_ind",
    PlayerPositionId: "batsman_ind_1",
    name: "Virat Kohli",
    country: "India",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/virat_kohli_ind.jpeg",
    role: "Batsman",
    battingType: "Right-hand bat",
    bowlingType: "N/A",
    biddingPrice: "$2,500,000",
  },
  {
    playerId: "ind84ksjd9",
    playerNameID: "rohit_sharma_ind",
    PlayerPositionId: "batsman_ind_2",
    name: "Rohit Sharma",
    country: "India",
    image:
      "https://raw.githubusercontent.com/nayeem-webdev/cricketer-data-json/refs/heads/main/assets/rohit_sharma_ind.jpeg",
    role: "Batsman",
    battingType: "Right-hand bat",
    bowlingType: "Right-arm offbreak",
    biddingPrice: "$2,300,000",
  },
];
const fs = require("fs");

// Read the JSON file
fs.readFile("n.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Parse JSON data
  let players = JSON.parse(data);

  // Modify the biddingPrice field
  players.forEach((player) => {
    if (typeof player.biddingPrice === "string") {
      player.biddingPrice = parseInt(player.biddingPrice.replace(/[$,]/g, ""));
    }
  });

  // Convert the updated data back to JSON format
  const updatedJSON = JSON.stringify(players, null, 2);

  // Write the modified data back to the same file
  fs.writeFile("n.json", updatedJSON, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    } else {
      console.log("Bidding prices have been converted and saved to n.json.");
    }
  });
});
