---
toc: false
pager: false
---

```js
const topAlbums = FileAttachment("data/top-albums.json").json();
```

<!--```js
topAlbums
```-->

### 🎧 Last week's favorites

```jsx
function TopAlbumCards({ albums, timestamp }) {
  return (
    <div>
      <span class="as-of">
        Data from{" "}
        <a href="https://www.last.fm" target="_blank">
          last.fm
        </a>
        , as of{" "}
        {new Date(Number(timestamp) * 1000).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        .
      </span>
      <div
        class="grid grid-cols-2"
        style={{ maxWidth: "960px", marginTop: "0.5rem" }}
      >
        {albums.map((album) => (
          <a class="album" href={album.url} target="_blank">
            <div
              class="card grid grid-cols-2"
              style={{
                gridTemplateColumns: "auto 8rem",
                margin: 0,
              }}
            >
              <div>
                <h2>{album.name}</h2>
                <h3>{album.artist.name}</h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <img
                  src={album.image[3]["#text"]}
                  style={{
                    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
                    filter: "saturate(1.1) contrast(1.05)",
                  }}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
```

```jsx
display(
  <TopAlbumCards
    albums={topAlbums.topalbums.album}
    timestamp={topAlbums.timestamp}
  />,
);
```

<style>
  .album:hover {
    color: rgba(0, 0, 0, 0);
  }

  .album:hover .card {
    background-color: var(--theme-foreground-faintest);
  }

  .as-of {
    font-family: var(--sans-serif);
    color: var(--theme-foreground-faint);
    font-size: 0.8rem;
  }

  .as-of a {
    color: var(--theme-foreground-faint);
    text-decoration: underline;
  }
</style>
