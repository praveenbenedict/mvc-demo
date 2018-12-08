//7. Fetching Data from Files from model
const path = require('path');
const fs = require('fs');
const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            console.log(fileContent);
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=> {
                // console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');        
        fs.readFile(p, (err, fileContent)=>{
            if(err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}
//6. Storing Data in files using model
// const path = require('path');
// const fs = require('fs');
// const products = [];

// module.exports = class Product {
//     constructor(t) {
//         this.title = t;
//     }
//     save() {
//         const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
//         fs.readFile(p, (err, fileContent) => {
//             console.log(fileContent);
//             let products = [];
//             if (!err) {
//                 products = JSON.parse(fileContent);
//             }
//             products.push(this);
//             fs.writeFile(p, JSON.stringify(products), (err)=> {
//                 // console.log(err);
//             });
//         });
//     }

//     static fetchAll() {
//         const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');        
//         fs.readFile(p, (err, fileContent)=>{
//             if(err) {
//                 return [];
//             }
//             return JSON.parse(fileContent);
//         });
//     }
// }


// //5. Adding a Product Model

// const products = [];

// module.exports = class Product {
//     constructor(t){
//         this.title = t;
//     }
//     save() {
//         products.push(this);
//     }

//     static fetchAll() {
//         return products;
//     }
// }