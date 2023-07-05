import './Footer.css'
// eslint-disable-next-line react/prop-types
export const Footer = ({ filters }) => {
  return (
    <footer className='footer'>
        {
            JSON.stringify(filters, null, 2)
        }
    </footer>
  )
}
