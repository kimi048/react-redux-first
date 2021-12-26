
export function moviesList() {
  return {
    type: 'MOVIES_LIST',
    payload: [
      { id: "1", name: "PULP FICTION" },
      { id: "2", name: "Pacific Rin" },
      { id: "3", name: "Rambo" }
    ]
  }
}