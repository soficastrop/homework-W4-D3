document.addEventListener('DOMContentLoaded', function() {
    
    const partners = [
        { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tour" },
        { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
        { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
        { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
        { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Ride" },
        { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
    ];

    const ul = document.getElementById('partners');

    partners.forEach(function(partner) {
        const li = document.createElement('li');
        li.classList.add('partner'); 

        const img = document.createElement('img');
        img.src = partner.src;  
        img.alt = partner.alt;  

        li.appendChild(img);

        ul.appendChild(li);
    });
});

//Contact Drop Down//
document.addEventListener("DOMContentLoaded", function () {
    const contactMethod = document.getElementById("contact-method");
    const emailInput = document.getElementById("email-input");
    const phoneInput = document.getElementById("phone-input");

    contactMethod.addEventListener("change", function () {
        emailInput.classList.add("hidden");
        phoneInput.classList.add("hidden");

        if (contactMethod.value === "email") {
            emailInput.classList.remove("hidden");
        } else if (contactMethod.value === "phone") {
            phoneInput.classList.remove("hidden");
        }
    });
});