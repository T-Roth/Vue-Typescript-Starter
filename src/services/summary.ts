const service = {
  getSummary() {
    return fetch("./static/data/summary.json", {method: "GET"}).then(response => response.json());
  }
}

export default service
