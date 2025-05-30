import world from '../assets/world.png'
export default function Header() {
  return (
    <header className='header' >
      <img src={world} />
      <h1 className='headtext'>my travel journal.</h1>
    </header>
  )
}