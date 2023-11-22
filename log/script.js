document.querySelector('.signup-link').addEventListener('click', () => {
    document.querySelector('.signup').style.visibility = "visible";
    document.querySelector('.login').style.visibility = "hidden";
})


document.querySelector('.login-link').addEventListener('click', () => {
    document.querySelector('.signup').style.visibility = "hidden";    
    document.querySelector('.login').style.visibility = "visible";
})


document.querySelector('.eye-icon').addEventListener('click', () => {
    alert("not enough budget :(")
})

document.querySelector('.media-options').addEventListener('click', () => (
    alert('not enough budget :('))
)