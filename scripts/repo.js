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
