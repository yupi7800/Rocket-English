function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

// タスク保存
document.querySelectorAll(".task").forEach(checkbox => {
  const saved = localStorage.getItem(checkbox.dataset.task);
  checkbox.checked = saved === "true";

  checkbox.addEventListener("change", () => {
    localStorage.setItem(checkbox.dataset.task, checkbox.checked);
  });
});
