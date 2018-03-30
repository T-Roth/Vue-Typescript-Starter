const service = {
  getLeaderboard() {
    return fetch("./static/data/leaderboard.json", {method: "GET"}).then(response => response.json());
  }
}

export default service
