/* eslint-disable import/no-anonymous-default-export */
export default {
  footer: false,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  components: {
    h1: ({ children }) => (
      <h1
        style={{
          fontWeight: 'normal'
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontWeight: 'normal'
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontWeight: 'normal'
        }}
      >
        {children}
      </h3>
    ),
  },
  readMore: 'Read',
  postFooter: null,
  darkMode: false,
}