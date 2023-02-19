fetch("https://theblackwomanhistory.firebaseio.com/.json")
.then(response => response.json())
.then(post => console.log(post))