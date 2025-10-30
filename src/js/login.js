document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Captura os valores diretamente dos inputs
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const userData = { email, password };

  try {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    // Verifica se a resposta é texto ou JSON
    const contentType = response.headers.get('content-type');
    let result;

    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    } else {
      result = await response.text();
    }

    // Validação da resposta
    if (response.ok) {
      alert('Login realizado com sucesso!');
//      window.location.href = '../../index.html'; // redireciona após login
    } else {
      alert(result.message || result || 'Erro ao fazer login.');
    }

  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao conectar ao servidor.');
  }
});
