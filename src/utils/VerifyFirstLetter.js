export default function VerifyFirsLetter(searchData) {
  if (searchData.searchRadio === 'primeira' && searchData.searchText.length > 1) {
    return global.alert('Sua busca deve conter somente 1 (um) caracter');
  }
}
