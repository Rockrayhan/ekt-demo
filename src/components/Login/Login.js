import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';


const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || '/' ;


  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError ;

  if (error || gError) {
    signInError= <p> {error?.message || gError?.message}  </p>
  }

  if ( loading || gLoading ) {
    return <Loading></Loading>;
  }


  if (user|| gUser) {
    console.log(user|| gUser);
  }


  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email , data.password) ;
    navigate (from, {replace: true}) ;

  };

  



  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: 'whitesmoke' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: 'rgba(255, 228, 196, 0.651)' }} >
                <div className="card-body p-5 text-center">

                  <h3 className="mb-5">Log in with EKT</h3>

<form onSubmit={handleSubmit(onSubmit)}>

  <div className="form-outline mb-4">

    <input type="email"
    placeholder='Your Email'
      className="form-control form-control-lg"
      {...register("email", {
        required: {
          value: true,
          message: 'Email is requiered'
        },
        pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'Provide a valid Email'
        }

      })}
    />

    
    <label className="label">

      {errors.email?.type === 'required' && <p className='text-danger fw-bold'> {errors.email.message} </p>}
      {errors.email?.type === 'pattern' && <p className='text-danger fw-bold'> {errors.email.message} </p>}

    </label>
  </div>


  <div className="form-outline mb-4">

    <input type="password"
    placeholder='Your password'
      className="form-control form-control-lg"
      {...register("password", {
        required: {
          value: true,
          message: 'Password is requiered'
        },
        minLength: {
          value: 6,
          message: 'Must Be 6 Character or Longer'
        }

      })}
    />

    
    <label className="label">

      {errors.password?.type === 'required' && <p className='text-danger fw-bold'> {errors.password.message} </p>}
      {errors.password?.type === 'minLength' && <p className='text-danger fw-bold'> {errors.password.message} </p>}

    </label>
  </div>



     <small className='text-danger fw-bold'>  {signInError} </small>
  <input className='btn btn-primary p-3 fs-5 fw-bold' type="submit" value='Login' />
</form>




                  {/*   <div classNameName="form-check d-flex justify-content-start mb-4">
                     <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label> 
                  </div>  */}








                  <hr classNameName='my-4' />

                  <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }}
                    type="submit"
                    onClick={() => signInWithGoogle()}
                  ><i className="fab fa-google me-2"></i> Sign in with google</button>
                  {/*  <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor :'#3b5998'}}
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button> */}

                  <h6 className='mt-3'>
                    <Link to='/signup'> New user ? Create an Account </Link>
                  </h6>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;