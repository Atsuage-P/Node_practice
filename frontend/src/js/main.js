import axios from "axios";

const msg = document.getElementById('message');
const btn = document.getElementById('btn');

const getMessage = async () => {
  const response = await axios.get('/api/v1/');
  return response.data.message;
}

btn.addEventListener('click', async () => {
  await getMessage()
    .then(res => msg.textContent = res)
    .catch(err => console.log(err));
});
