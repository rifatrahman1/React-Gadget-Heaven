// import { createContext, useContext, useState } from "react";
// const apiContext = createContext();
// export const useShareData = () => useContext (apiContext)
// const Context = ({children}) => {

//     const cart_count = parseInt(localStorage.getItem('add_to_cart')) || 0;
//     const [count, setCount] = useState(cart_count);
    
//     const value = {setCount, count}
//     return (

//         <apiContext.Provider value={value}>
//             {children}
//         </apiContext.Provider>
//     );
// };

// export default Context;