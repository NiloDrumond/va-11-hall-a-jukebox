export default function startMusic() {
  function importAll(r) {
    return r.keys().map(r);
  }
  const sources = importAll(require.context('./ost', false, /\.mp3$/));
  var titles = [];
  for(const src of sources){
    console.log(src.slice(56, src.length-13));
    titles.push(src.slice(56, src.length-13));
  }
  console.log(titles.length);
}