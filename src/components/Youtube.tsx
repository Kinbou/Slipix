const Youtube = ({ idYoutube }: { idYoutube: string }) => {
  return (
    <iframe
      // width="550"
      className="w-100% lg:w-550px lg:h-300px"
      // height="300"
      src={`https://www.youtube.com/embed/${idYoutube}?origin=http://localhost:5173`}
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  )
}

export default Youtube
