import React from 'react'

const ContactForm = () => {
  return (
    <>
      <from className="search">
        <input type="text" placeholder='키워드를 입력해주세요.'/>
        <img src={require('../img/sea.png')} alt= "검색창" />
      </from>
    </>
  )
}

export default ContactForm
