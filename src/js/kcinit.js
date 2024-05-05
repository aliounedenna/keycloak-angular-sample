window.addEventListener('load', function () {
    console.log('Hello!')
    
  window.keycloak = new Keycloak({
    url: 'http://localhost:5776/',
    realm: 'camelsolutions',
    clientId: 'frontEnd',
    
  });
  
  keycloak.init(
        {
            onLoad: 'login-required', 
            checkLoginIframe: false,
          }
    ).then(authenticated => {
      console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
      console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
      console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
      console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
      console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
    }).catch(error => {
      console.error('Failed to initialize adapter:', error);
    })
  
  })