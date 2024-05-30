import React from 'react'
import { useState, useEffect } from 'react'

//Importar CSS das Categorias
import './css/PriceSlider.css';

export default function PriceSlider(props) {

  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);
  const [left, setLeft] = useState('0%');
  const [right, setRight] = useState('0%');

  function changeRangeMin(e) {
    setMin(parseInt(e.target.value));
    if (min == props.min) {
      setLeft("0%");
    } else {
      var totalBarra = props.max - props.min;
      var qtsSteps = min - props.min;

      setLeft(((qtsSteps * 100) / totalBarra) + "%");
    }
  }

  function changeRangeMax(e) {
    setMax(parseInt(e.target.value));
    if (max == props.max) {
      setRight("0%");
    } else {
      var totalBarra = props.max - props.min;
      var qtsSteps = props.max - max;

      setRight(((qtsSteps * 100) / totalBarra) + "%");
    }
  }

  useEffect(() => {
    if (min == props.min) {
      document.getElementById('inputMin').value = props.min;
    } else {
      document.getElementById('inputMin').value = min;
    }
  }, [min]);

  useEffect(() => {
    if (max == props.max) {
      document.getElementById('inputMax').value = props.max + "+";
    } else {
      document.getElementById('inputMax').value = max;
    }
  }, [max]);

  return (
    <div>
      <div className='slider'>
        <div style={{ left: left, right: right }} className='progress'></div>
      </div>
      <div className='range-input'>
        <input id='rangeMin' onChange={changeRangeMin} type="range" min={props.min} max={props.max} value={min} step={props.step} />
        <input id='rangeMax' onChange={changeRangeMax} type="range" min={props.min} max={props.max} value={max} step={props.step} />
      </div>
      <div className='row mt-4'>
        <div className='col'>
          <label className='text-muted'>preço mínimo</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">R$</span>
            <input id="inputMin" type="text" class="form-control" placeholder="Min" />
          </div>
        </div>

        <div className='col'>
          <label className='text-muted'>preço máximo</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">R$</span>
            <input id="inputMax" type="text" class="form-control" placeholder="Max" />
          </div>
        </div>
      </div>
    </div>

  )
}
