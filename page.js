let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    } 
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}   

const scriptURL = 'https://script.google.com/macros/s/AKfycbz54Yx9LH60a9dXQUtOeS9dHwrXDPvrnpHLvnNQO4Ql_cLMe85nk9pfKFoiI-BLXZiBfQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const massage = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        massage.innerHTML = "Kirim Pesan Berhasil", setTimeout(function(){
            massage.innerHTML =  ""   
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  // pagination
  const searchResults = {
    1: [
        {
            title: "Indihome Tangerang App",
            description: "Website ini di buat untuk Promosi pemasang wifi di daerah Tangerang Sekitarnya.",
            link: "https://indihome-tangerang.netlify.app/",
            image: "image/indihome-tangerang.png"
        },
        {
          title: "Indihome Jakarta Barat App",
          description: "Website ini di buat untuk membantu Rekan Teman mempermudah mencari customer yang ingin pemasang indihome di jakarta barat sekitarnya.",
          link: "https://indihome-jakarta-barat.netlify.app/",
          image: "image/indihome-barat.png"
        },
        {
          title: "Pos Cafe App",
          description: "Website ini di buat Keperluan Final Project di Bootchamp Salt Academy.",
          link: "https://github.com/gilangwokeh/gilang_PosCafe_finalProject",
          image: "image/pos-cafe.jpeg"
        },
        {
          title: "Toko online",
          description: "Website ini di buat keperluan jualan burung Bapak Saya.",
          link: "https://burungdev.netlify.app/",
          image: "image/toko-burung.png"
        }
    ],
    2: [
        {
          title: "Gensakidz",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Pengembangkan Potensi Pertumbuhan Anak.",
          link: "https://gensakidz.com/",
          image: "image/gensakidz.png"
        },
        {
          title: "LookArt Santri",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Toko Hiasan Cantik lukisan Dari Kayu.",
          link: "https://www.lookartsantri.com/",
          image: "image/lookart.png"
        },
        {
          title: "Bomohreal",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Pemersatuan Ikatan Jodoh.",
          link: "https://bomohreal.com/",
          image: "image/Bomo.png"
        },
        {
          title: "jewelery kirania",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Toko Perhiasan Cantik dan Elegan.",
          link: "https://jewelerykirania.web.id/",
          image: "image/jewelery.png"
        }
    ],
    3: [
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar.",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        },
        {
          title: "PT. Aliendra Nanjung Abada",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Toko penyediaan berbagai kebutuhan untuk proyek dan pertanian.",
          link: "https://ptaliendrananjungabada.com",
          image: "image/pupuk.png"
        }
    ]

};


// Function to load results for the current page
function loadResults(page) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';  

  const results = searchResults[page];
  
  // Populate the search results
  results.forEach(result => {
      const resultDiv = document.createElement('div');     
      resultDiv.classList.add('work');
      resultDiv.innerHTML = `
          <img src="${result.image}" alt="">
          <div class="layer">
            <h3>${result.title}</h3>
            <p>${result.description}<br><br>Klik Lihat Hasil Website Pada icon di bawah ini:</p>
            <a href="${result.link}" target="_blank">
              <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
      `;

      resultsContainer.appendChild(resultDiv);
  });
}

// Function to handle pagination click
function handlePageClick(event) {
  event.preventDefault();
  const page = parseInt(event.target.getAttribute('data-page'));
  if (!isNaN(page)) {
      // Load the selected page results
      loadResults(page);
      // Update active state in pagination
      updatePaginationActive(page);
  }
}

// Function to update the active class on pagination
function updatePaginationActive(activePage) {
  const pageNumbers = document.querySelectorAll('.page-number');
  pageNumbers.forEach(page => {
      if (parseInt(page.getAttribute('data-page')) === activePage) {
          page.classList.add('active');
      } else {
          page.classList.remove('active');
      }
  });
}

// Add event listeners to pagination numbers
document.querySelectorAll('.page-number').forEach(page => {
  page.addEventListener('click', handlePageClick);
});

loadResults(1);

document.getElementById('prev').addEventListener('click', (event) => {
  event.preventDefault();
  const activePage = document.querySelector('.pagination .active');
  const prevPage = parseInt(activePage.getAttribute('data-page')) - 1;

  if (prevPage >= 1) {
      loadResults(prevPage);
      updatePaginationActive(prevPage);
  }
});

document.getElementById('next').addEventListener('click', (event) => {
  event.preventDefault();
  const activePage = document.querySelector('.pagination .active');
  const nextPage = parseInt(activePage.getAttribute('data-page')) + 1;

  if (nextPage <= 3) {
      loadResults(nextPage);
      updatePaginationActive(nextPage);
  }
});
