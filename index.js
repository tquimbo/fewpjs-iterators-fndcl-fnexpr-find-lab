
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

function superbowlWin(arr) {
    const won = arr.find(game => game.result === "W" )
    if (won) { return won.year }
  }