import { v4 as uudiv4 } from "uuid";

function KpopList({ playlist }) {
  return(
    <ul>
      {playlist.map((song) => (
        <li key={uudiv4()}>
          <h3>{song.title}</h3>
          <strong>{song.artist}</strong>
          <span>({song.releaseDate})</span>
        </li>
      ))}
    </ul>
  );
}

export default KpopList;