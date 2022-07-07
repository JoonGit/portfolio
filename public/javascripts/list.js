let navList = ["글쓰기", "게시판", "마이페이지"];
let srcList = ["/main/create_plan", "#", "/main/mypage"];
let list = `<ul class="nav justify-content-end">`;
for (let i = 0; i < navList.length; i++) {
  list += `<li class="nav-item">
  <a class="nav-link active" aria-current="page" href=${srcList[i]}>${navList[i]}</a>
</li>`;
}
list += `</ul>`;
document.write(list);
