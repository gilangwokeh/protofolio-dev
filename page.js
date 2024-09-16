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

  // Sample search results data for 5 pages
  const searchResults = {
    1: [
        {
            title: "CV Cintra Champion",
            description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
            link: "https://serviceintisolar.co.id/",
            image: "image/serviceIntisolar.png"
        },
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        },
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        },
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        }
    ],
    2: [
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        },
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        },
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        },
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        }
    ],
    3: [
        {
          title: "CV Cintra Champion",
          description: "Website ini hasil desain saya sesuai permintaan Customer untuk Bisnis Usaha Service Intisolar. Klik Lihat Hasil Website Pada icon di bawah ini:",
          link: "https://serviceintisolar.co.id/",
          image: "image/serviceIntisolar.png"
        }
    ]
    // Add more pages as needed
};


// Function to load results for the current page
function loadResults(page) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';  // Clear previous results

  // Get the results for the current page
  const results = searchResults[page];
  
  // Populate the search results
  results.forEach(result => {
      const resultDiv = document.createElement('div');
      // resultDiv.id = 'portofolio';
      resultDiv.classList.add('container');
      resultDiv.classList.add('work-list');
      resultDiv.classList.add('work');
      console.log(resultDiv.classList);
      // Create HTML structure for the result
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
      
      // Append the result div to the results container
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

// Initial load
loadResults(1);

// Pagination for next and previous
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
  if (nextPage <= 5) {
      loadResults(nextPage);
      updatePaginationActive(nextPage);
  }
});
