
import ReactDOMServer from 'react-dom/server'
import defaultBaseTemplate from './defaultBaseTemplate'

import type {Options} from './styled'

export default (opts?:Options = {}) => {
  const template = opts?.baseTemplate || defaultBaseTemplate

  return function expressRenderReact (req, res, next) {
    const renderReact = (comp, opts = {}) => {
      const innerHtml = ReactDOMServer.renderToString(comp)

      return res.type( 'html' ).send( template({ ...opts, innerHtml }) )
    }

    res.renderReact = renderReact

    return next()
  }
}
