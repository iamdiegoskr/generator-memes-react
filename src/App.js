import html2canvas from 'html2canvas';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [image, setimage] = useState('fire');

  const onChangeLine1 = (event)=>{
    setlinea1(event.target.value)
  }

  const onChangeLine2 = (event)=>{
    setlinea2(event.target.value)
  }

  const onChangeImage = (event)=>{
    setimage(event.target.value)
  }

  const onClickExporter = (event)=>{
      html2canvas(document.querySelector("#meme")).then(canvas => {

        let img = canvas.toDataURL("image/png");

        let link = document.createElement('a');
        link.download = 'meme.png';
        link.href = img;
        link.click();

    });

    setlinea1('');
    setlinea2('');
  }

  return (
    <div className="App">


      <div className="generate-memes">
        <select onChange={onChangeImage}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History channel</option>
          <option value="matrix">Matriz</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Chico que piensa</option>
        </select>

        <input
          type="text"
          placeholder="Linea 1"
          onChange={onChangeLine1}
          value={linea1}
          />

        <input
          type="text"
          placeholder="Linea 2"
          onChange={onChangeLine2}
          value={linea2}
          />

        <button className="btn-export-meme" onClick={onClickExporter} >Exportar</button>
      </div>


      <div className="meme-container" id="meme">
        <p className="line1">{linea1}</p>
        <p className="line2">{linea2}</p>

        <img className="image-meme" src={"/img/" + image + ".jpg"}/>

      </div>

    </div>
  );
}

export default App;
