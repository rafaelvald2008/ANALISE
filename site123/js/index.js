function search() {
  const input = document.getElementById("searchInput").value;
  if (input.trim() === "") {
    alert("Por favor, insira um termo de busca.");
  } else {
    alert(`Buscando por: ${input}`);
  }
}
