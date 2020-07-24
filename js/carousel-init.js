const loadCarousel = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "shopItems.JSON", true);

  xhr.onload = function () {
    if (this.status == 200) {
      const items = JSON.parse(this.responseText);

      let output = "";

      for (const i in items) {
        output = `
                <div class="card">
                    <div class="card-body text-center">
                        <img
                        class="card-img-top img-fluid pb-3"
                        src=${items[i].img}
                        alt="Card image cap"
                        style="width:200px;height:200px;"
                    />
                        <h5 class="card-title text-primary mb-0">
                        <a href=${items[i].href} class="link-unstyled stretched-link"
                        >${items[i].title}</a
                        >
                    </h5>
                    <p class="card-text text-muted">
                      ${items[i].description}
                    </p>
                    <p class="mb-0 text-muted font-weight-bold">
                      <span currency="pln" class="font-weight-bold h5">${items[i].pricePLN} PLN</span>    
                      <span currency="usd" class="font-weight-bold h5">${items[i].priceUSD} USD</span>    
                    </p>
                    </div>
                </div>
                `;
        $(".carousel-class").slick("slickAdd", output);
        $('[currency="usd"]').hide();         
      }
      
    }
  };
  xhr.send();

  $(".carousel-class").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
};