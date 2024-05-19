document.getElementById("inviteForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var inviteKey = document.getElementById("inviteKey").value;
  if (inviteKey === "") {
    document.getElementById("message").innerText = "Пожалуйста, введите ключ приглашения.";
    return;
  }
  // Проверка ключа приглашения (здесь может быть ваша логика)
  if (inviteKey === "123456") {
    localStorage.setItem("inviteKey", inviteKey);
    window.location.href = "chat.html"; // Перенаправляем на страницу чата
  } else {
    document.getElementById("message").innerText = "Неверный ключ приглашения.";
  }
});
