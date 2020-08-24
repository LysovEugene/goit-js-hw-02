const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Polwy';
let message;

for (const client of clients) {
  /*
   * На каждой итерации мы будем проверять совпадает ли элемент массива с
   * именем клиента. Если совпадает то мы записываем в message сообщение
   * об успехе и делаем break чтобы не искать дальше
   */

  if (client === clientNameToFind) {
    message = 'Клиент с таким именем есть в базе данных!';
    break;
  }

  // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
  message = 'Клиента с таким именем нету в базе данных!';
}

console.log(message); // Клиент с таким именем есть в базе данных!
