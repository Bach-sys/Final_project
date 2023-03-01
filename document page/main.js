let url = "https://theblackwomanhistory.firebaseio.com/.json?print=pretty";

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((post) => {
    var imgUrl ;
    let data = post.content
    let render = data.map((data)=>{
        let imageData = data.metadata.image
        if (imageData != null){
            imgUrl = imageData.url
            
        }else {
            imgUrl = "https://thumbs.dreamstime.com/b/silhouette-young-unknown-woman-white-isolated-background-serious-confident-looking-straight-beautiful-girl-concept-122619692.jpg"
            
        }
        return ` <div class="border-gradient">
        <div class="body-docs ">
            <div class="tagInfo">
                <h2 class="Title-tag">${data.title}</h2>
                <img class="tag-img" src="${imgUrl}" alt="">
                <div class="content">
                    <ul class="infomation">
                        <li class="birth">Born on : ${data.metadata.birthdate}</li>
                        <li class="country">Country : ${data.metadata.country}</li>
                        <li class="dcrs">${data.description}</li>
                        
                    </ul>
                </div>
            </div>
    </div>    
    </div>`
    })
    document.getElementById("container").innerHTML = render
  });
