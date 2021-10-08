var $myWork = $('#myWork')
var $aboutMe = $('#aboutMe')
var $contactMe = $('#contactMe')


$aboutMe.on('click', homePage)
$contactMe.on('click', homePage)

function homePage() {
    location.href = "./index.html"
}

$myWork.on('click', myWork)

function myWork() {
    location.href = "./myWork.html"
}
