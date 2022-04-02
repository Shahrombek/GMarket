import axios from "axios";

const getUsers = async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=10"
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

const getUserById = async (id) => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export { getUsers, getUserById };
