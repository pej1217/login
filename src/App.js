import React from 'react';
import BasicTextFields from './login'
import Button from '@material-ui/core/Button';


function App(){
  return(
    <div class="container">  
      <div>
      {BasicTextFields()}
      </div>
      <div>
      <Button ovariant="outlined" color="primary">login
      </Button>  
      </div>
    </div>
  );
}
export default App;