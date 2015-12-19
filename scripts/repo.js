var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  $.ajax({
    url: '/github/users/pnwlady/repos' +
          '?per_page=100' +
          '&sort=updated',
    type: 'GET',
    success: function(data, message, xhr) {
      repos.all = data;
    }
  }).done(callback);
};

//looking at Natalie's code
//repo
var ghRepo = {};

ghRepo.requestAll = function(callback) {
  $.ajax({
    type: 'GET',
    url: '/github/user/repos?sort=updated'
  }).done(callback);
};

//activity
var ghActivity = {};

ghActivity.request = function(callback) {
  $.ajax({
    type: 'GET',
    url: '/github/users/pnwlady/events'
  }).done(callback);
};

ghActivity.extractBranch = function(ref) {
  return ref.split('/')[ref.split('/').length - 1];
};
