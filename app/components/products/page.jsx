// import axios from 'axios';
// import Image from 'next/image';
// import { memo } from 'react';

// const baseUrl = 'http://localhost:3000/api';
// async function getProducts() {
//   try {
//     const res = await axios.get(`${baseUrl}/products`);
//     return res.data.json();
//   } catch (err) {
//     console.log(err);
//   }
// }
// const Products = async () => {
//   const products = await getProducts();
//   return (
//     <div>
//       <h2>Products</h2>
//       {products.map((product) => {
//         <div key={product.id}>
//           <h2>{product.id}</h2>
//           <Image src={product.avatar} alt={product.id} />
//         </div>;
//       })}
//     </div>
//   );
// };

// export default memo(Products);
