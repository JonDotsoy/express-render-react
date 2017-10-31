
export type TemplateOptions = {
  innerHtml: string,
  styleTags?: string,
}

export default (opts:TemplateOptions):string => {
  const {
    lang = 'en',
    title = 'Document',
    charset = 'UTF-8',
    innerHtml = '',
    styleTags = '',
    viewport = 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
  } = opts

  return `<!DOCTYPE html><html lang="${lang}"><head><meta name="viewport" content="${viewport}"/><meta charset="${charset}"/><title>${title}</title>${styleTags}</head><body><div id="app">${innerHtml}</div></body></html>`
}
