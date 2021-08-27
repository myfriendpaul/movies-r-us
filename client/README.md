# Project Overview

## Project Name

Movies R Us

## Project Description

Movies R Us is an app that allows users to search a database of movies and allows them to add their selected movies to their Watch List. If the movie they are searching for doesn't exist, the user will be able to 'Create-A-Movie' and send it to their Watch List. In the watch list itself, each movie will have a toggle that allows the user to track if they are currently watching.

## Wireframes

[Wireframe](https://i.imgur.com/VQMH1Ny.png)

## Component Hierarchy

[Component Hierachy](https://i.imgur.com/k319MCE.png)

## API and Data Sample


```json
{
  "records": [
    {
      "id": "recMeumOA0zUMyjbx",
      "fields": {
        "Attachments": true,
        "title": "Spider-Man",
        "img": "https://cdn.shopify.com/s/files/1/1416/8662/products/spiderman_2002_fr_teaser_original_film_art_b1d2b372-290c-4574-805c-e5503a1f4756_5000x.jpg?v=16232..."
      },
      "createdTime": "2021-08-20T03:00:08.000Z"
    },
    {
      "id": "recnwAYCvFxKzLLdz",
      "fields": {
        "title": "Star Wars The Empire Strikes Back",
        "img": "https://cdn.shopify.com/s/files/1/1416/8662/products/empire_strikes_back_1980_original_film_art_5000x.jpg?v=1579925333"
      },
      "createdTime": "2021-08-20T03:00:08.000Z"
    },
    {
      "id": "recYFuIkjXLkPLA1D",
      "fields": {
        "Attachments": true,
        "title": "Air Bud",
        "img": "https://images.moviesanywhere.com/df6d90d2941efb5adbe7cd8a2446be74/8e8e32b4-fb54-44b9-83ac-5dd6a346a6d6.jpg?h=375&resize=fit&w=250"
      },
      "createdTime": "2021-08-20T03:00:08.000Z"
    }
  ],
  "offset": "recYFuIkjXLkPLA1D"
}
```

#### MVP

- Populate movie search results as movie posters after running the search form utilizing a GET request to the TMDB API
- Populate watchlist history using a GET request to the Airtable API
- Selected movie is able to be added to watchlist which passes through the TMDB API into the Airtable API utilizing a POST request
- User is able to add their own movie with a Title and Poster via URL which is sent to the Airtable API via a POST request
- Movies that populate the watchlist will have the option to remove from Airtable via a DELETE request and update on the page
- Allow user to add and remove selected movie to watch list

#### PostMVP

- Create a toggle that allows the user to keep track of what they are currently watching
- Use third api to send selected movies to my in home server and add to "To be added" list
- Add TV Shows search results 
- Allow user to create multiple lists

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

| Day       | Deliverable                                        | Status                |
| --------- | -------------------------------------------------- | --------------------- | ---------- |
| Aug 19-20 | Readme / Wireframes / Priority Matrix / Timeframes | Complete              |
| Aug 20    | Project Approval                                   | Complete              |
| Aug 21-22 | Functionality for search                           | Complete              |
| Aug 23    | Components completed                               | Complete              |  
| Aug 24    | CSS                                                | Complete              |
| Aug 25    | MVP and Material Ui components                     | Complete              |
| Aug 27    | Presentations                                      | Complete              |

## Timeframes

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Search Results   |    H     |      4hrs      |      4hrs      |     4hrs     |
| Mapping search   |    H     |      4hrs      |      4hrs      |     4hrs     |
| Airtable Results |    H     |      3hrs      |      3hrs      |     3hrs     |
| Mapping Airtable |    H     |      2hrs      |      2hrs      |     2hrs     |
| Watch List Cards |    H     |      3hrs      |      3hrs      |     3hrs     |
| Add to Watchlist |    H     |      3hrs      |      3hrs      |     3hrs     |
| Watch List       |    H     |      3hrs      |      3hrs      |     3hrs     |
| Pass state to WL |    H     |      6hrs      |      8hrs      |     8hrs     |
| Create-A-Movie   |    H     |      6hrs      |      6hrs      |     6hrs     |
| Delete from WL   |    H     |      3hrs      |      4hrs      |     4hrs     |
| Header/Footer    |    M     |      4hrs      |      4hrs      |     4hrs     |
| CSS              |    H     |      6hrs      |      6hrs      |     6hrs     |
| Material Ui      |    M     |      8hrs      |      8hrs      |     8hrs     |
| Toggle Switch    |    L     |      3hrs      |      4hrs      |     4hrs     |

| Total | H | 58hrs | 62hrs | 62hrs |

## SWOT Analysis

### Strengths:
Confident in how my component hierachy will keep me on track and on schedule. I feel as it is detailed enough to make sure I tick all my boxes with little to no setbacks.

### Weaknesses:
I have yet to use grid with flexbox together which I know I will need in order to get the layout and design I am looking for. Thankfully, I have found resources that will aid in my CSS process next week.

### Opportunities: 
Passing the search results into watch list will be a challenge. The thought process so far is to consider it inside its own container and using event listeners to get the data passed into a separate component.


### Threats:
Getting the two APIs to talk to each other will be the biggest challenge I can see thus far. Utilizing a lifted state, I should be able to pass them into components via props. 
