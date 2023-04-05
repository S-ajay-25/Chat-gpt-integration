// // import React, { useState } from "react";
// // import ComputerVision from "./AzureCogitiveService";



// // function ImageForm() {
// //   const [imageUrl, setImageUrl] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     window.open(`${imageUrl}`);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="form">
// //       <label htmlFor="imageUrl">Image URL:</label>
// //       <input
// //         className="input-field"
// //         type="url"
// //         id="imageUrl"
// //         value={imageUrl}
// //         onChange={(e) => setImageUrl(e.target.value)}
// //         placeholder="Enter the Image URL"
// //       />
// //       <button type="submit" className="btn" onClick={<ComputerVision imageUrl = {imageUrl} />}>
// //         Submit
// //       </button>
// //     </form>
// //   );
// // }

// // export default ImageForm;



// // import React, { useState, useEffect } from 'react';
// // import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
// // import { ApiKeyCredentials } from '@azure/ms-rest-js';

// // const apiKey = '6f94d5eb596a46bdbbf39a7f4850c941';
// // const client = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': apiKey } }), "https://centralindia.api.cognitive.microsoft.com/");

// // const Apps = () => {
// //   const [userinfo, setUserInfo] = useState([]
// //     // clickedtag:[],
// //     // response: [],
// //   );
// //   const [imageUrl, setImageUrl] = useState('');
// //   const [tags, setTags] = useState([]);

// //   const handleImageUrlChange = (event) => {
// //     setImageUrl(event.target.value);
// //     // event.preventDefault();
// //     // window.open(`${imageUrl}`)

// //   };
// //   const handlechange = (e) => {
// //     const value = e.target.value;
// //     const checked = e.target.checked;
// //     // const {clickedtag} =userinfo;
// //     // console.log(value);
  
// //   if(checked){
// //     // setUserInfo({
// //     //   clickedtag:[...clickedtag,value],
// //     //   // response: [...clickedtag, value],
// //     // });
// //     setUserInfo([...userinfo,value])
// //   }
// //   else {
// //     // setUserInfo({
// //     //   clickedtag: clickedtag.filter((e) => e !== value),
// //     //   // response: clickedtag.filter((e) => e !== value),
// //     // });
// //     setUserInfo(userinfo.filter((e) => e !== value));
// //   }
// // };
// // useEffect(() => {
// //   console.log(userinfo);
// // }, [userinfo]);
// //   const analyzeImageTags = async () => {
// //     try {
// //       const { tags } = await client.tagImage(imageUrl);
// //       console.log('Tags:', tags);
// //       setTags(tags.map(tag => tag.name));
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* <form onSubmit={handleImageUrlChange}> */}
// //       <div className='form'>
// //       <label className='label-tag' htmlFor="imageUrl">
// //         Image URL:  </label>
// //         <input type="url" id = "imageUrl" value={imageUrl} 
// //         // onChange={(e) => setImageUrl(e.target.value)} 
// //         onChange = {handleImageUrlChange}
        
// //         className='input-field'/>
        
     
// //       <button onClick={analyzeImageTags} className='btn'>Analyze Tags</button>
// //       {imageUrl && <img src={imageUrl} alt="Image" />}
// //       <div className='tag'>
// //        {/* <input type='checkbox'  */}
// //         {tags.map(tag => (
          
// //           <div key = {tag}>  <input type='checkbox' value={tag} onChange={handlechange} /> {tag} </div>
// //         ))} 
// //         <button>Get More</button>
        
// //       </div>
// //       </div>
// //       {/* </form> */}
// //     </div>
// //   );
// // };

// // export default Apps;



// import React, { useState, useEffect } from 'react';
// import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
// import { ApiKeyCredentials } from '@azure/ms-rest-js';
// import { Configuration, OpenAIApi } from "openai";

// const apiKey = '6f94d5eb596a46bdbbf39a7f4850c941';
// const client = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': apiKey } }), "https://centralindia.api.cognitive.microsoft.com/");

// const configuration = new Configuration({
//   // organization: "org-KlEk9KIk1kL5rJD4lf7fs06K",
//   apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);


// const Apps = () => {
//   const [userinfo, setUserInfo] = useState([]);
//   const [imageUrl, setImageUrl] = useState('');
//   const [tags, setTags] = useState([]);
//   const [chatGptResponse,setChatGPTResponse] = useState('')
  

//   const handleImageUrlChange = (event) => {
//     setImageUrl(event.target.value);
//   };

//   const handlechange = (e) => {
//     const value = e.target.value;
//     const checked = e.target.checked;
  
//     if(checked){
//       setUserInfo([...userinfo,value])
//     }
//     else {
//       setUserInfo(userinfo.filter((e) => e != value));
//     }
//   };

//   useEffect(() => {
//     console.log(userinfo);
//   }, [userinfo]);

//   const analyzeImageTags = async () => {
//     try {
//       const { tags } = await client.tagImage(imageUrl);
//       console.log('Tags:', tags);
//       setTags(tags.map(tag => tag.name));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getEngines = async () => {
   
//     // console.log(userinfo.join(', '));
//       const response = await openai.createCompletion({
//         model: process.env.REACT_APP_openAI_modelEngine,
//         prompt:`get me the synonyms of "${userinfo.toString()}"`,
//         max_tokens:1024,
//         temperature:0,
//       });
//       console.log(response);
//       console.log(response.data.choices[0].text);
   
//   };
//   // const getSynonyms = async () => {
//   //       try {
//   //         const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//   //           method: 'POST',
//   //           headers: {
//   //             'Content-Type': 'application/json',
//   //             'Authorization': `Bearer ${configuration.apiKey}`,
//   //           },
//   //           body: JSON.stringify({
//   //             prompt: `Get me the synonyms of ${userinfo}`,
//   //             max_tokens: 10,
//   //           })
//   //         });
//   //         const data = await response.json();
//   //         console.log(data);
//   //         if (data.choices && data.choices.length > 0) {
//   //           setChatGPTResponse(data.choices[0].text);
//   //         } else {
//   //           setChatGPTResponse('No synonyms found');
//   //         }
//   //       } catch (error) {
//   //         console.error(error);
//   //       }
//   //     };
//   return (
//     <div>
//       <div className='form'>
//         <label className='label-tag' htmlFor="imageUrl">
//           Image URL:  
//         </label>
//         <input type="url" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} className='input-field'/>
//         <button onClick={analyzeImageTags} className='btn'>Analyze Tags</button>
//         {imageUrl && <img src={imageUrl} alt="Images" />}
//         <div className='tag'>
//           {tags.map(tag => (
//             <div key={tag}>
//               <input type='checkbox' value={tag} onChange={handlechange} /> {tag} 
//             </div>
//           ))}
//           <button onClick={getEngines}>Get More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Apps;









import React, { useState, useEffect } from 'react';
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';
import { Configuration, OpenAIApi } from "openai";

const apiKey = '6f94d5eb596a46bdbbf39a7f4850c941';
const client = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': apiKey } }), "https://centralindia.api.cognitive.microsoft.com/");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const Apps = () => {
  const [userinfo, setUserInfo] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [tags, setTags] = useState([]);
  const [chatGptResponse,setChatGPTResponse] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handlechange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if(checked){
      setUserInfo([...userinfo,value])
    }
    else {
      setUserInfo(userinfo.filter((e) => e !== value));
    }
  };

  useEffect(() => {
    console.log(userinfo);
  }, [userinfo]);

  const analyzeImageTags = async () => {
    try {
      const { tags } = await client.tagImage(imageUrl);
      console.log('Tags:', tags);
      setTags(tags.map(tag => tag.name));
    } catch (error) {
      console.error(error);
    }
  };

  const getEngines = async () => {
    console.log("Ajay Madhav")
    try {
      const response = await openai.createCompletion({
        model: process.env.REACT_APP_openAI_modelEngine,
        prompt: `get me the synonyms of "${userinfo}"`,
        max_tokens: 1024,
        temperature: 0,
      });
      console.log(response);
      console.log(response.data.choices[0].text);
     
    } catch (error) {
      console.error(error);
      
    }
  };
  

  return (
    <div>
      <div className='form'>
        <label className='label-tag' htmlFor="imageUrl">
          Image URL:  
        </label>
        <input type="url" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} className='input-field'/>
        <button onClick={analyzeImageTags} className='btn'>Analyze Tags</button>
        {imageUrl && <img src={imageUrl} alt="Images" />}
        <div className='tag'>
          {tags.map(tag => (
            <div key={tag}>
              <input type='checkbox' value={tag} onChange={handlechange} /> {tag} 
            </div>
          ))}
          <button onClick={getEngines}>Get More</button>
         
        </div>
      </div>
    </div>
  );
};

export default Apps;

