
import FootballBoots from '../sections/Footballboots'
import Hero from '../sections/Hero'
import KidsKits from '../sections/KidsKits'
import NewArrivals from '../sections/NewArrivals'
import NewSeasonKits from '../sections/NewSeasonKit'
import Others from '../sections/Others'
import RetroKits from '../sections/Retrokits'
import SpecialKits from '../sections/SpecialKits'

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <RetroKits />
      <NewSeasonKits />
      <SpecialKits />
      <FootballBoots />
      <KidsKits />
      <Others />
    </div>
  )
}
