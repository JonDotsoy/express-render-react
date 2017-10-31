
import ReactDOMServer from 'react-dom/server'
import {ServerStyleSheet} from 'styled-components'
import defaultBaseTemplate from './defaultBaseTemplate'

export type Options = {
  template: () => string,
}

export default (opts?:Options = {}) => {
  const template = opts?.baseTemplate || defaultBaseTemplate

  return function expressRenderReact (req, res, next) {
    const renderReact = (comp, opts = {}) => {
      const sheet = new ServerStyleSheet()
      const innerHtml = ReactDOMServer.renderToString(sheet.collectStyles(comp))
      const styleTags = sheet.getStyleTags()

      return res.type( 'html' ).send( template({ ...opts, innerHtml, styleTags }) )
    }

    res.renderReact = renderReact

    return next()
  }
}
