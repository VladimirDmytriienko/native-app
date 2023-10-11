const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "840bb7bd7amsh6e47bf1e8b33fb6p183936jsn9ae639094dfd",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const getBodyPartList = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    // setLoading(false)
  }
};
