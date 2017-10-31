# Express Render React

What is it about? This is a library to render [React Components](https://reactjs.org) or [React Components](https://reactjs.org) with [Styled Components](https://www.styled-components.com) using [Express](http://expressjs.com/).

```javascript
app.get('/', (req, res) =>
  res.renderReact(
    <div>
      <h1>Hi {req.query.name}!</h1>
    </div>
  )
)
```


## How to use

```javascript
import expressRenderReact from '@jondotsoy/express-render-react'
app.use(expressRenderReact())
```

if you source use Styled Components.

```javascript
import expressRenderReact from '@jondotsoy/express-render-react/styled'
app.use(expressRenderReact())
```
