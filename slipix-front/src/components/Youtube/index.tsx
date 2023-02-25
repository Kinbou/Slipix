const Youtube = ({ idYoutube }: any) => {
  return (
    <iframe
    width="600"
    height="350"
    src={`https://www.youtube.com/embed/${idYoutube}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
  </iframe>
  )
}

export default Youtube
