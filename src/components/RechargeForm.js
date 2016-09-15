import React from 'react'

const companies = [
  "Telcel", "Movistar", "AT&T", "Unefon", "Locotel"
];

export default ({ company, amount, number, validation, updateAmount, loading, selectCompany, submitRecharge, updateNumber, updateValidation }) => {
  console.log("XDDDDDDDDDDDDDD")
  const company_components = companies.map((companyName, idx) => (
    <div key={ idx }><input
      type="radio"
      name="company"
      id={ idx }
      value={ idx }
      checked={ company === idx}
      onClick={ () => selectCompany(idx) }
    />
    <label htmlFor={idx}>{ companyName }</label>
    </div>
  ));

  const submitDisabled = loading
    || !number
    || number !== validation
    || amount <= 0

  console.log(number === validation)

  return (
    <div className="container" style={{width: "500px"}}>
      <div>
        { company_components }
      </div>
      <label>Monto</label>
      <div className={`${amount <= 0? 'has-error' : ''}`}>
      <input onChange={(e) => updateAmount(e.target.value)} className='form-control' type="text" value={amount} disabled={loading} />
      </div>
      <div className={`${validation && number !== validation? 'has-error' : ''}`}>
      <label>Numero</label>
      <input onChange={(e) => updateNumber(e.target.value)} type="text" className='form-control' value={number} disabled={loading} />
      <label>Confirmar numero</label>
      <input onChange={(e) => updateValidation(e.target.value)} className='form-control' type="text" value={validation} disabled={loading} />
      </div>
      <button className={`btn btn-primary ${submitDisabled ? 'disabled' : ''}`} onClick={() => submitRecharge()} disabled={submitDisabled}>Recargar</button>
    </div>
  )
}
