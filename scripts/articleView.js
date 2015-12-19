var articleView = {};

articleView.index = function() {
  var _renderAll = function() {
    $articles = $('#articles');
    $articles.fadeIn().siblings().hide();
    Article.all.forEach(function(article) {
      $articles.append(articleView.render(article));
    });
  };

  if (articleView.template) {
    _renderAll();
  } else {
    $.get('/templates/article.html', function(data, msg, xhr) {
      articleView.template = Handlebars.compile(data);
      _renderAll();
    });
  }
};

articleView.render = function(article) {
  article.daysAgo =
    parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);

  article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';
  article.authorSlug = util.slug(article.author);
  article.categorySlug = util.slug(article.category);

  return articleView.template(article);
};

articleView.renderGroup = function (articleList) {
  $('#blog')
    .hide()
    .empty()
    .append(
      articleList.map(function(a) {
        return articleView.render(a);
      })
    )
    .fadeIn()
    .siblings().hide();
}

articleView.loadTemplate = function(articles) {
  $.get('/template/article.html', function(data, msg, xhr) {
    //data is what comes back from AJAX call - storing handlebars function until it's called
    articleView.template = Handlebars.compile(data);
    articleView.authorPopluate();
    articleView.categoryPopulate();
    articleView.handleFilter();
    articleView.renderGroup(articles);
    articleView.truncateArticles();
  });
}

articleView.show = function(articles) {
  //we just instantiated the artilces array into the new Article we can remove code
  articleView.loadTemplate(articles);
};
