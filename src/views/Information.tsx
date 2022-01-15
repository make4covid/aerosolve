/** @jsxImportSource @emotion/react */

import tw, { css } from "twin.macro";

const SectionContent = tw.div`mt-5 mb-8`;

const styles = css`
  h2 {
    ${tw`sticky top-0 z-20 pt-3 pb-2 text-xl font-bold bg-white border-b`}
  }
  h3 {
    ${tw`sticky z-10 pt-3 pb-1 text-lg font-semibold bg-white border-b top-12`}
  }
  p {
    ${tw`my-2`}
  }
  ol {
    ${tw`ml-5 list-decimal`}
  }
  li {
    ${tw`my-1.5 pl-3`}
  }
  a {
    ${tw`text-blue-500`}
  }
`;

export const Information: React.FC<{}> = (props) => {
  return (
    <div
      className="absolute top-0 flex flex-col w-5/6 h-screen max-w-4xl pt-8 mr-2 overflow-visible min-w-lg"
      css={styles}
    >
      <h1 className="z-30 flex-grow-0 flex-shrink-0 w-full py-3 text-3xl font-bold bg-white border-b">
        Aerosolve Information
      </h1>
      <div
        className="relative flex-grow w-full pr-6 overflow-auto scroll"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="max-w-4xl">
          <section>
            <h2>How to use Aerosolve</h2>
            <SectionContent>
              <p>
                This model has helped us to understand what we can do to make
                our spaces safer. We want to help you do the same. To make the
                best use of Aerosolve, we encourage you to:
              </p>
              <ol>
                <li>
                  Use realistic estimates (when accurate measurements aren’t
                  available) to represent your space as best as you can, and
                  update these estimates as you observe and learn more about
                  your space, human behavior, and the relative importance of
                  different factors.
                </li>
                <li>
                  Experiment with various inputs. See how much they impact your
                  space’s safety, and get a better understanding of what’s going
                  on so you can focus your efforts to make changes that will be
                  impactful.
                </li>
                <li>
                  Act on the recommendations. Even if your space seems safe,
                  there may be simple ways to make it even safer for occupants.
                </li>
              </ol>
            </SectionContent>
          </section>
          <section>
            <h2>How it works</h2>
            <SectionContent>
              <p>
                This app uses a mathematical model developed by MIT
                <sup>
                  <a href="#ref1">1</a>
                </sup>{" "}
                for predicting the likelihood of indoor COVID transmission
                aerosols, which are tiny particles of vapor (similar to fog)
                moving freely through the air.
              </p>
              <p>
                The model doesn’t account for fomite transmission, which takes
                place when someone touches a surface that a contagious
                individual touched, sneezed, or coughed on, and which is
                effectively mitigated by hand-washing, proper mask usage, and
                routine surface sanitation.
              </p>
              <p>
                It also doesn’t account for direct transmission, in which a
                contagious person exposes another by talking, sneezing, or
                coughing in close proximity, and which is effectively
                counteracted by social distancing.
              </p>
            </SectionContent>
          </section>
          <section>
            <h2>What it’s calculating</h2>
            <SectionContent>
              <p>
                Given information about your space and how people use it, the
                model calculates how long it may take for the aerosol
                concentration to become high enough from a contagious person in
                a space to put other occupants at risk by breathing in the air.
              </p>
              <p>
                The assumption that a contagious person is in the space is
                important because it’s currently impossible to rule it out. This
                allows us to take steps to make the space as safe as possible,
                even when contagious people might be present.
              </p>
            </SectionContent>
          </section>
          <section>
            <h2>Heuristics</h2>
            <SectionContent>
              <p>
                The model uses data about a space that most people don’t know or
                have the ability to find. To make it easy to use, the app
                simplifies data inputs through a series of straightforward
                questions, and then applies moderately conservative estimates
                for the values each answer might represent. The downside is that
                using these kinds of heuristics makes the model less accurate
                and reliable.
              </p>
              <p>
                If you find the model is too simplistic and are interested in
                getting a more precise understanding of both the model and how
                it applies to a particular space, please visit and explore the
                original MIT model.
              </p>
            </SectionContent>
          </section>
          <section>
            <h2>Model Variables</h2>
            <section>
              <h3>Location</h3>
              <SectionContent>
                <p>
                  As more people are vaccinated, the rate of COVID-19
                  transmission in an area drops. The app uses real-time
                  vaccination data from the CDC to estimate immunity in your
                  county. Naturally, counties with high vaccination rates will
                  be safer, so indoor spaces will be able to safely accommodate
                  more people. Logically, counties with higher vaccination rates
                  should be safer, and indoor spaces should be able to safely
                  accommodate more people.
                </p>
              </SectionContent>
            </section>
            <section>
              <h3>Type of Space & Dimensions</h3>
              <SectionContent>
                <p>
                  When people aggregate in small spaces, the concentration of
                  exhaled aerosols is higher than in a larger space, making it
                  more likely for other occupants to be exposed to these
                  aerosols. In large rooms which may have features such as high
                  ceilings, aerosols have more space to spread out. Even if a
                  contagious individual is present, there is less risk of
                  occupants being exposed to high concentrations of
                  virus-bearing aerosols.
                </p>
              </SectionContent>
            </section>
            <section>
              <h3>Occupant Ages</h3>
              <SectionContent>
                <p>
                  Unfortunately, COVID-19 doesn’t affect everyone the same. As
                  we know, elderly people are more likely than healthy adults
                  and children to contract the virus, and more likely to
                  experience symptoms that increase the transmission risk, such
                  as coughing and sneezing. In spaces frequented by elderly
                  people, the capacity should be limited to fewer people and
                  shorter interaction times.
                </p>
              </SectionContent>
            </section>
            <section>
              <h3>Vocal Activity</h3>
              <SectionContent>
                <p>
                  This may be one of the most important, and possibly least
                  known factors in COVID-19 transmission. Loud, resonant voices
                  release far more aerosols into the air compared to breathing
                  or whispering. As our vocal cords vibrate, saliva particles
                  are broken down into smaller and smaller droplets before
                  they’re exhaled. When we speak loudly or sing, we exhale at a
                  much higher volume. This makes activities such as singing,
                  particularly in an indoor public space, one of the most
                  dangerous things a contagious person can do with respect to
                  COVID-19. Fortunately, it’s also one of the easier things to
                  mitigate against.
                </p>
              </SectionContent>
            </section>
            <section>
              <h3>Physical Activity</h3>
              <SectionContent>
                <p>
                  Similar to singing, moderate and intense physical exercise
                  makes people breathe harder, so the aerosol concentration in a
                  space can increase to dangerous levels much more quickly.
                  While it’s not as risky as a single individual singing, it’s
                  more common for many people to be exercising in a space than
                  it is for people to be singing. Collectively, this can make
                  indoor group exercise riskier depending on the factors within
                  a given space.
                </p>
              </SectionContent>
            </section>
            <section>
              <h3>Masks</h3>
              <SectionContent>
                <p>
                  Proper usage of masks is one of the best ways to prevent the
                  spread of COVID-19. There are three important factors
                  regarding masks.
                </p>
                <ol>
                  <li>
                    Type of Mask: Some masks are better than others. Single
                    layer fabric masks are less effective than double layer
                    fabric masks. Cotton masks are less effective than silk
                    masks. Disposable surgical masks are better than most
                    reusable cloth masks.N95 masks are the most effective of
                    all. There are also several kinds of masks that are not
                    effective. Masks with ventilation holes (even one-way
                    valves) should not be used because they allow unfiltered,
                    exhaled air into a space. Neck gaiters, balaclavas, and
                    bandanas are also ineffective because they don’t provide any
                    kind of seal to allow air to flow around, rather than
                    through them.
                  </li>
                  <li>
                    Mask Fit: Gaps around the edges of masks, whether below the
                    chin, around the nose, or along the cheeks, allow air to
                    flow around the mask and bypass the filter. A poorly fitted
                    mask can be less than half as effective as a properly
                    fitting mask.
                  </li>
                  <li>
                    Proper Coverage: Improperly worn masks (i.e. masks that
                    don’t fully cover both the nose and mouth) are entirely
                    ineffective and people wearing masks in this manner should
                    be considered “unmasked.”
                  </li>
                </ol>
              </SectionContent>
            </section>
            <section>
              <h3>Ventilation + Filtration</h3>
              <SectionContent>
                <p>
                  Until this point, most of the factors contribute to how
                  quickly exhaled aerosols build up in a space. Ventilation and
                  filtration, on the other hand, are the only ways in which
                  these aerosols are removed from the space. Ventilation is the
                  process of replacing contaminated indoor air with fresh indoor
                  air, while filtration is the process of removing contaminants
                  from indoor air as it circulates. That means that well
                  ventilated spaces with efficient filtration systems are safer
                  for occupants than spaces that are sealed off and stagnant.
                </p>
                <p>
                  Ventilation and filtration is also the weakest point in the
                  model, and the most likely source of errors. Here’s why:
                </p>
                <ol>
                  <li>
                    Air mixing: The model assumes the air in every room is well
                    mixed, which isn’t often not the case. Rooms with strong air
                    currents or rooms where the air doesn't mix well are not
                    well represented by this model. HVAC Systems: Aerosolve is
                    not designed to look at an entire HVAC systems, which
                    ventilate several rooms or an entire building). This model
                    only looks at aerosol concentrations in a single room.
                  </li>
                  <li>
                    Temperature: It's common for spaces to be optimized for
                    climate control, not ventilation, which means each space
                    will change throughout the year as outdoor temperatures
                    change. This means there may be significant differences in
                    each room and a switch from cooling to heating may change
                    safety levels.
                  </li>
                  <li>
                    Measurement Difficulty: Accurately calculating the rate of
                    ventilation and filtration in a space can be very difficult
                    and require specialized equipment and knowledge. The
                    heuristics we use to simplify this can introduce significant
                    error when it comes to evaluating a particular space.
                  </li>
                </ol>
              </SectionContent>
            </section>
          </section>
          <section>
            <h2>Recommendations</h2>
            <SectionContent>
              <p>
                We provide actionable recommendations to help make your space as
                safe as possible. But even the best efforts to make a space safe
                can be undermined by factors that go unaccounted for (like
                changes in temperature or the configuration of large objects in
                the room) and individual behavior (like not wearing masks or
                wearing masks improperly). The recommendations we offer can
                mitigate the risk of aerosol transmission of COVID-19, but they
                can’t entirely eliminate it.
              </p>
            </SectionContent>
          </section>
          <section className="mb-60">
            <h2>References & Additional Resources </h2>
            <SectionContent>
              <ol>
                <li id="ref1">
                  <a
                    href="https://indoor-covid-safety.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    COVID-19 Indoor Safety Guideline
                  </a>{" "}
                  - Kasim Khan, John W. M. Bush, and Martin Z. Bazant
                </li>
                <li id="ref1">
                  <a
                    href="https://indoor-covid-safety.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    COVID-19 Indoor Safety Guideline
                  </a>{" "}
                  - Kasim Khan, John W. M. Bush, and Martin Z. Bazant
                </li>
              </ol>
            </SectionContent>
          </section>
        </div>
      </div>
    </div>
  );
};
