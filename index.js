document.addEventListener(
    'submit',()=>{
    if (document.getElementById('password').value !==
    document.getElementById('confirmPass').value)
    {
        document.querySelector('.error').style.display = 'block'
    }
}
)