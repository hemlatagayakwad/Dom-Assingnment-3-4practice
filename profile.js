let profileContEl=document.getElementById("profileCont");


let imageEl=document.createElement("img");

imageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png";
profileContEl.appendChild(imageEl);


let headingEl=document.createElement("h4");
headingEl.classList.add("headingElement");
headingEl.textContent="rahul attuluri";
profileContEl.appendChild(headingEl);


let ageEl=document.createElement("h5");
ageEl.classList.add("ageOfPerson");
ageEl.textContent=" Age-21";
profileContEl.appendChild(ageEl);
