const uploadImage = async (image) => {
  const uri = `https://api.imgbb.com/1/upload?key=3d1ea6cddbeac4bba464c0faf0698195`;
  const res = await fetch(uri, {
    method: "POST",
    body: image,
  });
  const data = await res.json();
  return data;
};
export default uploadImage;
