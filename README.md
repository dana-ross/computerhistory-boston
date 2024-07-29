# Boston's Computer History

A fairly basic React app/web site trying to identify companies, organizations, and events that played a role in the evolution of computing in the Boston area.

(Really, all of Eastern Massachusetts)

The site is available at https://www.computerhistory.boston/

## Adding Data

The data files can be found in [`src/data`](https://github.com/dana-ross/computerhistory-boston/tree/main/src/data). Files in this directory are JSON-formatted and each consists of an array of records.

### Record Structure
  ```json
  {
    "slug": "wang-laboratories",
    "name": "Wang Laboratories (1976–1997)",
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

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# computerhistory-boston
