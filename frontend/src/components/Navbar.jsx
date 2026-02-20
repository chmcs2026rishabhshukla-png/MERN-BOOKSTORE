import {Link} from 'react-router'
import {PlusIcon} from "lucide-react"
const Navbar =() => {
    return (
   <header className='bg-amber-300 border-b border-base-constant/10'>
   <div className='ms-auto max-w-6xl p-4'>
    <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-primary font-monotracking-tight'></h1>
        <div className='flex items-center gap-4'>
            <Link to={"/create"} className="btn btn-primary">
            <PlusIcon className='size-5' />
            </Link>
        </div>
    </div>
   </div>
   </header>
 )}
 export default Navbar
