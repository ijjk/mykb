import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    let statusCode = null
    if (res) statusCode = res.statusCode
    else if (err) statusCode = err.statusCode
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <div className="fill">
        <h4>
          {(() => {
            if (statusCode === 404) {
              return (
                <>
                  <span>404</span> | This page could not be found
                </>
              )
            }
            return statusCode ? `Error: ${statusCode}` : 'An error occurred...'
          })()}
        </h4>

        <style jsx>{`
          div {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}
