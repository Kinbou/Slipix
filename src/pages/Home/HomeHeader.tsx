import logoLol from '@/assets/images/logoLol.png'
import logoSlipix from '@/assets/images/logoTrollpicks.png'

const HomeHeader = () => {
  return (
    <div className="flex justify-center items-center bg-bgColor mb-3em mt-1px w-100vw p-.3em">
      <img
        className="2xl:w-5% h-5% drop-shadow-filterLogo xs:w-20%"
        src={logoLol}
        alt=""
      />
      <h1 className="h1 xl:px-8 xs:px-2">Bienvenue sur League of trollpicks</h1>
      <img
        className="2xl:w-5% h-5% drop-shadow-filterLogo rounded-1/2 xs:w-20%"
        src={logoSlipix}
        alt="Slipix"
      />
    </div>
  )
}

export default HomeHeader
