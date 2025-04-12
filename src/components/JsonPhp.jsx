import React from 'react'
import { useEffect } from 'react'
function JsonPhp() {



    useEffect(() => {
        fetch('http://localhost/data/math.php')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
      }, []);
      

  return (
    <div>JsonPhp</div>
  )
}

export default JsonPhp