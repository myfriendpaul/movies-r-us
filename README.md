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
Utilizing an API, data will populate on the page allowing for traversing through the results. Once the movie has been selected, the date from that API will be passed into the Airtable API to update the list using a post request. If the movie doesn't exist or the user would like to add their own movie to the watch list, they can access the Create-A-Movie page where a form to add their own movie with an image will send a post request to the Airtable API. 
On the Watch List page, the user will be able to see all movies that have been added to their list and has the option to remove them utilizing a delete request to the Airtable API. 
Using a simple toggle switch will let the user keep track of what they are currently watching.


#### PostMVP

Using a third API such as CouchPotato, create a front end to process incoming requests for users of my Plex server. This will mitigate the necessity of phone calls and text messages to request certain movies being added to the library. 
I would also like to like to incorporate TV shows at some point and integrate the Sonarr API in conjuction with Couchpotato to fully automate the library updates. Sonarr allows for automatic searches and downloads of media depending on what the server has queued up for downloads. Eventually, I would like to not have to manage this directly and have the server update on its own via user requests.

## Project Schedule



| Day       |                    Deliverable                     |        Status         |
| --------- | :------------------------------------------------: | :-------------------: |
| Aug 19-20 | Readme / Wireframes / Priority Matrix / Timeframes |      Incomplete       |
| Aug 20    |                  Project Approval                  |      Incomplete       |
| Aug 21-22 |              Functionality for search              |      Incomplete       |
| Aug 23    |                Components completed                | InitialClickableModel |
| Aug 24    |                        CSS                         |      Incomplete       |
| Aug 25    |                        MVP                         |      Incomplete       |
| Aug 27    |                   Presentations                    |      Incomplete       |

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

### SWOT Analysis

##### Strengths: Confident in how my component hierachy will keep me on track and on schedule. I feel as it is detailed enough to make sure I tick all my boxes with little to no setbacks. 

##### Weaknesses: I have yet to use grid with flexbox together which I know I will need in order to get the layout and design I am looking for. Thankfully, I have found resources that will aid in my CSS process next week. 

##### Opportunities: Utilizing a second API as part of my MVP is something I wanted to challenge myself with. I believe that having this incorporated into this project will really show what I have learned thus far. 

##### Threats: Passing the search results into watch list will be a challenge. The thought process so far is to consider it inside its own container and using event listeners to get the data passed into a separate component. 
