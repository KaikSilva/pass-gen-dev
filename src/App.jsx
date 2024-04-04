import { useRef, useState } from 'react';
import PassGen from './components/PassGen';
import { FiRefreshCcw, FiCopy } from "react-icons/fi";

function App() {
  const formRef = useRef(null);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [rangeValue, setRangeValue] = useState(8);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const inputRef = useRef(null);

  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand('copy');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      lowercase: formRef.current.lowercase.checked,
      uppercase: formRef.current.uppercase.checked,
      numbers: true, // Sempre incluir números
      specialChars: formRef.current.specialChars.checked,
      length: formRef.current.length.value // Obter comprimento da senha do campo de entrada
    };

    const password = PassGen(options);
    setGeneratedPassword(password);
  }

  return (
    <>
        <div className="container app">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="w-100 d-flex justify-content-center mb-4">
                  <h1 className="displayResultWords">
                    Gerador de Senhas
                  </h1>
                </div>


                <div className='field-input-generated position-relative d-flex'>
                  <div className='col-sm-12'>
                    <input ref={inputRef} className='field-input-generated__input' type="text" name="pass-generated" value={generatedPassword} />
                  </div>
                  <div className='position-absolute list-actions'>
                    <button className='bg-transparent border-0 list-actions__button' type='submit'><FiRefreshCcw size={22}/></button>
                    <button onClick={handleCopy} className='bg-transparent border-0 list-actions__button' type='button'><FiCopy size={22} /></button>
                  </div>
                </div>




                  <div className="list-options mt-4">
                    <label style={{fontWeight: 500}}>
                      <input className='form-check-input' type="checkbox" name="lowercase" id="lowercase" /> Letras Minúsculas
                    </label>
                    <label style={{fontWeight: 500}}>
                      <input className='form-check-input' type="checkbox" name="uppercase" id="uppercase" /> Letras Maiúsculas
                    </label>
                    <label style={{fontWeight: 500}}>
                      <input className='form-check-input' type="checkbox" name="specialChars" id="specialChars" /> Caracteres Especiais
                    </label>
                  </div>


                  <div className="mt-3">
                    <div className="row d-flex align-items-center">
                      <div className="col-sm-3">
                        <input
                          type="number"
                          name="length"
                          id="length"
                          value={rangeValue}
                          readOnly
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-9">
                        <input
                          type="range"
                          min="1"
                          max="35"
                          value={rangeValue}
                          onChange={handleRangeChange}
                          className="form-range"
                        />
                      </div>
                    </div>
                  </div>
              </form>
          </div>
    </>
  )
}

export default App;
