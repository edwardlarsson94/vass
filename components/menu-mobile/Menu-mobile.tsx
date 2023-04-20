import React from 'react';

export default function MenuMobil() {
  return (
      <div>
     <div >
          <a href="#">EN</a>
          <span>/</span>
          <a href="#">SP</a>
        </div>
        <ul >
            <li><a href="">HOME</a></li>
          <li><a href="#">CASOS DE EXITO</a></li>
          <li>
            <select>
            <option value="">MERCADOS</option>
            <option value="mercado1">Mercado 1</option>
            <option value="mercado2">Mercado 2</option>
            <option value="mercado3">Mercado 3</option>
          </select>
          </li>
          <li >
            <select>
            <option value="">COMO LO HACEMOS</option>
            <option value="mercado1"> 1</option>
            <option value="mercado2"> 2</option>
            <option value="mercado3"> 3</option>
          </select>
          </li>
          <li >
            <select>
            <option value="">SOMOS VASS</option>
            <option value="mercado1"> 1</option>
            <option value="mercado2"> 2</option>
            <option value="mercado3"> 3</option>
          </select>
          </li>
          <li><a href="#">INSIGHTS</a></li>
          <li><a href="#">CONTACTO</a></li>
          <li><a href="#">VASS RESEARCH</a></li>
          <li><a href="#">TALENTO</a></li>

        </ul>
      </div>
  );
}