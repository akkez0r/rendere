async function send() {
  const input = document.getElementById("input");
  const messages = document.getElementById("messages");

  const text = input.value;
  if (!text) return;

  messages.innerHTML += `<div class="user">You: ${text}</div>`;
  input.value = "";

  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  const data = await res.json();
  messages.innerHTML += `<div class="bot">AI: ${data.reply}</div>`;
  messages.scrollTop = messages.scrollHeight;
}
