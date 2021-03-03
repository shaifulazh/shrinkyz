(self["webpackChunk"] = self["webpackChunk"] || []).push([["request"],{

/***/ "./assets/vanilla/request.js":
/*!***********************************!*\
  !*** ./assets/vanilla/request.js ***!
  \***********************************/
/***/ (() => {

function opensesame(params) {
  document.querySelector(".request-top").style.display = "flex";
  document.querySelector(".request-top").classList.toggle("open-request");
  setTimeout(() => {
    document.querySelector(".request-content").classList.toggle("open-request-content");
  }, 1);
}

var productid = null;

window.requestprod = e => {
  opensesame();
  productid = e;
};

window.handleclose = () => {
  handleclose();
};

function handleclose() {
  document.querySelector(".request-top").classList.toggle("open-request");
  document.querySelector(".request-content").classList.toggle("open-request-content");
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

const sendmail = emails => {
  console.log("sending mail");
  const data = {
    email: emails,
    product: productid
  };
  fetch("/api/email/emails", {
    method: "POST",
    // or 'PUT'
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then().catch(error => {
    console.error("Error:", error);
  });
};

window.onsub = e => {
  e.preventDefault();
  submitemail();
};

/***/ })

},
0,[["./assets/vanilla/request.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdmFuaWxsYS9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIm9wZW5zZXNhbWUiLCJwYXJhbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXRUaW1lb3V0IiwicHJvZHVjdGlkIiwid2luZG93IiwicmVxdWVzdHByb2QiLCJlIiwiaGFuZGxlY2xvc2UiLCJzdWJtaXRlbWFpbCIsImVtYWlsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kbWFpbCIsImVtYWlscyIsImRhdGEiLCJwcm9kdWN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsIm9uc3ViIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsU0FBU0EsVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDMUJDLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q0MsS0FBdkMsQ0FBNkNDLE9BQTdDLEdBQXVELE1BQXZEO0FBQ0FILFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q0csU0FBdkMsQ0FBaURDLE1BQWpELENBQXdELGNBQXhEO0FBRUFDLFlBQVUsQ0FBQyxNQUFNO0FBQ2ZOLFlBQVEsQ0FDTEMsYUFESCxDQUNpQixrQkFEakIsRUFFR0csU0FGSCxDQUVhQyxNQUZiLENBRW9CLHNCQUZwQjtBQUdELEdBSlMsRUFJUCxDQUpPLENBQVY7QUFLRDs7QUFFRCxJQUFJRSxTQUFTLEdBQUcsSUFBaEI7O0FBR0FDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFzQkMsQ0FBRCxJQUFPO0FBQzFCWixZQUFVO0FBQ1ZTLFdBQVMsR0FBR0csQ0FBWjtBQUNELENBSEQ7O0FBS0FGLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQixNQUFJO0FBQ3JCQSxhQUFXO0FBQ2QsQ0FGRDs7QUFJQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCWCxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNHLFNBQXZDLENBQWlEQyxNQUFqRCxDQUF3RCxjQUF4RDtBQUNBTCxVQUFRLENBQ0xDLGFBREgsQ0FDaUIsa0JBRGpCLEVBRUdHLFNBRkgsQ0FFYUMsTUFGYixDQUVvQixzQkFGcEI7QUFHQUMsWUFBVSxDQUFDLE1BQU07QUFDZk4sWUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxLQUF2QyxDQUE2Q0MsT0FBN0MsR0FBdUQsTUFBdkQ7QUFDRCxHQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0Q7O0FBRUQsU0FBU1MsV0FBVCxHQUF1QjtBQUNyQixNQUFJQyxLQUFLLEdBQUdiLFFBQVEsQ0FBQ2MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsS0FBN0M7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFDQUssVUFBUSxDQUFDTCxLQUFELENBQVI7QUFDQUYsYUFBVztBQUNaOztBQUVELE1BQU1PLFFBQVEsR0FBSUMsTUFBRCxJQUFZO0FBQzNCSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRUEsUUFBTUcsSUFBSSxHQUFHO0FBQ1hQLFNBQUssRUFBRU0sTUFESTtBQUVYRSxXQUFPLEVBQUVkO0FBRkUsR0FBYjtBQUtBZSxPQUFLLENBQUMsbUJBQUQsRUFBc0I7QUFDekJDLFVBQU0sRUFBRSxNQURpQjtBQUNUO0FBQ2hCQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZnQjtBQUt6QkMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQUxtQixHQUF0QixDQUFMLENBUUdRLElBUkgsR0FTR0MsS0FUSCxDQVNVQyxLQUFELElBQVc7QUFDaEJkLFdBQU8sQ0FBQ2MsS0FBUixDQUFjLFFBQWQsRUFBd0JBLEtBQXhCO0FBQ0QsR0FYSDtBQVlELENBcEJEOztBQXNCQXRCLE1BQU0sQ0FBQ3VCLEtBQVAsR0FBZ0JyQixDQUFELElBQU87QUFDcEJBLEdBQUMsQ0FBQ3NCLGNBQUY7QUFDQXBCLGFBQVc7QUFDWixDQUhELEMiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiBvcGVuc2VzYW1lKHBhcmFtcykge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWVzdC10b3BcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWVzdC10b3BcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tcmVxdWVzdFwiKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5yZXF1ZXN0LWNvbnRlbnRcIilcclxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLXJlcXVlc3QtY29udGVudFwiKTtcclxuICB9LCAxKTtcclxufVxyXG5cclxudmFyIHByb2R1Y3RpZCA9IG51bGw7XHJcblxyXG5cclxud2luZG93LnJlcXVlc3Rwcm9kID0gKGUpID0+IHtcclxuICBvcGVuc2VzYW1lKCk7XHJcbiAgcHJvZHVjdGlkID0gZTtcclxufTtcclxuXHJcbndpbmRvdy5oYW5kbGVjbG9zZSA9ICgpPT57XHJcbiAgICBoYW5kbGVjbG9zZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZWNsb3NlKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWVzdC10b3BcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tcmVxdWVzdFwiKTtcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWVzdC1jb250ZW50XCIpXHJcbiAgICAuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tcmVxdWVzdC1jb250ZW50XCIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXF1ZXN0LXRvcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSwgMzAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0ZW1haWwoKSB7XHJcbiAgdmFyIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcclxuICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgc2VuZG1haWwoZW1haWwpO1xyXG4gIGhhbmRsZWNsb3NlKCk7XHJcbn1cclxuXHJcbmNvbnN0IHNlbmRtYWlsID0gKGVtYWlscykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwic2VuZGluZyBtYWlsXCIpO1xyXG5cclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgZW1haWw6IGVtYWlscyxcclxuICAgIHByb2R1Y3Q6IHByb2R1Y3RpZCxcclxuICB9O1xyXG5cclxuICBmZXRjaChcIi9hcGkvZW1haWwvZW1haWxzXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIG9yICdQVVQnXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAgXHJcbiAgICAudGhlbigpXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG53aW5kb3cub25zdWIgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzdWJtaXRlbWFpbCgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=