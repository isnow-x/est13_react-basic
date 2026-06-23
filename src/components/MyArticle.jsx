// MyArticle 컴포넌트
console.log("MyArticle render");
function MyArticle({ title, desc }) {
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    </section>
  );
}

export default MyArticle;
