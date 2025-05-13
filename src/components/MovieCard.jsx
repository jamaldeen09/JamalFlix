import React from 'react'
// s: title, description, posterURL, rating
import PropTypes from 'prop-types'

const MovieCard = (props) => {
    const { title,description,posterUrl,rating,deleteitem } = props
  return (
    <div style={{border: "1px solid red"}} className="cardHover h-[65vh] rounded-xl px-3 py-3 pb-10">
        <img src={
          posterUrl && posterUrl.startsWith("http")
          ? posterUrl
          : "https://via.placeholder.com/300x200?text=No+Image"

        } alt={title} className="w-full rounded-xl h-[35vh]"/>

        <div className="text-white flex justify-center items-center flex-col gap-5 h-[25vh] text-xl">
            <h1>Title: {title || "No Title"}</h1>
            <h1>Description: {description || "No Description"}</h1>
            <h1>Rating: {rating || 0}</h1>

            <button onClick={() => deleteitem()} className="btnScale px-3 py-3 bg-white text-sm rounded-xl shadow-xl text-red-500">Delete Movie</button>
        </div>
    </div>
  )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    deleteitem: PropTypes.func.isRequired,
}

export default MovieCard