const testBtn = document.querySelector("#button");

testBtn.addEventListener("click", main);

function main() {
  fetch("/main", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((res) => {
      //   if (res.success) {
      //     location.href = "/main";
      //   } else {
      //     if (res.err) return alert(res.err);
      //     alert(res.msg);
      //   }
    })
    .catch((err) => {
      console.error("에러 발생");
    });
}
