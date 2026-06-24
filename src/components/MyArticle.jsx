// MyArticle 컴포넌트
console.log("MyArticle render");
function MyArticle({ title, desc, onChangeMode, onDelete }) {
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
      <button
        onClick={() => {
          onChangeMode();
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          onDelete();
        }}
      >
        삭제
      </button>
    </section>
  );
}

export default MyArticle;
