function visitorCounter(){
  fetch("https://en5cdoa1a8.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter-1").innerHTML=body
    })
}