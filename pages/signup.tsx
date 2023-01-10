import Link from 'next/link';
import SignUp from '../src/components/SignUp/SignUp';

const signup = () => {
  return (
    <>
    <div>
        <h2>hello this is a sign up page</h2>
        <SignUp />
        <div>
        <Link href={"/"}>Back to Home</Link>
        </div>
    </div>
    </>
  )
}

export default signup;