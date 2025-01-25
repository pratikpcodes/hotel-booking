

// export const apiSignIn = async(data)=>{
    
//     await fetch("http://localhost:5000/api/users/sign-in", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
  
//         credentials: "include",
//         body: JSON.stringify(data),
//       })
//         .then((response) => {
//           if (!response.ok) throw new Error("Error: " + response.statusText);
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           // Show error message if request fails
//         });

// }


// export const apiRegister = async (data) => {

//   await fetch("http://localhost:5000/api/users/register", { 
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       if (!response.ok) throw new Error("Error: " + response.statusText);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // setSubmit("success");
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       // setSubmit("error"); // Show error message if request fails
//     });

  
// }



export const apiSignIn = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/api/users/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `Error: ${response.statusText}`);
    }

    return result; 
  } catch (error) {
    console.error("Sign-in failed:", error);
    throw error; // Ensure useMutation's onError is triggered
  }
};

export const apiRegister = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `Error: ${response.statusText}`);
    }

    return result; 
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; // Ensure useMutation's onError is triggered
  }
};


export const apiVerifyToken = async()=>{

  try {

    const response= await fetch("http://localhost:5000/api/users/validate-token",{
      method : "GET",
      headers:{
        "Content-Type" : "application/json",
      },
      credentials:"include",

    })
    if (!response.ok) {
      throw new Error(`Token verification failed: ${response.statusText}`);
    }

    
    const data = await response.json();
    console.log("Token verified:", data); 

    return data; 
    
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; 
    
  }
}