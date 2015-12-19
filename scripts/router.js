page('/', articlesController.index);
page('/category/:categor', articlesController.category, articlesController.show);
page('/author/:author', articlesController.author, articlesController.show);
page('/about', reposController.index);
page.start();
