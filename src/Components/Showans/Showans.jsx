import React, { useContext, useState } from 'react';
import './Showans.css';
import { context } from '../../Context/Context';
import { SiGooglegemini } from 'react-icons/si';
import ReactLoading from 'react-loading';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopy } from "react-icons/io5";
export default function Showans() {
  const [copy, setCopy] = useState({
    value: '',
    copied: false,
  });

  const { newdata, recentpromt, show, loding } = useContext(context);

  
  const handleCopyText = () => {
    const textToCopy = newdata || ''; 
    setCopy({ value: textToCopy, copied: false });
  };

  return (
    <>
      <div className="box"> 
        {
          !show
           ? 
           <CopyToClipboard
           text={copy.value}
           onCopy={() => setCopy({ ...copy, copied: true })}
         >
           <button onClick={handleCopyText} className='copy-button'><IoCopy style={{color:"white"}}/></button>
         </CopyToClipboard>
         : ' '
        }
   

        {copy.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}

        {show ? (
          <h1 className="text-danger m-auto">Hello, Dev</h1>
        ) : (
          <>
            <div className="user-text d-flex">
              <p className="text-light">{recentpromt}</p>
            </div>
            {loding ? (
              <ReactLoading
                type={'bubbles'}
                color={'white'}
                height={100}
                width={100}
                className="loding"
              />
            ) : (
              <p className="text-light p-3 result-data">
                <SiGooglegemini className="dropdown-icon" />
                &nbsp;&nbsp;
                {newdata}
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}
