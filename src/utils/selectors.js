
export const test = (data) => {
  console.log(data);
  const test2 = data.split('|');
  console.log(test2);
  return test2;
};

export const helloworld = () => {
  const array = test("w3Q1camdA6w-WhccITr_MPc");
  const youtubeId = array[0];
  console.log(youtubeId);
  return youtubeId;
};

// export const maj = (data) => {
//   const test = strUcFirst(data);
// };
