function showRepositories(event, data) {
  //this is set to the XMLHttpRequest object that fired the event
  var repos = JSON.parse(this.responseText) //this tells the program that it is working with a JSON object
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits)
  req.open("GET", 'https://api.github.com/repos/justinddaniel/' + name + '/commits')
  req.send()
}

function showCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories); //when the event fires showRepositories() gets called.
  req.open("GET", 'https://api.github.com/users/justinddaniel/repos')
  req.send()
}
