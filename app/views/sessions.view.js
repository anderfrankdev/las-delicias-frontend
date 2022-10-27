const signupForm = `
  <h1 class="">Sign up for an account</h1>
  <form action="">
    <div class="input-container">
      <label for="fullname">Full Name</label>
      <input type="text" id="fullname">
    </div>
    <div class="input-container">
      <label for="email">Email</label>
      <input type="text" id="email">
    </div>
    <div class="input-container">
      <label for="password">Password</label>
      <input type="text" id="password">
    </div>
    <div class="sign-options"><a href="">Forgot your password?</a><a href="#signin">Have an account?</a></div>
    <input type="submit" value="Sign up" id="signup">
  </form>
`

const signinForm = `
  <h1 class="">Sign in to your account</h1>
  <form action="">
    <div class="input-container">
      <label for="email">Email</label>
      <input type="text" id="email">
    </div>
    <div class="input-container">
      <label for="password">Password</label>
      <input type="text" id="password">
    </div>
    <div class="sign-options"><a href="">Forgot your password?</a><a href="#signup">Need an account?</a></div>
    <input type="submit" value="Sign in" id="signin">
  </form>
`

const signView =(type)=>{

  return {
  
    html:`
      <div class="main">
        <div class="logo">
          <img src="/logo-bar.png" alt="">
        </div>
        <div class="form-container">
          ${ type === "signup" ? signupForm
              : type === "signin" ?  signinForm 
                : ""}
        </div>
        
        <footer class="footer">
          <p class="policy-msg">By signing up you agree to our terms of service and privacy policy.</p>
        </footer>
        
      </div>
      <div class="presentation"></div>

    `,
    
    css:`
      #app{
        display: grid;
        grid-template-columns: 1fr 0fr;
        grid-template-rows: 1fr;
        width: 100%;
        height: 100vh;
        font-family: sans-serif;
      }

      .main{
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
      }

      .logo{
        width: 100%;
        height: fit-content;
      }

      .logo > img{
        width: 180px;
      }

      .input-container{
        display: flex;
        flex-direction: column;
        margin-block: 1rem;
      }

      .sign-options{
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        flex-direction:column;
      }

      .sign-options > a {
        text-decoration: none;
        font-weight: bolder;
        color: #478223;
        margin-top:0.6rem;
      }

      label{
        margin-bottom: 0.5rem;
      }

      h1{
        margin-bottom: 3rem;
        text-align: center;
        color: #b24301;
      }

      input{
        width: 100%;
        height: 3rem;
        border-radius: 9px;
        border: 1px solid #aaa;
        font-size: 1.3rem;
      }

      input[type=submit]{
        margin-top: 2rem;
        color: white;
        font-weight: bolder;
        background-color: #69b550;
        border:none;
      }

      .form-container{
        width: 83%;
      }

      .policy-msg{
        font-size: 0.8rem;
        color: #333;
        text-align:center;
      }

      .presentation{
        background-image: url("/bread.jpg");
        background-size: cover;
      }

      @media (min-width: 40em){
        #app{
          grid-template-columns: 3fr 2fr;
        }
        .form-container{
          width: 70%;
        }
        .main{
          padding-top: 3rem;
          padding-bottom: 2rem;
        }
      }

    `
  }
} 

export default signView 