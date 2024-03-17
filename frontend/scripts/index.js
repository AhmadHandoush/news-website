$(document).ready(() => {
  $("#addNewsForm").submit((event) => {
    event.preventDefault();
    const formData = $(event.currentTarget).serialize();
    $.ajax({
      url: "http://localhost/news/backend/addNews.php",
      type: "POST",
      data: formData,
      success: (response) => {
        alert(response);
        fetchNews();
        $("#addNewsForm")[0].reset();
      },
      error: (error) => {
        console.error("Error adding news:", error);
      },
    });
  });

  const fetchNews = () => {
    $.ajax({
      url: "http://localhost/news/backend/getNews.php",
      type: "GET",
      dataType: "json",
      success: (news) => {
        $("#newsList").empty();
        news.forEach((item) => {
          $("#newsList").append(
            `<li class="list-group-item bg-primary"><h4>${item.title}</h4><p>${item.content}</p></li>`
          );
        });
      },
      error: (error) => {
        console.error("Error fetching news:", error);
      },
    });
  };
  fetchNews();
});
