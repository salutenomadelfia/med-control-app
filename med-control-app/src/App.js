import React, { useState } from 'react';
import './App.css';

function App() {
  const [meds, setMeds] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    mg: '',
    tipo: 'Compresse',
    dossio: '',
    scadenza: '',
    scaffale: '',
    scatole: ''
  });

  const tipi = ['Compresse', 'Gocce', 'Sciroppo', 'Crema', 'Altra'];

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMeds([...meds, form]);
    setForm({
      nome: '',
      mg: '',
      tipo: 'Compresse',
      dossio: '',
      scadenza: '',
      scaffale: '',
      scatole: ''
    });
  };

  return (
    <div className="container">
      <h1>Controllo dei Farmaci</h1>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome farmaco / principio attivo" value={form.nome} onChange={handleChange} required />
        <input name="mg" type="number" placeholder="Numero di mg" value={form.mg} onChange={handleChange} required />
        <select name="tipo" value={form.tipo} onChange={handleChange}>
          {tipi.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <input name="dossio" placeholder="Dossio" value={form.dossio} onChange={handleChange} required />
        <input name="scadenza" type="date" value={form.scadenza} onChange={handleChange} required />
        <input name="scaffale" placeholder="Numero di scaffale" value={form.scaffale} onChange={handleChange} required />
        <input name="scatole" type="number" placeholder="Totale scatole" value={form.scatole} onChange={handleChange} required />
        <button type="submit">Aggiungi</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th><th>mg</th><th>Tipo</th><th>Dossio</th><th>Scadenza</th><th>Scaffale</th><th>Scatole</th>
          </tr>
        </thead>
        <tbody>
          {meds.map((m, i) => (
            <tr key={i}>
              <td>{m.nome}</td>
              <td>{m.mg}</td>
              <td>{m.tipo}</td>
              <td>{m.dossio}</td>
              <td>{m.scadenza}</td>
              <td>{m.scaffale}</td>
              <td>{m.scatole}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
