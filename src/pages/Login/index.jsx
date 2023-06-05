import React, { useState, createRef, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../UserContext';
import { getUser } from '../../graphql/queries';

const Login = () => {
  const generateRandomNumber = () => Math.floor(1000 + Math.random() * 9000);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [code, setCode] = useState(Array(6).fill(''));
  const codeRefs = Array(6).fill().map(() => createRef());
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    try {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const user = await Auth.signIn(email, password);
      console.log("user signed in", user);
  
      // fetch the user data from your backend
      const result = await API.graphql(
        graphqlOperation(getUser, { id: user.signInUserSession.idToken.payload.sub })
      );
      const actualUser = result.data.getUser;
      
      // Update the user state in your context
      setUser({
        ...actualUser
      });
      
  
      navigate(`/designLibrary/${actualUser.username}`);
    } catch (error) {
      console.log('error signing in', error);
      setErrorMessage(`Error signing in: ${error.message}`);
    }
}

  
const handleSignUp = async (event) => {
  event.preventDefault();
  setErrorMessage(null);
    try {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;

      setEmail(email);
      setFirstName(firstName);
      setLastName(lastName);
      setPassword(password)
    await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      });
      setIsConfirming(true);
    } catch (error) {
      console.log('error signing up:', error);
      setErrorMessage(`Error signing up: ${error.message}`);
    }
  };
  const handleConfirmation = async (event) => {
    event.preventDefault();
    try {
      const username = email;
      const confirmationCode = code.join('');
      await Auth.confirmSignUp(username, confirmationCode);
      const authenticatedUser = await Auth.signIn(username, password);
      console.log("Authenticated user is", authenticatedUser);
  
      // Generate a username and profileUrl
      const newUsername = `${firstName}_${lastName}${generateRandomNumber()}`;
      const profileUrl = `/@${newUsername}`;
  
      // Mutation query to add user in your backend
      const addUserMutation = `
        mutation AddUser($input: CreateUserInput!) {
          createUser(input: $input) {
            id
            username
            profileUrl
          }
        }
      `;
  
      // Call the GraphQL API
      await API.graphql(
        graphqlOperation(addUserMutation, {
          input: {
            id: authenticatedUser.signInUserSession.idToken.payload.sub,
            firstName,
            lastName,
            username: newUsername,
            email,
            profileUrl,
          },
        })
      );
  
      navigate(`/designLibrary/${newUsername}`);
    } catch (error) {
      console.log('error confirming sign up', error);
      setErrorMessage(`Error confirming sign up: ${error.message}`);
    }
  };

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password, firstName, lastName]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
         <h1 className="text-center text-4xl">👗 mira.</h1>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {isSignUp ? (isConfirming ? 'Confirm your account' : 'Sign up for an account') : 'Sign in to your account'}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              {isConfirming ? (
                <>
                  <p>Please check {email} to confirm your account</p>
                  <div>
                    <label htmlFor="confirmationCode" className="block text-sm font-medium leading-6 text-gray-900">
                      Confirmation Code
                    </label>
                    <div className="mt-2 flex justify-between">
                      {code.map((_, i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength="1"
                          value={code[i]}
                          onChange={(e) => {
                            setCode([...code.slice(0, i), e.target.value, ...code.slice(i + 1)]);
                            if (e.target.value && codeRefs[i + 1]) {
                              codeRefs[i + 1].current.focus();
                            }
                          }}
                          ref={codeRefs[i]}
                          className="block w-10 rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-insetring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {isSignUp ? (
                    <div className="flex  justify-between">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                          First Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                          Last Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                
                </>
              )}

              <div>
                {errorMessage && (
                  <div className="text-red-500 text-center p-4">{errorMessage}</div>
                )}
                <button
                  type="submit"
                  onClick={(event) => {
                    if (isSignUp) {
                      if (isConfirming) {
                        handleConfirmation(event);
                      } else {
                        handleSignUp(event);
                      }
                    } else {
                      handleLogin(event);
                    }
                  }}
                  className="flex w-full justify-center btn px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isSignUp ? (isConfirming ? 'Confirm' : 'Sign up') : 'Sign in'}
                </button>
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            {isSignUp ? 'Already a member?' : 'Not a member?'}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-semibold leading-6 text-black hover:underline"
            >
              {isSignUp ? 'Click here to Sign in' : 'Click here to Sign up'}
            </button>
          </p>
        </div>
      </div>
    </>
  )
}
export default Login;
