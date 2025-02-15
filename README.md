# Boston's Computer History

A React app/web site trying to identify companies, organizations, and events that played a role in the evolution of computing in the Boston area.

(Really, all of Eastern Massachusetts)

The site is available at https://www.computerhistory.boston/

## Adding Data

The data files can be found in [`src/data`](https://github.com/dana-ross/computerhistory-boston/tree/main/src/data). Files in this directory are JSON-formatted and each consists of an array of records.

### Record Structure
  ```json
  {
    "slug": "wang-laboratories",
    "name": "Wang Laboratories",
    "address": {
      "street": "900 Chelmsford Avenue",
      "city": "Lowell",
      "state": "MA",
      "zip": "01851"
    },
    "location": [42.61447, -71.32713],
    "description": "Wang Laboratories was a computer company founded in 1951, by An Wang and G. Y. Chu.[1] The company was successively headquartered in Cambridge, Massachusetts (1954–1963), Tewksbury, Massachusetts (1963–1976), and finally in Lowell, Massachusetts (1976–1997).",
    "links": [
      {
        "title": "Remember When: Wang Laboratories",
        "href": "https://www.lowellsun.com/2013/08/03/remember-when-wang-laboratories/"
      },
      {
        "title": "Cross Point",
        "href": "https://crosspointma.com/"
      }
    ],
    "logo": "Wang_Laboratories_wordmark.svg"
  }
```
Slug: Used to build an URL representing the landmark. Currently, this is only used for companies.

Name: Name of the company, institution, or event.

Address: Street address associated with the landmark. This will eventually support multiple historical addresses.

Location: The address's latitude & longitude.

Description: A short description of this landmark's historical significance.

Links: An array of records people can visit to learn more about this landmark. Each consists of a `title` and `href`.

Logo: The filename of a logo in the [`public/logos`](https://github.com/dana-ross/computerhistory-boston/tree/main/public/logos) directory.

### Logos

Logos go in the [`public/logos`](https://github.com/dana-ross/computerhistory-boston/tree/main/public/logos) directory.

They should be the clearest picture available. SVG is preferred. If an SVG isn't available, a clear PNG with is an acceptable alternative.

It's hard to find a completely clear image of some logos, and we'll make do with the best version available.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

The page will reload if you make edits.
You will also see any lint errors in the console.


### `npm run build`
Builds the app for production to the `dist` folder.
