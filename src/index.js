var Function = new Table();
window.onload = Function.showTable();

document.getElementById('showInsertForm').addEventListener('click', function () {
  Function.showForm();
});

document.getElementById('insertData').addEventListener('click', function () {
  Function.insertData(this);
});

document.getElementById('modifyData').addEventListener('click', function () {
  Function.modifyData(this);
});

document.getElementById('cancelButton').addEventListener('click', function () {
  document.getElementById('form').style.display = 'none';
});

