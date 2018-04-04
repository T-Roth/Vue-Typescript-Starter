const service = {
  getSteps() {
    //return fetch("./static/data/steps.json", {method: "GET"}).then(response => response.json());
    return fetch("http://localhost:3000/steps", {method: "GET"}).then(response => response.json());
  },
  saveSteps(steps) {
    return fetch("http://localhost:3000/steps",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          "dailySteps": steps
        }),
    }
    );
  }
}

export default service
