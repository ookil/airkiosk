$('[currency="usd"]').hide();

$("#usd-currency").click(function () {
  $("#pln-currency").removeClass("active");
  $(this).addClass("active");

  $('[currency="pln"]').hide();
  $('[currency="usd"]').show();
});

$("#pln-currency").click(function () {
  $("#usd-currency").removeClass("active");
  $(this).addClass("active");

  $('[currency="usd"]').hide();
  $('[currency="pln"]').show();
});
