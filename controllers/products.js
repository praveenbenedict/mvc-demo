//7. Fetching Data from Files from model
const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  };

exports.getProducts =  (req, res, next) => {
    const products = Product.fetchAll(products => {
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  }

//5. Adding a Product Model
// const Product = require('../models/product');
// exports.getAddProduct = (req, res, next) => {
//     res.render('add-product', {
//       pageTitle: 'Add Product',
//       path: '/admin/add-product',
//       formsCSS: true,
//       productCSS: true,
//       activeAddProduct: true
//     });
//   };

// exports.postAddProduct = (req, res, next) => {
//     const product = new Product(req.body.title);
//     product.save();
//     res.redirect('/');
//   };

// exports.getProducts =  (req, res, next) => {
//     const products = Product.fetchAll();
//     res.render('shop', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/',
//       hasProducts: products.length > 0,
//       activeShop: true,
//       productCSS: true
//     });
//   }

// 3. Adding Controllers 4. Finishing Controllers
// const products = [];

// exports.getAddProduct = (req, res, next) => {
//     res.render('add-product', {
//       pageTitle: 'Add Product',
//       path: '/admin/add-product',
//       formsCSS: true,
//       productCSS: true,
//       activeAddProduct: true
//     });
//   };

// exports.postAddProduct = (req, res, next) => {
//     products.push({ title: req.body.title });
//     res.redirect('/');
//   };

// exports.getProducts =  (req, res, next) => {
//     res.render('shop', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/',
//       hasProducts: products.length > 0,
//       activeShop: true,
//       productCSS: true
//     });
//   }