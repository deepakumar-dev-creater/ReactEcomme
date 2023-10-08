import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import User from "./model/userModel.js";
import Products from "./model/productModel.js";
import Order from "./model/orderModel.js";
import users from "./data/users.js";
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Products.deleteMany();

    const creatUsers = await User.insertMany(users);
    const adminUser = await creatUsers[0]._id;
    console.log(adminUser);
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Products.insertMany(sampleProducts);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`error:${error}`.red.inverse);
    process.exit(1);
  }
};


const destoryData = async () => {
    try {
      await Order.deleteMany();
      await User.deleteMany();
      await Products.deleteMany();
    
      console.log("Data destoryed!".red.inverse);
      process.exit();
    } catch (error) {
      console.log(`error:${error}`.red.inverse);
      process.exit(1);
    }
  };


  if(process.argv[2] == '-d')
  {
    destoryData()
  }
  else
  {
    importData()
  }