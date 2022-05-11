var posts = new Posts();

posts.fetch();

$('.some-search-input').on('change', function () {
    var results = posts.filter($(this).val().trim()),
        $resultsContainer = $('.search-results').empty();

    _(results).each(function (r) {
        $resultsContainer.append(new SearchResult({model: r}).render().$el);
    });
});


function doSearch() {
    
    var searchString = document.getElementById("some-search-input").value;

    var results = posts.filter(searchString.trim()),
        $resultsContainer = document.getElementById("search-result").empty();

    _(results).each(function (r) {
        $resultsContainer.append(new SearchResult({model: r}).render().$el);
    });
    
}