document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('nav ul.menu');
  
    burger.addEventListener('click', function() {
      console.log('Burger menu clicked!');
      menu.classList.toggle('active');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    
    // Check if cookies are accepted
    if (!getCookie('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }

    acceptCookies.addEventListener('click', function() {
        setCookie('cookiesAccepted', 'true', 365);
        cookieConsent.style.display = 'none';
        // Load Google Ads scripts here if needed
    });
    
    // Function to set a cookie
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    
    // Function to get a cookie
    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
});

acceptCookies.addEventListener('click', function() {
  setCookie('cookiesAccepted', 'true', 365);
  cookieConsent.style.display = 'none';
  loadGoogleAds();
});

// Function to load Google Ads script
function loadGoogleAds() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  document.head.appendChild(script);
}

