fetch("https://api.github.com/search/users?q=OyakiMasu")
    .then(function(response){
    return response.json();
})
.then(function(object){
    console.log(object.items);
    searchDetails = object.items
    for(details of searchDetails){
        // console.log(details.login)
        // console.log(details.avatar_url);
        // console.log(details.html_url);
        const p = document.createElement('p')
        p.textContent=
        `${details.login}
         ${details.avatar_url}
         ${details.html_url}`
        const body = document.querySelector('body')
        body.appendChild(p)
    
    }

})

fetch("https://api.github.com/users/OyakiMasu/repos")
    .then(function(response){
    return response.json();
})
  .then(function(objects){
    console.log(objects)
    searchDetailz = objects
    for(detailz of searchDetailz){
    let np = document.createElement('div')
    np.textContent = `${detailz.name}, ${detailz.fullname}`
    const bodyz = document.querySelector('body')
    bodyz.appendChild(np)



    }
  })
