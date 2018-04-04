const service = {
  getSummary() {
    //return fetch("./static/data/summary.json", {method: "GET"}).then(response => response.json());
    return fetch("http://localhost:3000/summary", {method: "GET"}).then(response => response.json());
  }
}

export default service
