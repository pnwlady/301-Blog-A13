var reposController = {};

reposController.index = function() {
  repos.requestRepos(repoView.index);
  //TODO: repos.requestGists(gistView.index);
  ghRepo.requestAll(aboutView.repo);
  ghBio.request(aboutView.bio);
  ghActivity.request(aboutView.activity);
};
