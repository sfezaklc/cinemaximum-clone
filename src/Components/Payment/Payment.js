import React from 'react'
import './Payment.css'
const Payment = () => {
  return (
    <div className='payment-container mt-3'>
      <form>
        <div class="row mb-3">
          <div class="col-4">
            <input type="text" class="form-control" placeholder="Adın, Soyadın" />
          </div>
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Kredi kartı numaran" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <input type="email" class="form-control" placeholder='E-mail' />
          </div>
          <div className='col-6'>
            <div className="row">
              <div className="col-5">
                <input type="text" class="form-control" placeholder='MM/YY' />
              </div>
              <div className="col-5">
                <input type="password" class="form-control" placeholder='Güvenlik numarası' />
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div className="col-4">
            <input type="tel" class="form-control" placeholder='Cep telefonu' />
          </div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Ön Bilgilendirme Koşulları'nı ve <br></br>
            Mesafeli Satış Sözleşmesi'ni okudum, onaylıyorum</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck2" />
          <label class="form-check-label" for="exampleCheck1">SMS ile bilgilendirmek istiyorum</label>
        </div>
        <button type="submit" class="btn btn-dark">Ödeme</button>
      </form>
    </div>
  )
}

export default Payment