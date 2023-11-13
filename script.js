const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

pageTurnBtns.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
});

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);

    });
}


let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex(); // Make sure this function is defined
            pages[pageNumber].classList.remove('turn'); // Make sure pageNumber is defined
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);

    });
};

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex(); // Make sure this function is defined
        pages[pageNumber].classList.remove('turn'); // Make sure pageNumber is defined
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);

});


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "logasakthi7@gmail.com",
        Password: "11CD6A6189E28B00117BA3DA79312DD61F31",
        To: 'logasakthi275@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value +
            "<br>Email: " + document.getElementById("email").value + "<br>Message: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );

}