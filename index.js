function showRepositories(event, data) {
  //this is set to the XMLHttpRequest object that fired the event
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`
  for(var i=0;i < this.responseText.length; i++) {
    repoList += "<li>" + this.responseText[i]["name"] + "</li>"
  }
  repoList += "</ul>"
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories); //when the event fires showRepositories() gets called.
  req.open("GET", 'https://api.github.com/users/justinddaniel/repos')
  req.send()
}
