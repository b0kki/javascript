

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
                Efollowers.innertText = json.followers;
                Efollowing.innertText = json.following;
                Ename.innertText = json.name;
                Eusername.innertText = json.login;
                Eavatar.src = json.avatar_url;
                Erepository.innertText = json.public_repos;
                Elink.href = json.html_url;
            })
    })

