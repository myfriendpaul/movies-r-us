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

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This **must** be properly formatted. An example is below:

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

- Find and use external api
- Add external api data to airtable api
- Search through database
- Create a movie if it doesn't exist
- Allow user to add and remove selected movie to watch list

#### PostMVP

- Use third api to send selected movies to my in home server and add to "To be added" list
- Add TV Shows
- Allow user to create multiple lists

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

| Day       | Deliverable                                        | Status                |
| --------- | -------------------------------------------------- | --------------------- | ---------- |
| Aug 19-20 | Readme / Wireframes / Priority Matrix / Timeframes | Incomplete            |
| Aug 20    | Project Approval                                   | Incomplete            |
| Aug 21-22 | Functionality for search                           | Incomplete            |
| Aug 23    | Components completed                               | InitialClickableModel | Incomplete |
| Aug 24    | CSS                                                | Incomplete            |
| Aug 25    | MVP                                                | Incomplete            |
| Aug 27    | Presentations                                      | Incomplete            |

## Timeframes

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Search Results   |    H     |      8hrs      |      hrs      |     hrs     |
| Watch List       |    H     |      8hrs      |      hrs      |     hrs     |
| Pass state to WL |    H     |      6hrs      |      hrs      |     hrs     |
| Create-A-Movie   |    H     |      6hrs      |      hrs      |     hrs     |
| Header/Footer    |    M     |      4hrs      |      hrs      |     hrs     |
| CSS/Bootstrap    |    H     |     12hrs      |      hrs      |     hrs     |

| Total | H | 44hrs | hrs | hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
