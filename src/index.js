import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

const onClickComplete = (completeText) => {
  // liタグ
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = completeText;

  // button(戻す)タグ生成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    addIncompleteList(completeText);
    onClickDelete("complete-list", returnButton);
  });

  // liタグの子要素にdivタグを設定
  li.appendChild(div);
  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(returnButton);

  // 未完了のリストに追加
  document.getElementById("complete-list").appendChild(li);
};

const onClickDelete = (list, button) => {
  // 押された削除ボタンの親の親タグを未完了リストから削除。
  const deleteTarget = button.parentNode.parentNode;
  document.getElementById(list).removeChild(deleteTarget);
};

const addIncompleteList = (incompleteText) => {
  // liタグ
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = incompleteText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    onClickComplete(incompleteText);
    // 押された削除ボタンの親の親タグを未完了リストから削除。
    onClickDelete("incomplete-list", completeButton);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () =>
    onClickDelete("incomplete-list", deleteButton)
  );

  // liタグの子要素にdivタグを設定
  li.appendChild(div);
  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
