export const airtableBaseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/movies`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

// export const tmdbBaseURL = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMBD_KEY}&query=`;

// export const tmbdImageBaseURL = `https://image.tmdb.org/t/p/w500/`;
