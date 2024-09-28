// create pix donate qrcode component using react jsx. qrcode is in public/images/pix.png
import React from 'react';


const Pix = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="text-2xl font-bold mb-4">Pix Donate</h3>
      <img src='../images/pix.png' alt="pix" width="100" height="100" className="rounded shadow-lg"/>
    </div>
  );
}

export default Pix;