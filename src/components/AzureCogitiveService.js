// // import React,{useEffect} from 'react';
// // import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
// // import { CognitiveServicesCredentials } from '@azure/ms-rest-azure-js';
// // function ComputerVision(imageUrl) {
// //    useEffect(() => {
// //     const subscriptionKey ="6f94d5eb596a46bdbbf39a7f4850c941";
// //     const endpoint = "https://centralindia.api.cognitive.microsoft.com/";
// //     const computerVisionClient = new ComputerVisionClient(
// //       new CognitiveServicesCredentials(subscriptionKey),
// //       endpoint
// //     );

// //     async function analyzeImage() {
// //       try {
// //         console.log("-------------------------------------------------");
// //         console.log("DETECT TAGS");
        

// //         const tagsURL = 
// //           "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";
          
        
          

// //         console.log("Analyzing tags in image...", tagsURL.split("/").pop());
// //         const tags = (
// //           await computerVisionClient.analyzeImage(tagsURL, {
// //             visualFeatures: ["Tags"]
// //           })
// //         ).tags;
// //         console.log(`Tags: ${formatTags(tags)}`);

// //         function formatTags(tags) {
// //           return tags
// //             .map((tag) => `${tag.name} (${tag.confidence.toFixed(2)})`)
// //             .join(", ");
// //         }

        
// //         console.log("-------------------------------------------------");
// //         console.log("End of quickstart.");
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     }

// //     analyzeImage();
// //   }, []);

// //   return (
// //     <div>
    
// //     </div>
// //   );
// // }

// // export default ComputerVision;






// // import React, { useState, useEffect } from 'react';
// // import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
// // import { ApiKeyCredentials } from '@azure/ms-rest-js';
// // import { Configuration, OpenAIApi } from "openai";

// // const apiKey = '6f94d5eb596a46bdbbf39a7f4850c941';
// // const client = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': apiKey } }), "https://centralindia.api.cognitive.microsoft.com/");

// // const configuration = new Configuration({
// //   organization: "org-KlEk9KIk1kL5rJD4lf7fs06K",
// //   apiKey: process.env.OPENAI_API_KEY,
// // });
// // const openai = new OpenAIApi(configuration);

// // const Apps = () => {
// //   const [userinfo, setUserInfo] = useState([]);
// //   const [imageUrl, setImageUrl] = useState('');
// //   const [tags, setTags] = useState([]);
// //   const [chatGptResponse, setChatGptResponse] = useState('');

// //   const handleImageUrlChange = (event) => {
// //     setImageUrl(event.target.value);
// //   };

// //   const handlechange = (e) => {
// //     const value = e.target.value;
// //     const checked = e.target.checked;
  
// //     if (checked) {
// //       setUserInfo([...userinfo,value])
// //     } else {
// //       setUserInfo(userinfo.filter((e) => e !== value));
// //     }
// //   };

// //   useEffect(() => {
// //     console.log(userinfo);
// //   }, [userinfo]);

// //   const analyzeImageTags = async () => {
// //     try {
// //       const { tags } = await client.tagImage(imageUrl);
// //       console.log('Tags:', tags);
// //       setTags(tags.map(tag => tag.name));
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleGetMore = async () => {
// //     try {
// //       const response = await fetch('https://your-chatgpt-api-url.com', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({ tags: userinfo })
// //       });
// //       const data = await response.json();
// //       setChatGptResponse(data); // Display the response from the ChatGPT API
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className='form'>
// //         <label className='label-tag' htmlFor="imageUrl">
// //           Image URL:
// //         </label>
// //         <input
// //           type="url"
// //           id="imageUrl"
// //           value={imageUrl}
// //           onChange={handleImageUrlChange}
// //           className='input-field'
// //         />
// //         <button onClick={analyzeImageTags} className='btn'>
// //           Analyze Tags
// //         </button>
// //         {imageUrl && <img src={imageUrl} alt="Image" />}
// //         <div className='tag'>
// //           {tags.map(tag => (
// //             <div key={tag}>
// //               <input
// //                 type='checkbox'
// //                 value={tag}
// //                 onChange={handlechange}
// //               /> {tag}
// //             </div>
// //           ))}
// //           <button onClick={handleGetMore}>Get More</button>
// //           {chatGptResponse && <div>{chatGptResponse}</div>} {/* Placeholder for displaying the response */}
// //         </div>
// //       </div>
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
//   organization: "org-KlEk9KIk1kL5rJD4lf7fs06K",
//   apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);

// const Apps = () => {
//   const [userinfo, setUserInfo] = useState([]);
//   const [imageUrl, setImageUrl] = useState('');
//   const [tags, setTags] = useState([]);

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
//       setUserInfo(userinfo.filter((e) => e !== value));
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
//     try {
//       const response = await openai.createCompletion({
//         prompt: `get me the synonyms of ${userinfo.join(', ')}.`,
//         examples: [[userinfo.join(' '), tags.join(',')]],
//       });
//       console.log(response.data.choices[0].text);
//     } catch (error) {
//       console.error(error);
//     }
//   };
// const getSynonyms = async () => {
//     try {
//       const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${configuration.apiKey}`,
//         },
//         body: JSON.stringify({
//           prompt: `Get me the synonyms of ${userinfo.ToString()}`,
//           max_tokens: 10,
//         })
//       });
//       const data = await response.json();
//       console.log(data);
//       if (data.choices && data.choices.length > 0) {
//         setChatGPTResponse(data.choices[0].text);
//       } else {
//         setChatGPTResponse('No synonyms found');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getSynonyms();
//   };
  
//   return (
//     <div>
//       <div className='form'>
//         <label className='label-tag' htmlFor="imageUrl">
//           Image URL:  
//         </label>
//         <input type="url" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} className='input-field'/>
//         <button onClick={analyzeImageTags} className='btn'>Analyze Tags</button>
//         {imageUrl && <img src={imageUrl} alt="Image" />}
//         <div className='tag'>
//           {tags.map(tag => (
//             <div key={tag}>
//               <input type='checkbox' value={tag} onChange={handlechange} /> {tag} 
//             </div>
//           ))}
//           <button onClick={() => getEngines()}>Get More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Apps;

