
function opensesame(params) {
  document.querySelector(".request-top").style.display = "flex";
  document.querySelector(".request-top").classList.toggle("open-request");

  setTimeout(() => {
    document
      .querySelector(".request-content")
      .classList.toggle("open-request-content");
  }, 1);
}

var productid = null;


window.requestprod = (e) => {
  opensesame();
  productid = e;
};

window.handleclose = ()=>{
    handleclose()
}

function handleclose() {
  document.querySelector(".request-top").classList.toggle("open-request");
  document
    .querySelector(".request-content")
    .classList.toggle("open-request-content");
  setTimeout(() => {
    document.querySelector(".request-top").style.display = "none";
  }, 300);
}

function submitemail() {
  var email = document.getElementById("email").value;
  console.log(email);
  sendmail(email);
  handleclose();
}

const sendmail = (emails) => {
  console.log("sending mail");

  const data = {
    email: emails,
    product: productid,
  };

  fetch("/api/email/emails", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
     
    .then()
    .catch((error) => {
      console.error("Error:", error);
    });
};

window.onsub = (e) => {
  e.preventDefault();
  submitemail();
}
