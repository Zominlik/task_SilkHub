'use client';

import axios from 'axios';
import Image from 'next/image';
import { memo, useEffect } from 'react';

const baseUrl = 'http://localhost:3000/api';
async function getProducts() {
  try {
    const res = await axios.get(`${baseUrl}/products`);
    // console.log(res.data);
    return await res.data;
  } catch (err) {
    console.log(err);
  }
}

// let myAxios = {
//   get: function (url, options) {
//     return new Promise((resolve, reject) => {
//       let request = new XMLHttpRequest();

//       request.open('GET', url);

//       request.send();

//       request.responseType = 'json';

//       request.onload = function () {
//         if (request.status >= 400) {
//           reject(request.responseText);
//         } else {
//           resolve(request.response);
//         }
//       };

//       request.onerror = function () {
//         reject(request.responseText);
//       };
//     });
//   },
//   put: function (url, options) {
//     return new Promise((resolve, reject) => {
//       let request = new XMLHttpRequest();

//       request.open('PUT', url);

//       request.send(JSON.stringify(options.body));

//       request.responseType = 'json';

//       request.onload = function () {
//         if (request.status >= 200 && request.status <= 299) {
//           reject(request.status);
//         } else {
//           resolve(request.response);
//         }
//       };
//     });
//   },
// };

const Products = async () => {
  const products = await getProducts();
  console.log(products);

  // let allData;
  // myAxios
  //   .get(`${baseUrl}/products`)
  //   .then((res) => {
  //     let data = allData;
  //     console.log(allData);
  //     return data;
  //   })
  //   .then((data) => {
  //     data = allData;
  //     console.log(data);
  //     return data;
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  // useEffect(() => {
  //   getProducts();
  // }, []);
  // console.log(products);
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => {
        <div key={product.id} class="card">
          <Image class="card-img-top" src={product.img} alt={product.img} />
          <div class="card-body">
            <h5 class="card-title">{product_name}</h5>
            <mark>{product.price}</mark>
            <del class="card-text">{product.sale}</del>
          </div>
        </div>;
      })}
    </div>
  );
};

export default memo(Products);
