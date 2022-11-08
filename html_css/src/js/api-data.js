export function getData(value) {
    let result = fetch(`https://jsonplaceholder.typicode.com/albums/${value}/photos`)
      .then(data => data.json())
      .then(data => data.splice(0,10))
      return result
  }