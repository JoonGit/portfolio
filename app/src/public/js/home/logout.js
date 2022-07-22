const logout = document.querySelector("#logout");

logout.addEventListener("click", logOut);

function logOut() {
  fetch("/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((res) => {
      //   if (res.success) {
      //   location.href = "/";
      //   } else {
      //     if (res.err) return alert(res.err);
      //     alert(res.msg);
      //   }
    })
    .catch((err) => {
      console.error("에러 발생");
    });
}
