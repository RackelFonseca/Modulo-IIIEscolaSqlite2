
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('escola.sqlite');

db.serialize(() => {
  /*
  db.run(`CREATE TABLE aluno (
    matricula INTEGER PRIMARY KEY,
    nome VARCHAR(60),
    email VARCHAR(40),
    cidade VARCHAR(60)
  )`);

  db.run(`INSERT INTO aluno (matricula, nome, email, cidade) VALUES
    (01, 'Katiane', 'katiane@hotmail.com', 'Rio de Janeiro'),
    (02, 'Paulo', 'paulo@hotmail.com', 'Maceió'),
    (03, 'Marcelo', 'marcelo@gmail.com', 'Belo Horizonte')
  `);
*/
  db.all(`SELECT matricula, nome FROM aluno`, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(`${row.matricula} - ${row.nome}`);
    });
  });
});

db.close();