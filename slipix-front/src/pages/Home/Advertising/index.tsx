
import discord from '@/assets/images/socialNetwork/discord.png'
import discordTitle from '@/assets/images/socialNetwork/discordTitle.png'
import teamSlip from '@/assets/images/teamSlip.png'
import './advertising.scss'

const Publicity = () => (
  <div className="publi">
    <a href="https://discord.com/invite/fsTYTg5" target="_blanc">
      <div className="publi__banner discord">
        <div className="publi__banner__left">
          <img className="discordTitle" src={discordTitle} alt="" />
        </div>
        <div className="publi__banner__right">
          <p>Rejoins Nous</p>
          <div className="publi__banner__right__picture">
            <img className="publi__banner__right__picture__discord" src={discord} alt="" />
            <img className="publi__banner__right__picture__teamSlip" src={teamSlip} alt="" />
          </div>
        </div>
      </div>
    </a>
  </div>
)

export default Publicity
