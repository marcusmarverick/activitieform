const passwordIcons = document.querySelectorAll('.password-icon')

passwordIcons.forEach(icon =>{
       icon.addEventListener('click', function()){
        const input = this.parentElement.querySelector('.form-control);
            input.type = input.type === 'password' ? 'text' :'passord';
            this.classlist.toggle('fa-eye');
       })
    })
