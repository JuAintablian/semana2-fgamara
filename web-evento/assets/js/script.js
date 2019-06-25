window.onhashchange = function (e) {
            const oldUrl = e.oldURL.split('#')[1]
            const newUrl = e.newURL.split('#')[1]
            console.log(oldUrl, newUrl)
            const oldMenu = document.querySelector(`.menu a[href='#${oldUrl}']`)
            const newMenu = document.querySelector(`.menu a[href='#${newUrl}']`)
            oldMenu && oldMenu.classList.remove('selected')
            newMenu && newMenu.classList.add('selected')
        }