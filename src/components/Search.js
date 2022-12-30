import React, { useState, useEffect } from 'react';
import History from './History';

const Search = ({ location }) => {
  // useState hooks for input and language
  const [language, setLanguage] = useState('');
  const [input, setInput] = useState('');

  // equivalent to componentDidMount, fires once when component mounts
  useEffect(() => {
    // get all the URLParams
    const params = new URLSearchParams(location.search);
    // get the q param
    const q = params.get('q');
    // set language in state to the q parameter
    setLanguage(q ? q : 'Himanshu');
    //eslint-disable-next-line
  }, []);

  // function for handling form submit
  const submitAction = (e) => {
    // prevents default, so page won't reload on form submit
    e.preventDefault();
    // set language in state
    setLanguage(input);
    // add query string to URL
    History.push('/name?q=' + input);
    var url = 'https://wa.me/?text=Wishing you a very Happy New Year. Have a look!..... https://himanshu-vishwas.github.io/ny2023/user/'+input;
    var win = window.open(url,'_blank');
    win.focus();
    // clear the input
    setInput('');
  };

  return (
    <>
      <div className='bg-dark text-light'>
        <div className='container pt-5' style={{ height: '100vh' }}>
          
          <h1>{language} wishes you a very happy new year.</h1>
          <p>
            <span className='text-info'>{language} </span>wishes you a very happy new year.
          </p>

          <form onSubmit={submitAction} className='mt-5'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className='input-group-append'>
                <button className='btn btn-primary' type='submit'>
                  Send wishes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
