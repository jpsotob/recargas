import React from 'react'

const companies = [
  {name: "Telcel", img: "http://trfs.me/i/V1yiSSmh-.jpg"},
  {name: "Movistar", img: 'http://trfs.me/i/N1tdBr7hW.jpg'},
  {name: "AT&T", img: "http://trfs.me/i/EkTtSS72W.png"},
  {img: "http://trfs.me/i/NyEErBXhb.png", name: "Unefon"},
];

export default ({ company, amount, number, name, validation, updateAmount, loading, selectCompany, submitRecharge, updateNumber, updateValidation }) => {
  console.log("XDDDDDDDDDDDDDD")
  const company_components = companies.map((companyName, idx) => (
    <div key={ idx }>
    <img src={companyName.img} onClick={ () => selectCompany(idx) } style={{border: "3px solid", borderColor: company === idx ? 'green' : 'grey', width: "auto", height: "50px"}} htmlFor={idx}alt={ companyName.name } />
    </div>
  ));

  const submitDisabled = loading
    || !number
    || number !== validation
    || amount <= 0

  console.log(number === validation)

  return (
    <form className="container" style={{width: "500px"}}>
      <h1>Oxxo {name}</h1>

      <div style={{display: "flex", alignItems: "center"}}>
        { company_components }
      </div>
      <label className="control-label">Monto</label>
      <div className={`${amount <= 0? 'has-error' : ''}`}>
      <input onChange={(e) => updateAmount(e.target.value)} className='form-control' type="text" value={amount} disabled={loading} />
      </div>
      <div className={`${validation && number !== validation? 'has-error' : ''}`}>
      <label className="control-label">Numero</label>
      <input onChange={(e) => updateNumber(e.target.value)} type="text" className='form-control' value={number} disabled={loading} />
      <label className="control-label">Confirmar numero</label>
      <input onChange={(e) => updateValidation(e.target.value)} className='form-control' type="text" value={validation} disabled={loading} />
      </div>
      <div className="row alert alert-danger"
           role="alert"
           style={{display: validation && number !== validation ? 'block' : 'none'}}
           onClick={() => dismissLoginError()}
      >
        "El numero y la validacion no coinciden"
      </div>
      <input style={{width:"100%", marginTop:"10px"}} type="submit" className={`btn btn-primary ${submitDisabled ? 'disabled' : ''}`} onClick={() => submitRecharge()} disabled={submitDisabled} value="Recargar"/>
    </form>
  )
}
