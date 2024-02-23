

    document.addEventListener('DOMContentLoaded', function () {
        const Ename = document.querySelector('#name');
        const Eusername = document.querySelector('#username');
        const Eavatar = document.querySelector('#avatar');
        const Erepository = document.querySelector('#repository');
        const Efollowers = document.querySelector('#followers');
        const Efollowing = document.querySelector('#following');
        const Elink = document.querySelector('#link');
    
        fetch('https://api.github.com/users/b0kki')
            .then(function (res) {
                return res.json();
            })
            .then(function (json) {
                Efollowers.innerText = json.followers;
                Efollowing.innerText = json.following;
                Ename.innerText = json.name;
                Eusername.innerText = json.login;
                Eavatar.src = json.avatar_url;
                Erepository.innerText = json.public_repos;
                Elink.href = json.html_url;
            })
    })

