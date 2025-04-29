import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>Sorry, page not found or an error occurred.</p>
      <Link to="/">Return to home</Link>
    </div>
  )
}
