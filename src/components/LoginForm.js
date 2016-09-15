import React from 'react'

export default ({code, loginUser, updateTokenField, error, dismissLoginError, loading}) => (
  <div className="container">
    <div className="row alert alert-danger"
         role="alert"
         style={{display: error ? 'block' : 'none'}}
         onClick={() => dismissLoginError()}
    >
      { error }
    </div>
    <div className="row"><label>Clave de ingreso</label></div>
    <div className="row"><input onChange={(e) => updateTokenField(e.target.value)} type="text" value={code} disabled={loading} /></div>
    <div className="row">
      <button className={`btn btn-primary ${code ? '' : 'disabled'}`} onClick={() => loginUser(code)} disabled={loading || code.length < 1}>Entrar</button>
    </div>
  </div>
)
