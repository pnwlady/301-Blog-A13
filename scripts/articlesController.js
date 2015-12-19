var articlesController = {};

articlesController.index = function(ctx, next) {
  Article.loadAll(articleView.index);
};

//user load or user edit

//darcy didn't pushlish her code from class and my notes are a mess!

articlesController.category = function(ctx, next) {
  var categoryData = function(articles) {
    //giving new property to
    ctx.articles = articles;
    next();
  }
  Article.findByCategory = function(ctx.params.category, categoryData) {
  };
}

articlesController.author = function(ctx, param.author) {
  console.log(ctx);
};

articlesController.show = function(ctx) {
  articleView.show(ctx.articles);
  console.log(ctx);
};
