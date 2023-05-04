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
