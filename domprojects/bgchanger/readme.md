## Background Color Changer

# Project 1

```
       const buttons = document.querySelectorAll('.box');
        const body = document.querySelector('body');
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                body.style.backgroundColor =e.target.id;
            })
        });
```
