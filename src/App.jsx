import { useState } from "react";

const roomNotes = [
  "빛이 닿기 전의 공기",
  "거리의 소음이 사라진 뒤",
  "익명의 풍경 기록",
];

const frameSizes = [
  { width: 420, height: 560, span: "tall" },
  { width: 520, height: 360, span: "wide" },
  { width: 360, height: 360, span: "square" },
  { width: 340, height: 460, span: "portrait" },
];

function createPieces(batchId) {
  return Array.from({ length: 30 }, (_, index) => {
    const frame = frameSizes[index % frameSizes.length];
    const room = roomNotes[index % roomNotes.length];
    const edition = String(index + 1).padStart(2, "0");

    return {
      id: `exhibit-${edition}`,
      title: `Untitled Observation ${edition}`,
      artist: `Archive Unit ${((index % 6) + 1).toString().padStart(2, "0")}`,
      room,
      year: 2026,
      medium: "digital pigment print",
      description: [
        "도시의 틈과 우연한 빛을 채집한 장면.",
        "익숙한 공간이 잠시 낯설어지는 순간.",
        "구체적인 이야기를 지운 뒤 남은 감각의 기록.",
      ][index % 3],
      image: `https://picsum.photos/${frame.width}/${frame.height}?random=${batchId}-${edition}`,
      span: frame.span,
    };
  });
}

function createBatchId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function App() {
  const [pieces, setPieces] = useState(() => createPieces(createBatchId()));
  const featuredPiece = pieces[7];
  const handleRehang = () => {
    setPieces(createPieces(createBatchId()));
  };

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Virtual Photography Exhibition</p>
          <h1>Random Gallery</h1>
          <p className="hero-text">
            매번 다른 사진이 걸리는 가상의 전시 공간입니다. Picsum의 랜덤 이미지를
            이용해, 우연과 큐레이션 사이에 있는 전시 경험을 구성했습니다.
          </p>
          <div className="hero-meta">
            <span>30 works</span>
            <span>Seoul / Online</span>
            <span>Open through March 2026</span>
          </div>
          <button type="button" className="rehang-button" onClick={handleRehang}>
            작품 다시 걸기
          </button>
        </div>

        <aside className="curator-card">
          <p className="card-label">Curator's Note</p>
          <p>
            각 이미지는 동일한 규칙으로 수집되지만, 보는 순서와 프레이밍에 따라
            전혀 다른 서사를 만듭니다. 이 전시는 의도적으로 설명을 줄이고, 관람자가
            장면 사이의 간격을 직접 해석하도록 남겨둡니다.
          </p>
        </aside>
      </header>

      <main className="content">
        <section className="feature-panel">
          <div className="feature-image-wrap">
            <img
              src={featuredPiece.image}
              alt={featuredPiece.title}
              className="feature-image"
            />
          </div>
          <div className="feature-copy">
            <p className="card-label">Featured Work</p>
            <h2>{featuredPiece.title}</h2>
            <p className="feature-artist">
              {featuredPiece.artist} · {featuredPiece.year}
            </p>
            <p className="feature-description">{featuredPiece.description}</p>
            <dl className="feature-facts">
              <div>
                <dt>Room</dt>
                <dd>{featuredPiece.room}</dd>
              </div>
              <div>
                <dt>Medium</dt>
                <dd>{featuredPiece.medium}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="gallery-intro">
          <p className="card-label">Exhibition Floor</p>
          <h2>Framed coincidences arranged like a slow walk.</h2>
        </section>

        <section className="gallery-grid">
          {pieces.map((piece) => (
            <article className={`piece-card ${piece.span}`} key={piece.id}>
              <div className="piece-image-wrap">
                <img src={piece.image} alt={piece.title} className="piece-image" />
              </div>
              <div className="piece-copy">
                <p className="piece-room">{piece.room}</p>
                <h3>{piece.title}</h3>
                <p className="piece-meta">
                  {piece.artist} · {piece.medium}
                </p>
                <p className="piece-description">{piece.description}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
