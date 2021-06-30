import tw from 'twin.macro'
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo'
import { NavButton } from 'components/NavButton/NavButton'
import { Link } from 'react-router-dom'

import Abstract from 'assets/models/abstract.png'
import { ReactComponent as Particles } from 'assets/svg/particles.svg'
import { RecommendationTiles } from 'components/RecommendationTiles/RecommendationTiles'
import { BlankProgressIndicator } from 'components/ProgressBar/ProgressIndicator'

export type HomeViewProps = {
  startRoute: string
}

const Head = tw.div`flex-grow flex flex-row justify-between w-full items-center text-left`
const Body = tw.div`flex-grow flex flex-col lg:flex-row justify-between items-center`
const ColLeft = tw.div`flex flex-col justify-around mt-6 lg:mt-0`
const ColRight = tw.div`min-w-max my-12 lg:my-0 lg:ml-10`

const Foot = tw.div`h-16 w-full justify-end flex-grow items-start flex flex-row my-0 pb-20 lg:pb-0`

const AbstractImage = tw.div`overflow-visible mb-4 lg:min-w-sm`
const IntroCopy = tw.div`text-center w-full lg:p-0 lg:text-left`

export const Home: React.FC<HomeViewProps> = (props) => {
  return (
    <div className="flex flex-col h-screen max-w-xl px-10 m-auto lg:max-w-5xl">
      <Head>
        <div className="h-24">
          <AerosolveLogo />
        </div>
        <div className="hidden lg:block">
          <BlankProgressIndicator />
        </div>
      </Head>
      <Body>
        <ColLeft>
          <AbstractImage>
            {/* <div className="h-full border min-w-4xl"></div> */}
            <img src={Abstract} alt="Person in empty room" className="w-full h-auto" />
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
