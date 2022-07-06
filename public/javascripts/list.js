let navList = ["글쓰기", "게시판", "마이페이지"];
let srcList = ["/main/create_plan", "#", "/main/mypage"];
let list = "";
for (let i = 0; i < navList.length; i++) {
  list += `<li><a href=${srcList[i]}>${navList[i]}</a></li>`;
}
document.write(list);
