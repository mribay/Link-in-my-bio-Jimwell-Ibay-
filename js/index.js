let loaderElements = `<div class="cover"><div class="pulse"></div></div>`;
let body = $("body");
body.append(loaderElements);

let loader = $(".cover");
setTimeout(() => {
  $(document).ready(() => {
  
    loader.hide();
  
    let github = $(".githubBtn");
    let vercel = $(".vercelBtn");
    let facebook = $(".facebookBtn");
    let tiktok = $(".tiktokBtn");
  
    github.click(() => {
      window.open("https://github.com/mribay", "_blank");
    });
    vercel.click(() => {
      window.open("https://ibayjimwell.vercel.app", "_blank");
    });
    facebook.click(() => {
      window.open("https://www.facebook.com/profile.php?id=100073787000897&mibextid=ZbWKwL", "_blank");
    });
    tiktok.click(() => {
      window.open("https://tiktok.com/@jimwellibay040/", "_blank");
    });
  
  });
}, 5000)

