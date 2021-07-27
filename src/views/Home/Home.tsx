import tw from 'twin.macro'
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo'
import { NavButton } from 'components/NavButton/NavButton'
import { Link } from 'react-router-dom'

import { RecommendationTiles } from 'components/RecommendationTiles/RecommendationTiles'
import { BlankProgressIndicator } from 'components/ProgressBar/ProgressIndicator'
import { abstractParticles } from 'assets/models'

export type HomeViewProps = {
  startRoute: string
}

const Head = tw.div`flex flex-row items-center justify-between flex-grow w-full text-left`
const Body = tw.div`lg:flex-row flex flex-col items-center justify-between flex-grow`
const ColLeft = tw.div`lg:mt-0 flex flex-col justify-around mt-6`
const ColRight = tw.div`min-w-max lg:my-0 lg:ml-10 my-12`

const Foot = tw.div`lg:pb-0 flex flex-row items-start justify-end flex-grow w-full h-16 pb-20 my-0`

const AbstractImage = tw.div`lg:min-w-sm mb-4 overflow-visible`
const IntroCopy = tw.div`lg:p-0 lg:text-left w-full text-center`

export const Home: React.FC<HomeViewProps> = (props) => {
  return (
    <div className="lg:max-w-5xl flex flex-col h-screen max-w-xl px-10 m-auto">
      <Head>
        <div className="h-24">
          <AerosolveLogo />
        </div>
        <div className="lg:block hidden">
          <BlankProgressIndicator />
        </div>
      </Head>
      <Body>
        <ColLeft>
          <AbstractImage>
            {/* <div className="min-w-4xl h-full border"></div> */}
            <img src={abstractParticles} alt="Person in empty room" className="w-full h-auto" />
          </AbstractImage>
          <IntroCopy>
            <h1 className="text-4xl font-bold text-blue-500">
              An interactive guide to making your space safer
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Aerosolve allows you to determine the safety level of your indoor space from aerosol
              transmission of COVID-19, and provides actionable recommendations for how to make it
              as safe as possible.
            </p>
          </IntroCopy>
        </ColLeft>
        <ColRight>
          <RecommendationTiles />
        </ColRight>
      </Body>
      <Foot>
        <Link to={props.startRoute}>
          <NavButton onClick={() => {}} direction="next" label="Get Started" />
        </Link>
      </Foot>
    </div>
  )
}
