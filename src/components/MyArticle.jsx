// MyArticle 컴포넌트
console.log("MyArticle render");
function MyArticle({ title, desc, onChangeMode }) {
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
      <button>삭제</button>
    </section>
  );
}

export default MyArticle;
