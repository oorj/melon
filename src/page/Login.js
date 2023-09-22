import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <div className="id">
        <from>
          <input type="text" placeholder='아이디를 입력해주세요.' />
        </from>
      </div>
      <div className="pass">
        <from>
          <input type="text" placeholder='비밀번호를 입력해주세요.' />
        </from>
      </div>
      <button>로그인</button>
    </div>
  )
}

export default Login
