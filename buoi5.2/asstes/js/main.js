const data = [
    {
        name: "aos polo",
        src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_2_img.jpg?v=328",

    },
    {
        name: "quan nam ",
        src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_4_img.jpg?v=328"

    },
    {
        name: "ao bbbhjs",
        src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_7_img.jpg?v=328"
    },
    {
        name: "quan jj",
        src: "https://theme.hstatic.net/200000690725/1001078549/14/home_category_5_img.jpg?v=328"
    },
    {
        name: "rtyustf",
        src: "https://product.hstatic.net/200000690725/product/fstp002-1_53551641912_o_1dec6ea0f59f45bab296b33300d2a1ae_master.jpg"
    }
];

// buoc 1 truy cap phan tu 
let rowProduct = document.querySelector(".row-js");
// buoc 2 
let HTML = ``;
data.forEach((value, index) => {
    HTML += `
    <div class="coloumn coloumn-4">

          <div class="box-images">
            <img src="${value.src}" alt="SP 1">
          </div>
          <div class="box-content">
            <h3>${value.name}</h3>
          </div>
          </div>
    
    
    `;
});

//buoc 3  do du lieu 

rowProduct.innerHTML = HTML ;
