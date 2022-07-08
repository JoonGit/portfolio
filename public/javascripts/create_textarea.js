let ta = `<div class="mb-1 form-floating">
<textarea class="form-control" 
placeholder="Leave a comment here" id="floatingTextarea">
</textarea>
</div>`;
let list = [];
let list_save = [];

let list_container = [list_save, list];

function plus() {
  console.log("plus 실행");
  console.log(list_save);
  // 기존의 value의 값 저장
  listSave();
  // list에 값 추가
  list.push(ta);
  document.getElementById("ta").innerHTML = list.join("");
  // 추가된 리스트 값의 기존의 value의 값 교체
  listlode();
}

function minus() {
  listSave();
  list.pop();
  document.getElementById("ta").innerHTML = list.join("");
  listlode();
}

function listSave() {
  for (let i = 0; i < list.length; i++) {
    list_save.push(document.getElementsByClassName("form-control")[i].value);
    // console.log(list_save);
    // console.dir(list_save);
  }
  // return list_save;
}

function listlode() {
  for (let i = 0; i < list_save.length; i++) {
    console.log(document.getElementsByClassName("form-control")[i].value);
    document.getElementsByClassName("form-control")[i].value = list_save[i];
    console.log(document.getElementsByClassName("form-control")[i].value);
    console.log(listSave[i]);
  }
  list_save = [];
}
