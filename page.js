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
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Toko Pengembangkan Potensi Pertumbuhan Anak.",
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
        },
        {
          title: "Psikotest Hrd",
          description: "Website Psikotest untuk Test Kemamuan Pelamar.",
          link: "https://psikotest-hrd.vercel.app/",
          image: "image/Psikotest.png"
        },
        {
          title: "Poles Marmer",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Toko penyediaan berbagai kebutuhan untuk poles marmer.",
          link: "https://poles-marmer.com/",
          image: "image/poles-marmer.png"
        }
    ]

};


function loadResults(page) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';  

  const results = searchResults[page];
  
  results.forEach(result => {
      const resultDiv = document.createElement('div');     
      resultDiv.classList.add('work');
      resultDiv.innerHTML = `
          <img src="${result.image}" alt="">
          <div class="layer">
            <h3 class="layer-judul">${result.title}</h3>
            <p>${result.description}<br><br>Klik Lihat Hasil Website Pada icon di bawah ini:</p>
            <a href="${result.link}" target="_blank">
              <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
      `;

      resultsContainer.appendChild(resultDiv);
  });
}


function handlePageClick(event) {
  event.preventDefault();
  const page = parseInt(event.target.getAttribute('data-page'));
  if (!isNaN(page)) {
      loadResults(page);
      updatePaginationActive(page);
  }
}

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


// scrooll arah bawah
window.onscroll = function() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
  } else {
      scrollTopBtn.style.display = "none";
  }
};

// Fungsi untuk scroll ke atas
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}

// macam scroll = about,service
window.addEventListener('scroll', function() {
  const sectionsToShow = [
    { element: document.querySelector('.services-list'), className: 'show' },
    { element: document.getElementById('about'), className: 'show' }
  ];

  sectionsToShow.forEach(section => {
    if (section.element) {
      const sectionPosition = section.element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (sectionPosition < screenPosition) {
        section.element.classList.add(section.className);
      } else {
        section.element.classList.remove(section.className);
      }
    }
  });
});

//macam scroll = contact,pagination,portofolio,search-results
document.addEventListener("DOMContentLoaded", function() {
  let options = {
    threshold: 0.1
  };

  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, options);

 
  const targets = [
    ...document.querySelectorAll(".contact-left, .contact-right"), 
    document.getElementById('portofolio'), 
    document.querySelector('.pagination-container'), 
    document.getElementById('search-results') 
  ];

  
  targets.forEach(target => {
    if (target) { 
      observer.observe(target);
    }
  });
});
