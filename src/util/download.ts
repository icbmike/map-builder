export const download = (blob: Blob) => {
  const linkElement = document.createElement('a');
  const objUrl = window.URL.createObjectURL(blob);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  linkElement.download = `map_builder_${year}_${month}_${day}.png`;
  linkElement.href = objUrl;
  linkElement.style.display = 'none';
  document.body.append(linkElement);
  linkElement.click();
  window.URL.revokeObjectURL(objUrl);
};
