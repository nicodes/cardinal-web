import React from 'react';

const headerHeight = '60px';

function App(): JSX.Element {
  return (
    <div className='App'>
      <header style={{ height: headerHeight }}>Cardinal Token</header>
      <main
        style={{
          height: `calc(100vh - ${headerHeight})`,
          width: '100%',
          overflowY: 'scroll',
          scrollSnapType: `y mandatory`,
        }}
      >
        <div
          style={{
            height: '100%',
            scrollSnapAlign: 'center',
            backgroundImage: `url("https://images.unsplash.com/photo-1620656621654-ba94976cc312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h1 style={{ color: 'white' }}>Cardinal Token</h1>
          <h2 style={{ color: 'white' }}>Cardinals Soar</h2>
        </div>

        <div
          style={{
            height: '100%',
            scrollSnapAlign: 'center',
            backgroundColor: 'orange',
          }}
        >
          SECTION 1
        </div>
        <div
          style={{
            height: '100%',
            scrollSnapAlign: 'center',
            backgroundColor: 'blue',
          }}
        >
          SECTION 2
        </div>
        <div
          style={{
            height: '100%',
            scrollSnapAlign: 'center',
            backgroundColor: 'red',
          }}
        >
          SECTION 3
        </div>
      </main>
    </div>
  );
}

export default App;
