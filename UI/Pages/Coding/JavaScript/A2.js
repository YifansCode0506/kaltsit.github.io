

function deleteIndex3() {
    const original = ['S', 'A', 'B', 'J', 'H', 'J', 'A', 'B'];
    original.splice(3, 1); // 删除下标为3的元素
    const table = document.getElementById('after-delete');
    table.innerHTML = `
      <div class="row label">
        <span>内存地址：</span>
        ${original.map((_, i) => `<span>${100 + i}</span>`).join('')}
      </div>
      <div class="row">
        <span>字符数组：</span>
        ${original.map(ch => `<span>${ch}</span>`).join('')}
      </div>
      <div class="row label">
        <span>下标：</span>
        ${original.map((_, i) => `<span>${i}</span>`).join('')}
      </div>
    `;
  }
  