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

### 🎧 Most played albums in the past seven days

As of ${new Date(Number(topAlbums.timestamp) * 1000).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})}.

```jsx
function TopAlbumCards({ albums }) {
  return (
    <div class="grid grid-cols-2" style={{ maxWidth: "960px" }}>
      {albums.map((album) => (
        <a href={album.url} target="_blank">
          <div
            class="card grid grid-cols-2"
            style={{
              gridTemplateColumns: "auto 8rem",
              margin: "0",
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
  );
}
```

```jsx
display(<TopAlbumCards albums={topAlbums.topalbums.album} />);
```

<style>
  a:hover {
    color: rgba(0, 0, 0, 0);
  }

  a:hover .card {
    background-color: var(--theme-foreground-faintest);
  }
</style>
