const git = document.querySelector('#github-link');
const linkedinink = document.querySelector('#linkedin-link')
const youtubeLink = document.querySelector('#youtube-link')
const twitterlink = document.querySelector('#twitter-link');


git.addEventListener('click', () => {
    window.location.href = "https://github.com/";
});

linkedinink.addEventListener('click', () => {
    window.location.href = "https://www.linkedin.com/";
});

youtubeLink.addEventListener('click', () => {
    window.location.href = "https://youtube.com/";
});

twitterlink.addEventListener('click', () => {
    window.location.href = "https://x.com/";
});


const activelink = window.location.pathname;
const allLink = document.querySelectorAll('#nav-link');

allLink.forEach(link => {
    console.log(link.innerHTML)
    if(link.innerHTML == 'About'){
        console.log('ss')
        link.classList.add('activelink')
    }
    
})
