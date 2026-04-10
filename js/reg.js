async function fetchData(d) {
  const url = `http://localhost/myserver/register.php`; 
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(d).toString(),
    });
    const result = await response.json();
    console.log('Server response:', result);
    return result;
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

function get_data_form() {
  const btn_reg = document.querySelector(".btn_reg");
  btn_reg.addEventListener("click", (event) => {
    const nickname = document.querySelector("#nickname").value;
    const password = document.querySelector("#password").value;

    d = { 
      nickname: nickname,
      password: password,
    }
    event.preventDefault();
    console.log(fetchData(d))
    fetchData(d)
  });
}

document.addEventListener("DOMContentLoaded", function () {
  get_data_form();
});

function get_data_form() {
  const btn_reg = document.querySelector(".btn_reg");
  if (!btn_reg) return;



  btn_reg.addEventListener("click", async (event) => {

    const nickname = document.querySelector("#nickname").value.trim();//.trim - убирает пробелы в начале и в конце строки
    const password = document.querySelector("#password").value.trim();

    if (!nickname || !password) {
      alert("Заполните nickname и password");
      btn_reg.disabled = false;
      btn_reg.textContent = "подтвердить";
      return;
    }

    const d = { nickname, password };
    try {
      const res = await fetchData(d);
      console.log("Ответ сервера:", res);
    } catch (err) {
      console.error("Ошибка отправки:", err);
    } finally {
      btn_reg.disabled = false;
      btn_reg.textContent = "подтвердить";
    }
  });
}