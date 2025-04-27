window.addEventListener("DOMContentLoaded", () => {
const codeBlock = document.getElementById("code-block");
if (!codeBlock) return; // 容错处理

const lines = codeBlock.innerText.split("\n").length;

const lineNumberDiv = document.createElement("div");
lineNumberDiv.className = "line-numbers";

for (let i = 1; i <= lines; i++) {
  lineNumberDiv.innerHTML += i + "<br>";
}

// 添加行号到代码容器
const container = codeBlock.parentElement.parentElement;
container.insertBefore(lineNumberDiv, container.firstChild);
});