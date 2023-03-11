let url = "https://theblackwomanhistory.firebaseio.com/.json?print=pretty";

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((post) => {
    var imgUrl;
    let data = post.content;
    let render = data.map((data) => {
      let imageData = data.metadata.image;
      if (imageData != null) {
        imgUrl = imageData.url;
      } else {
        imgUrl =
          "https://thumbs.dreamstime.com/b/silhouette-young-unknown-woman-white-isolated-background-serious-confident-looking-straight-beautiful-girl-concept-122619692.jpg";
      }
      //${data.metadata.birthdate}   ${data.title}   ${imgUrl}   ${data.metadata.country}   ${data.description}
      return `
      <div class="border-gradient">
        <div class="body-docs ">
            <div class="tagInfo">
                <h2 class="Title-tag"> ${data.title}</h2>
                <img class="tag-img" src="${imgUrl}" alt="">
                <div class="content">
                    <ul class="infomation">
                        <li class="birth">${data.metadata.birthdate}</li>
                        <li class="country">${data.metadata.country}</li>
                        <div class="scrollAble">
                            <li class="dcrs">${data.description}</li>
                        </div> 
                    </ul>
                </div>
            </div>
    </div>    
    </div>`;
    });
    document.getElementById("container").innerHTML = render;
  });

let takeDetails = () => {
  var details = document.getElementById("mainTitle").value;
  console.log(details);
  document.getElementById("staticBackdropLabel").innerHTML = details;
};
