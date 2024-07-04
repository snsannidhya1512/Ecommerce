

// const Product = require("../models/product.model.js");
// const Category = require("../models/category.model.js"); // Assuming you have a category model

// async function createProduct(reqData) {
//   try {
//     // Extract category names from request data
//     const { topLevelCategory, secondLevelCategory, thirdLevelCategory } = reqData;

//     // Validate and create top-level category
//     let topLevel = await Category.findOne({ name: topLevelCategory });
//     if (!topLevel) {
//       topLevel = await Category.create({
//         name: topLevelCategory,
//         level: 1,
//       });
//     }

//     // Validate and create second-level category
//     let secondLevel = await Category.findOne({
//       name: secondLevelCategory,
//       parentCategory: topLevel._id,
//     });
//     if (!secondLevel) {
//       secondLevel = await Category.create({
//         name: secondLevelCategory,
//         parentCategory: topLevel._id,
//         level: 2,
//       });
//     }

//     // Validate and create third-level category
//     let thirdLevel = await Category.findOne({
//       name: thirdLevelCategory,
//       parentCategory: secondLevel._id,
//     });
//     if (!thirdLevel) {
//       thirdLevel = await Category.create({
//         name: thirdLevelCategory,
//         parentCategory: secondLevel._id,
//         level: 3,
//       });
//     }

//     // Create product with the provided details
//     const product = new Product({
//       title: reqData.title,
//       color: reqData.color,
//       description: reqData.description,
//       discountedPrice: reqData.discountedPrice,
//       discountPersent: reqData.discountPersent,
//       imageUrl: reqData.imageUrl,
//       brand: reqData.brand,
//       price: reqData.price,
//       sizes: reqData.sizes,
//       quantity: reqData.quantity,
//       category: thirdLevel._id,
//     });

//     // Save the product and return
//     const savedProduct = await product.save();
//     return savedProduct;
//   } catch (error) {
//     throw new Error(`Error creating product: ${error.message}`);
//   }
// }

// async function deleteProduct(productId) {
//   const product = await Product.findById(productId);

//   if (!product) {
//     throw new Error("Product not found with id: " + productId);
//   }

//   await Product.findByIdAndDelete(productId);

//   return "Product deleted successfully";
// }

// async function updateProduct(productId, reqData) {
//   const updatedProduct = await Product.findByIdAndUpdate(productId, reqData, { new: true });
//   return updatedProduct;
// }

// async function findProductById(id) {
//   const product = await Product.findById(id).populate("category").exec();

//   if (!product) {
//     throw new Error("Product not found with id: " + id);
//   }
//   return product;
// }

// async function getAllProducts(reqQuery) {
//   try {
//     let {
//       category,
//       color,
//       sizes,
//       minPrice,
//       maxPrice,
//       minDiscount,
//       sort,
//       stock,
//       pageNumber,
//       pageSize,
//     } = reqQuery || {};

//     // Set default values for pageSize and pageNumber if not provided
//     pageSize = parseInt(pageSize) || 10;
//     pageNumber = parseInt(pageNumber) || 1;

//     // Start building the base query to retrieve products
//     let query = Product.find().populate("category");

//     // Handle category filter
//     if (category) {
//       const existCategory = await Category.findOne({ name: category });
//       if (existCategory) {
//         query = query.where("category").equals(existCategory._id);
//       } else {
//         // If category does not exist, return an empty array
//         return { content: [], currentPage: 1, totalPages: 1 };
//       }
//     }

//     // Handle color filter
//     if (color) {
//       const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
//       const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
//       query = query.where("color").regex(colorRegex);
//     }

//     // Handle sizes filter
//     if (sizes) {
//       const sizesSet = new Set(sizes);
//       query = query.where("sizes.name").in([...sizesSet]);
//     }

//     // Handle price range filter
//     if (minPrice && maxPrice) {
//       query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
//     }

//     // Handle minimum discount filter
//     if (minDiscount) {
//       query = query.where("discountPersent").gt(minDiscount);
//     }

//     // Handle stock filter
//     if (stock) {
//       if (stock === "in_stock") {
//         query = query.where("quantity").gt(0);
//       } else if (stock === "out_of_stock") {
//         query = query.where("quantity").lte(0);
//       }
//     }

//     // Handle sorting
//     if (sort) {
//       const sortDirection = sort === "price_high" ? -1 : 1;
//       query = query.sort({ discountedPrice: sortDirection });
//     }

//     // Apply pagination
//     const totalProducts = await Product.countDocuments(query);
//     const skip = (pageNumber - 1) * pageSize;
//     query = query.skip(skip).limit(pageSize);
//     const products = await query.exec();
//     const totalPages = Math.ceil(totalProducts / pageSize);

//     return { content: products, currentPage: pageNumber, totalPages: totalPages };
//   } catch (error) {
//     throw new Error(`Error fetching products: ${error.message}`);
//   }
// }

// async function createMultipleProduct(products) {
//   for (let product of products) {
//     await createProduct(product);
//   }
// }

// module.exports = {
//   createProduct,
//   deleteProduct,
//   updateProduct,
//   getAllProducts,
//   findProductById,
//   createMultipleProduct,
// };
const Product = require("../models/product.model.js");
const Category = require("../models/category.model.js");

async function createProduct(reqData) {
  try {
    const { topLevelCategory, secondLevelCategory, thirdLevelCategory } = reqData;

    let topLevel = await Category.findOne({ name: topLevelCategory });
    if (!topLevel) {
      topLevel = await Category.create({ name: topLevelCategory, level: 1 });
    }

    let secondLevel = await Category.findOne({ name: secondLevelCategory, parentCategory: topLevel._id });
    if (!secondLevel) {
      secondLevel = await Category.create({ name: secondLevelCategory, parentCategory: topLevel._id, level: 2 });
    }

    let thirdLevel = await Category.findOne({ name: thirdLevelCategory, parentCategory: secondLevel._id });
    if (!thirdLevel) {
      thirdLevel = await Category.create({ name: thirdLevelCategory, parentCategory: secondLevel._id, level: 3 });
    }

    const product = new Product({
      title: reqData.title,
      color: reqData.color,
      description: reqData.description,
      discountedPrice: reqData.discountedPrice,
      discountPersent: reqData.discountPersent,
      imageUrl: reqData.imageUrl,
      brand: reqData.brand,
      price: reqData.price,
      sizes: reqData.sizes,
      quantity: reqData.quantity,
      category: thirdLevel._id,
    });

    const savedProduct = await product.save();
    return savedProduct;
  } catch (error) {
    throw new Error(`Error creating product: ${error.message}`);
  }
}

async function deleteProduct(productId) {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found with id: " + productId);
  }
  await Product.findByIdAndDelete(productId);
  return "Product deleted successfully";
}

async function updateProduct(productId, reqData) {
  const updatedProduct = await Product.findByIdAndUpdate(productId, reqData, { new: true });
  return updatedProduct;
}

async function findProductById(id) {
  try {
    const product = await Product.findById(id).populate("category").exec();
    if (!product) {
      throw new Error("Product not found with id: " + id);
    }
    return product;
  } catch (error) {
    throw new Error(`Error fetching product: ${error.message}`);
  }
}

async function getAllProducts(reqQuery) {
  try {
    let { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery || {};

    pageSize = parseInt(pageSize) || 10;
    pageNumber = parseInt(pageNumber) || 1;

    let query = Product.find().populate("category");

    if (category) {
      const existCategory = await Category.findOne({ name: category });
      if (existCategory) {
        query = query.where("category").equals(existCategory._id);
      } else {
        return { content: [], currentPage: 1, totalPages: 1 };
      }
    }

    if (color) {
      const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
      const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
      query = query.where("color").regex(colorRegex);
    }

    if (sizes) {
      const sizesSet = new Set(sizes);
      query = query.where("sizes.name").in([...sizesSet]);
    }

    if (minPrice && maxPrice) {
      query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }

    if (minDiscount) {
      query = query.where("discountPersent").gt(minDiscount);
    }

    if (stock) {
      if (stock === "in_stock") {
        query = query.where("quantity").gt(0);
      } else if (stock === "out_of_stock") {
        query = query.where("quantity").lte(0);
      }
    }

    if (sort) {
      const sortDirection = sort === "price_high" ? -1 : 1;
      query = query.sort({ discountedPrice: sortDirection });
    }

    const totalProducts = await Product.countDocuments(query);
    const skip = (pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);
    const products = await query.exec();
    const totalPages = Math.ceil(totalProducts / pageSize);

    return { content: products, currentPage: pageNumber, totalPages: totalPages };
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
}

async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct,
};
