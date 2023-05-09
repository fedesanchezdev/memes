import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import html2canvas from 'html2canvas';

const Imgmeme = () => {

    const [text, setText] = useState();
    const [img, setImg] = useState();

    const userText = (e) => {

        setText(e.target.value);

    }

    const userImg = (e) => {

        setImg(e.target.value);

    }

    const descarga = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function(canvas) {
            let img = canvas.toDataURL("memesimg/jpg");
            let link = document.createElement("a");
            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        }); 
    }

    return(
        <div>
            <h1 className = 'mt-5 mb-3 text-light'>Edita tu propio meme</h1>
            <h2 className = 'mt-2 mb-3' >Escribe tu texto</h2>
            <input onChange={userText} className = 'form-control w-25 m-auto d-block' type='text' placeholder='Poné tu frase' name = 'meme' />

            <h2 className = 'mt-2 mb-3' >Elige la imagen para tu meme</h2>
                <select onChange={userImg} className='form-select form-select-lg mb-3 w-50 m-auto' aria-label='Default select example'>
                    <option value={6}>One</option>
                    <option value={7}>Two</option>
                    <option value={8}>Three</option>
                    <option value={9}>Four</option>
                </select>

            <figure className='text-center' id='exportar'>
                <p className='mt-5 w-100 px-30 position-absolute top-50 start-30 h1 text-center'>{text}</p>
                <img src={`./memesimg/${img}.jpg`} className='figure-img mt-3 d-block m-auto' alt='meme' />


            </figure>

            <button onClick={descarga} type='button' className='btn btn-primary mt-5 mb-4'>Descargar meme</button>
     
        </div>

    )
}

export default Imgmeme;