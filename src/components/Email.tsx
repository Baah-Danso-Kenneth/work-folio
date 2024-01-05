import Link from 'next/link'

function Email() {
  return (
    <div className='email'>
      <Link href="mailto:kwadwobaahdanso@gmail.com" className='email-link'>
        kwadwobaahdanso@gmail.com
        </Link>
    </div>
  )
}

export default Email