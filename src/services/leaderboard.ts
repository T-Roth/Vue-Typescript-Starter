const service = {
  getLeaderboard() {
    //return fetch("./static/data/leaderboard.json", {method: "GET"}).then(response => response.json());
    return fetch("http://localhost:3000/leaderboard", {method: "GET"}).then(response => response.json());
  }
}

export default service
