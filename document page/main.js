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

      return ` <div class="border-gradient">
        <div class="body-docs ">
            <div class="tagInfo">
                <h2 class="Title-tag" id = "mainTitle">${data.title}</h2>
                <img class="tag-img" src="${imgUrl}" alt="">
                <div class="content">

                <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick = "takeDetails()">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

                    <ul class="infomation">
                        <li class="birth">Born on : ${data.metadata.birthdate}</li>
                        <li class="country">Country : ${data.metadata.country}</li>
                        <li class="dcrs">${data.description}</li>
                        
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
