import mongoos from "mongoose";

const mongo = async () => {
  try {
    return await mongoos.connect("mongodb://127.0.0.1/n555");
  } catch (error) {
    console.log(error.message);
  }
};

export { mongo };
