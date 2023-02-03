const uploadImage = async (image) => {
  // const uri = `https://api.imgbb.com/1/upload?key=faad98b55eafeb6aca5c881b9c4343d2`;
  // const res = await fetch(uri, {
  //   method: "POST",
  //   body: image,
  // });
  // const data = await res.json();
  // return data;

  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "c-store");
  data.append("cloud_name", "dyf39td26");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dyf39td26/image/upload",
    {
      method: "POST",
      body: data,
    }
  );
  const result = res.json();
  return result;
};
export default uploadImage;
